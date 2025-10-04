import { Test, TestingModule } from '@nestjs/testing';
import { StudentNewController } from './student-new.controller';

describe('StudentNewController', () => {
  let controller: StudentNewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentNewController],
    }).compile();

    controller = module.get<StudentNewController>(StudentNewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
