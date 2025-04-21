import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetUpDto } from './create-meetup.dto';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';


export class UpdateMeetupDto extends PartialType(CreateMeetUpDto) {
    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    MEETUP_UPDATE_ID: string;
   @IsOptional()
    @Transform(({ value }) => sanitize(value))
    MEETUP_STATUS?:string;
  }
  