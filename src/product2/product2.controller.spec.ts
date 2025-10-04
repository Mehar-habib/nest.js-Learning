import { Test, TestingModule } from '@nestjs/testing';
import { Product2Controller } from './product2.controller';

describe('Product2Controller', () => {
  let controller: Product2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Product2Controller],
    }).compile();

    controller = module.get<Product2Controller>(Product2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
