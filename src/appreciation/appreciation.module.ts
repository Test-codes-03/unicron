import { Module } from '@nestjs/common';
import { AppreciationService } from './appreciation.service';
import { AppreciationController } from './appreciation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Appreciation, AppreciationSchema } from './schemas/appreciation.schema';

@Module({
    imports:[
      MongooseModule.forFeature([{name:Appreciation.name,schema:AppreciationSchema}])
    ],
  controllers: [AppreciationController],
  providers: [AppreciationService],
})
export class AppreciationModule {}
