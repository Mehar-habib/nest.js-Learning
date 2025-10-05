import { Module } from '@nestjs/common';
import { LibaryService } from './libary.service';
import { LibaryController } from './libary.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Libary, LibarySchema } from './schema/libary.schema';
import { Book, BookSchema } from './schema/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Libary.name, schema: LibarySchema },
      { name: Book.name, schema: BookSchema },
    ]),
  ],
  providers: [LibaryService],
  controllers: [LibaryController],
})
export class LibaryModule {}
