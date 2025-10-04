import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product2 } from './schema/Product2.schema';
import { Model } from 'mongoose';

@Injectable()
export class Product2Service {
  constructor(
    @InjectModel(Product2.name) private productModel: Model<Product2>,
  ) {}

  async createProduct(): Promise<Product2> {
    const product = new this.productModel({
      title: 'Gaming Laptop',
      tags: [{ name: 'tag1' }, { name: 'tag2' }, { name: 'tag3' }],
    });
    return product.save();
  }

  async getAllProducts(): Promise<Product2[]> {
    return this.productModel.find().exec();
  }
}
