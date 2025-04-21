//user.schema.ts
import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema({timestamps:true})

export class User{
    //@Prop({required:true})
    //name:string;
//
    //@Prop({required:true,unique:true})
    //email:string
//
    //@Prop({required:true})
    //password:string;
//
    //@Prop({default:'user'})
    //role: string;


    @Prop({required:true})
    PARTNER_NAME:string;
    @Prop({required:true})
    PARTNER_BUSINESS_CATEGORY:string;
    @Prop({required:true,unique:true})
    PARTNER_NUMBER:number;
    @Prop({default:'/img/profile.png'})
    PARTNER_IMAGEURL:string;
    @Prop({default:'NONE'})
    PARTNER_REFERED_BY_ID:string;
    @Prop({default:'NORMAL'})
    PARTNER_USER_TYPE:string;
    @Prop({default:'12345678'})
    PASSWORD:string;
    @Prop({default:'ACTIVE'})
    PARTNER_STATUS:string;
    @Prop({required:true})
    PARTNER_CREATE_ID:string;
    @Prop({ required: true, default: () => new Date() })
    PARTNER_CREATE_DATE: Date;
    @Prop({required:true})
    PARTNER_UPDATE_ID:string;
    @Prop({ required: true, default: () => new Date() })
    PARTNER_UPDATE_DATE: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);


