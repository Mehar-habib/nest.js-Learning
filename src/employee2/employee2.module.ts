import { Module } from '@nestjs/common';
import { Employee2Service } from './employee2.service';
import { Employee2Controller } from './employee2.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schema/employee.schema';
import { Profile, ProfileSchema } from './schema/profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Profile.name, schema: ProfileSchema },
    ]),
  ],
  providers: [Employee2Service],
  controllers: [Employee2Controller],
})
export class Employee2Module {}
