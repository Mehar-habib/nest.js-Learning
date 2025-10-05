import { Controller, Get, Post } from '@nestjs/common';
import { LibaryService } from './libary.service';

@Controller('libary')
export class LibaryController {
  constructor(private readonly libaryService: LibaryService) {}

  @Post()
  createLibary() {
    return this.libaryService.createLibary();
  }

  @Get()
  getLibaries() {
    return this.libaryService.getLibaries();
  }
}
