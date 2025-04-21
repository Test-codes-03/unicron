import { sanitize } from "class-sanitizer";
import { Transform } from "class-transformer";
import { IsMobilePhone, IsNotEmpty } from "class-validator";

export class CreateConnectDto {
      @IsNotEmpty()
      @Transform(({ value }) => sanitize(value))
      CONNECT_CREATE_ID: string;
    
      @IsNotEmpty()
      @Transform(({ value }) => sanitize(value))
      CONNECT_TO_ID: string;
    
      @IsNotEmpty()
      @Transform(({ value }) => sanitize(value))
      CONNECT_BUSINESS_NAME: string;
    
      @IsNotEmpty()
      @Transform(({ value }) => sanitize(value))
      CONNECT_ADDRESS: string;

      @IsNotEmpty()
      @IsMobilePhone('en-IN') // or 'any', based on locale
      @Transform(({ value }) => sanitize(value))
      CONNECT_CONTANCT_NUMBER: string;

      @IsNotEmpty()
      @Transform(({ value }) => sanitize(value))
      CONNECT_COMMENTS: string;
}

