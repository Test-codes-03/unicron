import { sanitize } from 'class-sanitizer';
import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateMeetUpDto {
  @IsNotEmpty()
  @Transform(({ value }) => sanitize(value))
  MEETUP_CREATE_ID: string;

  @IsNotEmpty()
  @Transform(({ value }) => sanitize(value))
  MEETUP_TO_ID: string;

  @IsNotEmpty()
  @Transform(({ value }) => sanitize(value))
  MEETUP_LOCATION: string;

  @IsNotEmpty()
  @Transform(({ value }) => sanitize(value))
  MEETUP_DISCUSSED_ABOUT: string;
}
