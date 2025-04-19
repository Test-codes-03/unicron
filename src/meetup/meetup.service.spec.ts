import { Test, TestingModule } from '@nestjs/testing';
import { MeetUpService } from './meetup.service';

describe('MeetUpService', () => {
  let service: MeetUpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetUpService],
    }).compile();

    service = module.get<MeetUpService>(MeetUpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
