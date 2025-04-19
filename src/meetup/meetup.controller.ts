import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MeetUpService } from './meetup.service';
import { CreateMeetUpDto } from './dto/create-meetup.dto';
import { UpdateMeetupDto } from './dto/update-meetup.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('meet-up')
@UseGuards(JwtAuthGuard,RolesGuard)
export class MeetUpController {
  constructor(private readonly MeetUpService: MeetUpService) {}


  @Roles('user', 'admin') 
  @Post()
  create(@Body() createMeetupDto: CreateMeetUpDto) {
    return this.MeetUpService.create(createMeetupDto);
  }
  @Roles('user', 'admin') 
  @Get()
  findAll() {
    return this.MeetUpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.MeetUpService.findOne(id);
  }
 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateMeetupDto) {
    return this.MeetUpService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.MeetUpService.remove(id);
  }
}
