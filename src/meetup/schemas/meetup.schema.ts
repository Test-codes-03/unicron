import{Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MeetupDocument = MeetUp& Document;

@Schema()
export class MeetUp{
    @Prop({required:true})
    MEETUP_CREATE_ID: string;
    @Prop({required:true})
    MEETUP_TO_ID: string;
    @Prop({required:true})
    MEETUP_LOCATION:string;
    @Prop({required:true})
    MEETUP_DISCUSSED_ABOUT: string;
    @Prop({required:true, default: "draft"})
    MEETUP_STATUS: string;
    @Prop({ required: true, default: () => new Date() })
    MEETUP_CREATE_DATE: Date;
    @Prop({ required: true, default: () => new Date() })
    MEETUP_UPDATE_DATE: Date;
    @Prop({required:true})
    MEETUP_UPDATE_ID: string;

}

export const MeetUpSchema=SchemaFactory.createForClass(MeetUp);

MeetUpSchema.index(
    { MEETUP_CREATE_ID: 1, MEETUP_TO_ID: 1, MEETUP_CREATE_DATE: 1 },
    { unique: true }
  );