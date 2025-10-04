import { Controller, Get, Post } from '@nestjs/common';
import { Product2Service } from './product2.service';

@Controller('product2')
export class Product2Controller {
  constructor(private readonly product2Service: Product2Service) {}

  @Post()
  create() {
    return this.product2Service.createProduct();
  }

  @Get()
  getAll() {
    return this.product2Service.getAllProducts();
  }
}
