import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tag } from './tag.schema';

@Schema()
export class Product2 extends Document {
  @Prop()
  title: string;

  @Prop({ type: [Tag] })
  tags: Tag[];
}

export const Product2Schema = SchemaFactory.createForClass(Product2);
