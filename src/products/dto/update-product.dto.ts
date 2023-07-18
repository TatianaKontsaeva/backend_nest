import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import * as Joi from 'joi';

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export const updateProductSchema = Joi.object({
  name: Joi.string().required(),
  img: Joi.string().required(),
  price: Joi.number().required(),
  type: Joi.string().required(),
  description: Joi.string().required(),
  quantity: Joi.number().required(),
});
