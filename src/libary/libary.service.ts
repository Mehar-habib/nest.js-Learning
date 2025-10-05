import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schema/book.schema';
import { Model } from 'mongoose';
import { Libary } from './schema/libary.schema';

@Injectable()
export class LibaryService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
    @InjectModel(Libary.name) private libaryModel: Model<Libary>,
  ) {}

  async createLibary(): Promise<Libary> {
    const book1 = await this.bookModel.create({
      title: 'Js',
      author: 'John Doe',
    });

    const book2 = await this.bookModel.create({
      title: 'Python',
      author: 'John Doe',
    });

    const libary = new this.libaryModel({
      name: 'Central Libary',
      books: [book1._id, book2._id],
    });

    return libary.save();
  }
  async getLibaries(): Promise<Libary[]> {
    return this.libaryModel.find().populate('books').exec();
  }
}
