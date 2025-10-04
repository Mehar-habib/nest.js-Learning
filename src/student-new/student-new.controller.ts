import { Body, Controller, Post } from '@nestjs/common';
import { StudentNewService } from './student-new.service';
import { Student } from './student.schema';

@Controller('student-new')
export class StudentNewController {
  constructor(private readonly studentNewService: StudentNewService) {}

  @Post()
  async addStudent(@Body() data: Partial<Student>) {
    return this.studentNewService.createStudent(data);
  }
}
