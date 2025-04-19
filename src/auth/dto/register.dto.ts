import { sanitize } from "class-sanitizer";
import { Transform } from "class-transformer";
import { IsEmail,IsNotEmpty,MinLength } from "class-validator";

export class RegisterDto {
@IsNotEmpty()
@Transform(({ value }) => sanitize(value))
name: string;

@IsEmail()
@Transform(({ value }) => sanitize(value))
email: string;

@MinLength(8)
@Transform(({ value }) => sanitize(value))
password: string;
}