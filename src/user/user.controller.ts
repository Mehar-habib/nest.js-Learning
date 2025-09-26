/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('user') // base route
export class UserController {
  @Get()
  getUser() {
    return 'Hello Mehar Habib !!    ';
  }
}
