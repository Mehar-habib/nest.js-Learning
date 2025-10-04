import { Controller, Get, Post } from '@nestjs/common';
import { User2Service } from './user2.service';

@Controller('user2')
export class User2Controller {
  constructor(private readonly user2Service: User2Service) {}

  @Post()
  create() {
    return this.user2Service.createUser();
  }

  @Get()
  getAll() {
    return this.user2Service.findAll();
  }
}
