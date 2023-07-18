import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});
