// NestJS se required decorators aur classes import
import {
  Controller, // controller banane ke liye
  Get, // GET request ke liye
  Param, // route parameter ko access karne ke liye
  ParseIntPipe, // pipe: jo string param ko number me convert karega
  UseFilters, // custom filter ko apply karne ke liye
} from '@nestjs/common';

// custom exception filter import kar rahe hain
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

// Controller banaya jiska base route "/exception" hai
@Controller('exception')
// Yahan @UseFilters decorator lagaya → is controller ke andar jitne bhi routes hain
// unpe agar error aata hai to HttpExceptionFilter use hoga
@UseFilters(HttpExceptionFilter)
export class ExceptionController {
  // Route: GET /exception/hello/:id
  @Get('hello/:id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    // id param ko ParseIntPipe integer banayega
    // Agar user string bhejega (like "abc"), pipe error throw karega (BadRequestException)
    // aur wo error humara HttpExceptionFilter catch karega

    return { message: `Hello ${id}` };
  }
}
