import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetUpDto } from './create-meetup.dto';

export class UpdateMeetupDto extends PartialType(CreateMeetUpDto) {}
