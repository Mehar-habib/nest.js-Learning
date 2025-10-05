import { Controller, Get, Post } from '@nestjs/common';
import { Project3Service } from './project3.service';

@Controller('project3')
export class Project3Controller {
  constructor(private readonly service: Project3Service) {}
  @Post('seed')
  seed() {
    return this.service.seed();
  }
  @Get('developers')
  getDevelopers() {
    return this.service.getAllDevelopers();
  }

  @Get()
  getProjects() {
    return this.service.getAllProjects();
  }
}
