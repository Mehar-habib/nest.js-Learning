import { Module } from '@nestjs/common';
import { Product2Service } from './product2.service';
import { Product2Controller } from './product2.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product2, Product2Schema } from './schema/Product2.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product2.name, schema: Product2Schema },
    ]),
  ],
  providers: [Product2Service],
  controllers: [Product2Controller],
})
export class Product2Module {}
