import { Test, TestingModule } from '@nestjs/testing';
import { Project3Controller } from './project3.controller';

describe('Project3Controller', () => {
  let controller: Project3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Project3Controller],
    }).compile();

    controller = module.get<Project3Controller>(Project3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
