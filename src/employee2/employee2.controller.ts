import { Controller, Get, Post } from '@nestjs/common';
import { Employee2Service } from './employee2.service';

@Controller('employee2')
export class Employee2Controller {
  constructor(private readonly employee2Service: Employee2Service) {}

  @Post()
  create() {
    return this.employee2Service.createEmployee();
  }

  @Get()
  getAll() {
    return this.employee2Service.findAll();
  }
}
