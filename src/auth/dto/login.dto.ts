//login.dto.ts
import { sanitize } from 'class-sanitizer';
import { Transform } from 'class-transformer';
import { IsMobilePhone, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
@IsMobilePhone('en-IN') // or 'any', based on locale
@Transform(({ value }) => sanitize(value))
  PARTNER_NUMBER: string;

  @IsNotEmpty()
  @Transform(({ value }) => sanitize(value))
  PASSWORD: string;
}
