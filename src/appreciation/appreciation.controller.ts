import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AppreciationService } from './appreciation.service';
import { CreateAppreciationDto } from './dto/create-appreciation.dto';
import { UpdateAppreciationDto } from './dto/update-appreciation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';




@Controller('appreciation')
@UseGuards(JwtAuthGuard,RolesGuard)
export class AppreciationController {
  constructor(private readonly appreciationService: AppreciationService) {}
  @Roles('NORMAL', 'admin') 
  @Post()
  create(@Body() createAppreciationDto: CreateAppreciationDto) {
    return this.appreciationService.create(createAppreciationDto);
  }
  @Roles('NORMAL', 'admin') 
  @Get()
  findAll() {
    return this.appreciationService.findAll();
  }
  @Roles('NORMAL', 'admin') 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appreciationService.findOne(id);
  }
  @Roles('NORMAL', 'admin') 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppreciationDto: UpdateAppreciationDto) {
    return this.appreciationService.update(id, updateAppreciationDto);
  }
  @Roles('NORMAL', 'admin') 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appreciationService.remove(id);
  }
}
