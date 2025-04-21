import { BadRequestException, ConflictException, Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {MeetUp,MeetupDocument} from './schemas/meetup.schema';
import { CreateMeetUpDto } from './dto/create-meetup.dto';
import { UpdateMeetupDto } from './dto/update-meetup.dto';

@Injectable()
export class MeetUpService {
  constructor(@InjectModel(MeetUp.name) private userModel:Model<MeetupDocument>){}
  async create(createDto: CreateMeetUpDto): Promise<MeetUp> {
    const now = new Date();
const normalizedDate = new Date(now.toISOString().split('T')[0]); // only YYYY-MM-DD

const exists = await this.userModel.findOne({
  MEETUP_CREATE_ID: createDto.MEETUP_CREATE_ID,
  MEETUP_TO_ID: createDto.MEETUP_TO_ID,
  MEETUP_CREATE_DATE: normalizedDate,
});
const exists1 = await this.userModel.findOne({
  MEETUP_CREATE_ID: createDto.MEETUP_TO_ID,
  MEETUP_TO_ID: createDto.MEETUP_CREATE_ID,
  MEETUP_CREATE_DATE: normalizedDate,
});

if (exists || exists1) {
  throw new ConflictException('Meetup already exists for the same users on this date.');
}

const newMeetup = new this.userModel({
  ...createDto,
  MEETUP_STATUS: 'draft',
  MEETUP_CREATE_DATE: normalizedDate,
  MEETUP_UPDATE_DATE: now,
  MEETUP_UPDATE_ID: createDto.MEETUP_CREATE_ID,
});

return await newMeetup.save();

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

  async update(id: string, updateDto: UpdateMeetupDto): Promise<MeetUp> {
    const updated = await this.userModel.findByIdAndUpdate(
      id,
      {
        ...updateDto,
        MEETUP_UPDATE_DATE: new Date()
      },
      { new: true }
    );
  
    if (!updated) throw new NotFoundException('Meet up not Found');
    return updated;
  }
  

  async remove(id: string): Promise<{deleteed:boolean}> {
    const result = await this.userModel.deleteOne({_id:id});
    return {deleteed:result.deletedCount>0};
  }
}
