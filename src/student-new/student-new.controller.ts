import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentNewService } from './student-new.service';
import { Student } from './student.schema';

@Controller('student-new')
export class StudentNewController {
  constructor(private readonly studentNewService: StudentNewService) {}

  @Post()
  async addStudent(@Body() data: Partial<Student>) {
    return this.studentNewService.createStudent(data);
  }

  @Get()
  async getStudents() {
    return this.studentNewService.getAllStudents();
  }

  @Get(':id')
  async getStudent(@Param('id') id: string) {
    return this.studentNewService.getStudentById(id);
  }
}
