import { Test, TestingModule } from '@nestjs/testing';
import { LibaryController } from './libary.controller';

describe('LibaryController', () => {
  let controller: LibaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibaryController],
    }).compile();

    controller = module.get<LibaryController>(LibaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
