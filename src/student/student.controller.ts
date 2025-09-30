import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getAll() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.studentService.getStudentById(+id);
  }

  @Post()
  create(@Body() body: { name: string; age: number }) {
    return this.studentService.createStudent(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Body: { name: string; age: number }) {
    return this.studentService.updateStudent(+id, Body);
  }

  @Patch(':id')
  patch(
    @Param('id') id: string,
    @Body() Body: Partial<{ name: string; age: number }>,
  ) {
    return this.studentService.patchStudent(+id, Body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.deleteStudent(+id);
  }
}
