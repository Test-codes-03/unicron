import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {MeetUp,MeetupDocument} from './schemas/meetup.schema';
import { CreateMeetUpDto } from './dto/create-meetup.dto';
import { UpdateMeetupDto } from './dto/update-meetup.dto';

@Injectable()
export class MeetUpService {
  constructor(@InjectModel(MeetUp.name) private userModel:Model<MeetupDocument>){}
  async create(createUserDto: CreateMeetUpDto) : Promise<MeetUp>{
    const newuser = new this.userModel(createUserDto);
    var result=await newuser.save();
    return result;
  
  }

  async findAll(): Promise<MeetUp[]>{
    var result = await this.userModel.find().exec();
    return result;
    
  }

  async findOne(id: string) :Promise<MeetUp>{
    const user = await this.userModel.findById(id).exec();
    if(!user) throw new NotFoundException('Meet up not found');
    return user;
    
  }

  async update(id: string, updateUserDto: UpdateMeetupDto):Promise<MeetUp> {
    const updated = await this.userModel.findByIdAndUpdate(id,updateUserDto,{
      new: true,
    });
    if (!updated) throw new NotFoundException('Meet up not Found');
    return updated;
    
  }

  async remove(id: string): Promise<{deleteed:boolean}> {
    const result = await this.userModel.deleteOne({_id:id});
    return {deleteed:result.deletedCount>0};
  }
}
