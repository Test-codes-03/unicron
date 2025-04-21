import { PartialType } from '@nestjs/mapped-types';
import { CreateAppreciationDto } from './create-appreciation.dto';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';

export class UpdateAppreciationDto extends PartialType(CreateAppreciationDto) {


    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    APPPRECIATION_UPDATE_ID: string;
  
    @IsOptional()
    @Transform(({ value }) => sanitize(value))
    APPRECIATION_STATUS?: string;
  
    @IsOptional()
    @Transform(({ value }) => sanitize(value))
    APPRECIATION_CREATE_STATUS?: string;
}



