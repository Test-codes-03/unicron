import { sanitize } from 'class-sanitizer';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @Transform(({ value }) => sanitize(value))
  email: string;

  @IsNotEmpty()
  @Transform(({ value }) => sanitize(value))
  password: string;
}
