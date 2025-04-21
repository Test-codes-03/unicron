import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ConnectService } from './connect.service';
import { CreateConnectDto } from './dto/create-connect.dto';
import { UpdateConnectDto } from './dto/update-connect.dto';
import { Connect } from './schemas/connect.schema';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';


@Controller('connect')
@UseGuards(JwtAuthGuard,RolesGuard)
export class ConnectController {
  constructor(private readonly connectService: ConnectService) {}

  @Post()
  create(@Body() createConnectDto: CreateConnectDto) {
    return this.connectService.create(createConnectDto);
  }

@Roles('NORMAL', 'admin') 
  @Get()
  findAll() {
    return this.connectService.findAll();
  }
  @Roles('NORMAL', 'admin') 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connectService.findOne(id);
  }
  @Roles('NORMAL', 'admin') 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConnectDto: UpdateConnectDto) {
    return this.connectService.update(id, updateConnectDto);
  }
  @Roles('NORMAL', 'admin') 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.connectService.remove(id);
  }
  @Roles('NORMAL', 'admin') 
  @Get('given/:id')
  async getConnectionsGiven(@Param('id') id: string): Promise<Connect[]> {
    return this.connectService.findConnectionsGivenByUser(id);
  }
  @Roles('NORMAL', 'admin') 
  @Get('received/:id')
  async getConnectionsReceived(@Param('id') id: string): Promise<Connect[]> {
    return this.connectService.findConnectionsReceivedByUser(id);
  }
}
