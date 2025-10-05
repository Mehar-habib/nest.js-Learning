import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Developer } from './schema/developer.schema';
import { Model } from 'mongoose';
import { Project } from './schema/project.schema';

@Injectable()
export class Project3Service {
  constructor(
    @InjectModel(Developer.name) private developerModel: Model<Developer>,
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async seed(): Promise<{ dev1: Developer; dev2: Developer }> {
    const [projectA, projectB] = await Promise.all([
      this.projectModel.create({ title: 'Nest CRM' }),
      this.projectModel.create({ title: 'Nest Blog' }),
    ]);

    const [dev1, dev2] = await Promise.all([
      this.developerModel.create({
        name: 'Habib',
        projects: [projectA._id, projectB._id],
      }),
      this.developerModel.create({
        name: ' Ali',
        projects: [projectA._id],
      }),
    ]);

    await Promise.all([
      this.projectModel.findByIdAndUpdate(projectA._id, {
        $set: { developers: [dev1._id, dev2._id] },
      }),
      this.projectModel.findByIdAndUpdate(projectB._id, {
        $set: { developers: [dev1._id] },
      }),
    ]);

    return { dev1, dev2 };
  }

  async getAllDevelopers(): Promise<Developer[]> {
    return this.developerModel.find().populate('projects').exec();
  }
  async getAllProjects(): Promise<Project[]> {
    return this.projectModel.find().populate('developers').exec();
  }
}
