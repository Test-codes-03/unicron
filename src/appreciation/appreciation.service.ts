import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppreciationDto } from './dto/create-appreciation.dto';
import { UpdateAppreciationDto } from './dto/update-appreciation.dto';
import { Appreciation, AppreciationDocument } from './schemas/appreciation.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppreciationService {
   constructor(@InjectModel(Appreciation.name) private appreciationModel:Model<AppreciationDocument>){}
      async create(createAppreciationDto: CreateAppreciationDto): Promise<Appreciation> {
        const now = new Date();
        const newConnect = new this.appreciationModel({
          ...createAppreciationDto,
          APPRECIATION_STATUS: 'draft',
          APPRECIATION_CREATE_STATUS: 'draft',
          APPRECIATION_UPDATE_DATE: now,
          APPRECIATION_CREATE_DATE: now,
          APPPRECIATION_UPDATE_ID: createAppreciationDto.APPRECIATION_CREATE_ID
        });
    
        return await newConnect.save();
    
    }
  

  
      async findAll(): Promise<Appreciation[]>{
        var result = await this.appreciationModel.find().exec();
        return result;
        
      }
    
      async findOne(id: string) :Promise<Appreciation>{
        const connect = await this.appreciationModel.findById(id).exec();
        if(!connect) throw new NotFoundException('Appreciation not found');
        return connect;
        
      }
    

  
      async update(id: string, updateDto: UpdateAppreciationDto): Promise<Appreciation> {
        const updated = await this.appreciationModel.findByIdAndUpdate(
          id,
          {
            ...updateDto,
            APPRECIATION_UPDATE_DATE: new Date()
          },
          { new: true }
        );
      
        if (!updated) throw new NotFoundException('Appreciation not Found');
        return updated;
      }
      
    
      async remove(id: string): Promise<{deleted:boolean}> {
        const result = await this.appreciationModel.deleteOne({_id:id});
        return {deleted:result.deletedCount>0};
      }
  }
  