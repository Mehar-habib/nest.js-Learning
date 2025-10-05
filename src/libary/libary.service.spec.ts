import { Test, TestingModule } from '@nestjs/testing';
import { LibaryService } from './libary.service';

describe('LibaryService', () => {
  let service: LibaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibaryService],
    }).compile();

    service = module.get<LibaryService>(LibaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
