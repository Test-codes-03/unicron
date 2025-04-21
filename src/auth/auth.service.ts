//auth.service.ts
import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {}

async register(dto: RegisterDto) {
  const existing = await this.userModel.findOne({ PARTNER_NUMBER: dto.PARTNER_NUMBER });
  if (existing) throw new BadRequestException('User already exists');
  const passwordToHash = dto.PASSWORD ?? '12345678';
  const hash = await bcrypt.hash(passwordToHash, 10);

  const user = new this.userModel({
    ...dto,
    PASSWORD: hash,
    PARTNER_CREATE_DATE: new Date(),
    PARTNER_UPDATE_DATE: new Date(),
  });

  await user.save();

  return { message: 'Registered successfully' };
}

async login(dto: LoginDto) {
  const user = await this.userModel.findOne({ PARTNER_NUMBER: dto.PARTNER_NUMBER });
  if (!user) throw new UnauthorizedException('Invalid credentials');

  const match = await bcrypt.compare(dto.PASSWORD, user.PASSWORD);
  if (!match) throw new UnauthorizedException('Invalid credentials');

  const payload = { sub: user._id, role: user.PARTNER_USER_TYPE };
  const token = this.jwtService.sign(payload);

  return {
    message: 'Login successful',
    token,
  };
}

}
