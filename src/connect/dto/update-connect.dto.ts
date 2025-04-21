import { PartialType } from '@nestjs/mapped-types';
import { CreateConnectDto } from './create-connect.dto';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';

export class UpdateConnectDto extends PartialType(CreateConnectDto) {
        @IsNotEmpty()
        @Transform(({ value }) => sanitize(value))
        CONNECT_UPDATE_USER_ID: string;
   @IsOptional()
    @Transform(({ value }) => sanitize(value))
    CONNECT_STATUS?:string;
}




