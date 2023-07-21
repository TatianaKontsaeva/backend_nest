import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty({
    description: 'Название',
  })
  name: string;

  @ApiProperty({
    description: 'Изображение',
  })
  img: string;

  @ApiProperty({
    description: 'Цена',
  })
  price: number;

  @ApiProperty({
    description: 'Тип товара',
  })
  type: string;

  @ApiProperty({
    description: 'Описание',
  })
  description: string;

  @ApiProperty({
    description: 'Количество',
    minimum: 1,
  })
  quantity: number;
}
