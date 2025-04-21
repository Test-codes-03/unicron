import { sanitize } from "class-sanitizer";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, IsMobilePhone, MinLength } from "class-validator";

export class RegisterDto {
  @IsNotEmpty()
  @Transform(({ value }) => sanitize(value))
  PARTNER_NAME: string;

  @IsNotEmpty()
  @Transform(({ value }) => sanitize(value))
  PARTNER_BUSINESS_CATEGORY: string;

  @IsNotEmpty()
@IsMobilePhone('en-IN') // or 'any', based on locale
@Transform(({ value }) => sanitize(value))
  PARTNER_NUMBER: string;

  @IsOptional()
  @Transform(({ value }) => sanitize(value))
  PARTNER_IMAGEURL?: string;

  @IsOptional()
  @Transform(({ value }) => sanitize(value))
  PARTNER_REFERED_BY_ID?: string;

  @IsOptional()
  @Transform(({ value }) => sanitize(value))
  PARTNER_USER_TYPE?: string;

  @IsOptional()
  @MinLength(8)
  @Transform(({ value }) => sanitize(value))
  PASSWORD?: string;

  @IsOptional()
  @Transform(({ value }) => sanitize(value))
  PARTNER_STATUS?: string;

  @IsNotEmpty()
  @Transform(({ value }) => sanitize(value))
  PARTNER_CREATE_ID: string;

  @IsNotEmpty()
  @Transform(({ value }) => sanitize(value))
  PARTNER_UPDATE_ID: string;
}
