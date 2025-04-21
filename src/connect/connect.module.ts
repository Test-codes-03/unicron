import { Module } from '@nestjs/common';
import { ConnectService } from './connect.service';
import { ConnectController } from './connect.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Connect, ConnectSchema } from './schemas/connect.schema';


@Module({
  imports:[
    MongooseModule.forFeature([{name:Connect.name,schema:ConnectSchema}])
  ],
  controllers: [ConnectController],
  providers: [ConnectService],
})
export class ConnectModule {}


