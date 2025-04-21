import { sanitize } from "class-sanitizer";
import { Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class CreateAppreciationDto {
    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    CONNECT_ID: string;
  
    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    CONNECTION_BY_PARTNER_ID: string;
  
    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    APPRECIATION_VALUES: string;
  
    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    COMMENTS: string;

    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    APPRECIATION_CREATE_ID: string;


}

