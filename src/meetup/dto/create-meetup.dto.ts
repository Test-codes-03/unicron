import { sanitize } from 'class-sanitizer';
import { Transform } from 'class-transformer';
import {IsNotEmpty} from 'class-validator';
export class CreateMeetUpDto {
    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    partner_name:string;

    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    location:string;

    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    discussion: string;

    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    meeting_date: Date;

    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    created_by: string;

    @IsNotEmpty()
    @Transform(({ value }) => sanitize(value))
    updated_at: Date;

    
}

