import { Test, TestingModule } from '@nestjs/testing';
import { Employee2Controller } from './employee2.controller';

describe('Employee2Controller', () => {
  let controller: Employee2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Employee2Controller],
    }).compile();

    controller = module.get<Employee2Controller>(Employee2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
