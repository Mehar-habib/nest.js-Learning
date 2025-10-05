import { Module } from '@nestjs/common';
import { Project3Controller } from './project3.controller';
import { Project3Service } from './project3.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Developer, DeveloperSchema } from './schema/developer.schema';
import { Project, ProjectSchema } from './schema/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Developer.name, schema: DeveloperSchema },
      { name: Project.name, schema: ProjectSchema },
    ]),
  ],
  controllers: [Project3Controller],
  providers: [Project3Service],
})
export class Project3Module {}
