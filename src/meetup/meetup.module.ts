import { Module } from '@nestjs/common';
import { MeetUpService } from './meetup.service';
import { MeetUpController } from './meetup.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {MeetUp,MeetUpSchema} from './schemas/meetup.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:MeetUp.name,schema:MeetUpSchema}])
  ],
  controllers: [MeetUpController],
  providers: [MeetUpService],
})
export class MeetupModule {}
