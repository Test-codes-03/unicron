import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConnectDto } from './dto/create-connect.dto';
import { UpdateConnectDto } from './dto/update-connect.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Connect, ConnectDocument } from './schemas/connect.schema';

@Injectable()
export class ConnectService {
  constructor(@InjectModel(Connect.name) private connectModel:Model<ConnectDocument>){}
    async create(createConnectDto: CreateConnectDto): Promise<Connect> {
      const now = new Date();
      const newConnect = new this.connectModel({
        ...createConnectDto,
        CONNECT_STATUS: 'draft',
        CONNECT_CREATE_DATE: now,
        CONNECT_UPDATE_DATE: now,
        CONNECT_UPDATE_USER_ID: createConnectDto.CONNECT_CREATE_ID,
      });
  
      return await newConnect.save();
  
  }



    async findAll(): Promise<Connect[]>{
      var result = await this.connectModel.find().exec();
      return result;
      
    }
  
    async findOne(id: string) :Promise<Connect>{
      const connect = await this.connectModel.findById(id).exec();
      if(!connect) throw new NotFoundException('Connect not found');
      return connect;
      
    }
  
    async findConnectionsGivenByUser(userId: string): Promise<Connect[]> {
      return this.connectModel.find({ CONNECT_CREATE_ID: userId }).exec();
    }
    
    async findConnectionsReceivedByUser(userId: string): Promise<Connect[]> {
      return this.connectModel.find({ CONNECT_TO_ID: userId }).exec();
    }

    async update(id: string, updateDto: UpdateConnectDto): Promise<Connect> {
      const updated = await this.connectModel.findByIdAndUpdate(
        id,
        {
          ...updateDto,
          CONNECT_UPDATE_DATE: new Date()
        },
        { new: true }
      );
    
      if (!updated) throw new NotFoundException('Connect not Found');
      return updated;
    }
    
  
    async remove(id: string): Promise<{deleted:boolean}> {
      const result = await this.connectModel.deleteOne({_id:id});
      return {deleted:result.deletedCount>0};
    }
}
