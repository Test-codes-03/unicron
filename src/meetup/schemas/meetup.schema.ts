import{Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MeetupDocument = MeetUp& Document;

@Schema()
export class MeetUp{
    @Prop({required:true})
    partner_name: string;
    @Prop({required:true})
    location:string;
    @Prop({required:true})
    discussion: string;
    @Prop({required:true})
    meeting_date: Date;
    @Prop({required:true})
    created_by:string;
    @Prop({ required: true, default: () => new Date() })
    created_at: Date;
    @Prop({ required: true, default: () => new Date() })
    updated_at: Date;
}

export const MeetUpSchema=SchemaFactory.createForClass(MeetUp);
