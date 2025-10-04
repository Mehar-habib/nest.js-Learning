import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';
import { StudentNewService } from './student-new.service';
import { StudentNewController } from './student-new.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  providers: [StudentNewService],
  controllers: [StudentNewController],
})
export class StudentNewModule {}
