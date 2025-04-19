import { Test, TestingModule } from '@nestjs/testing';
import { MeetUpController } from './meetup.controller';
import { MeetUpService } from './meetup.service';

describe('MeetupController', () => {
  let controller: MeetUpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeetUpController],
      providers: [MeetUpService],
    }).compile();

    controller = module.get<MeetUpController>(MeetUpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
