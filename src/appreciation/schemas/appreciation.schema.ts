import{Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppreciationDocument = Appreciation& Document;

@Schema()
export class Appreciation{
    @Prop({required:true})
    CONNECT_ID: string;
    @Prop({required:true})
    CONNECTION_BY_PARTNER_ID: string;
    @Prop({required:true})
    APPRECIATION_VALUES:string;
    @Prop({required:true})
    COMMENTS: string;
    @Prop({required:true, default: "draft"})
    APPRECIATION_STATUS: string;
    @Prop({required:true, default: "draft"})
    APPRECIATION_CREATE_STATUS: string;
    @Prop({required:true})
    APPRECIATION_CREATE_ID: string;
    @Prop({required:true})
    APPPRECIATION_UPDATE_ID: string;
    @Prop({ required: true, default: () => new Date() })
    APPRECIATION_UPDATE_DATE: Date;
    @Prop({ required: true, default: () => new Date() })
    APPRECIATION_CREATE_DATE: Date;
}


export const AppreciationSchema=SchemaFactory.createForClass(Appreciation);

