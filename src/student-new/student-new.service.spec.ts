import { Test, TestingModule } from '@nestjs/testing';
import { StudentNewService } from './student-new.service';

describe('StudentNewService', () => {
  let service: StudentNewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentNewService],
    }).compile();

    service = module.get<StudentNewService>(StudentNewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
