import{Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConnectDocument = Connect& Document;

@Schema()
export class Connect{
    @Prop({required:true})
    CONNECT_CREATE_ID: string;
    @Prop({required:true})
    CONNECT_TO_ID: string;
    @Prop({required:true})
    CONNECT_BUSINESS_NAME: string;
    @Prop({required:true})
    CONNECT_ADDRESS:string;
    @Prop({required:true})
    CONNECT_CONTANCT_NUMBER:string;
    @Prop({required:true})
    CONNECT_COMMENTS: string;
    @Prop({required:true, default: "draft"})
    CONNECT_STATUS: string;
    @Prop({ required: true, default: () => new Date() })
    CONNECT_CREATE_DATE: Date;
    @Prop({ required: true, default: () => new Date() })
    CONNECT_UPDATE_DATE: Date;
    @Prop({required:true})
    CONNECT_UPDATE_USER_ID: string;

}

export const ConnectSchema=SchemaFactory.createForClass(Connect);

