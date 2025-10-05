import { Test, TestingModule } from '@nestjs/testing';
import { Project3Service } from './project3.service';

describe('Project3Service', () => {
  let service: Project3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Project3Service],
    }).compile();

    service = module.get<Project3Service>(Project3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
