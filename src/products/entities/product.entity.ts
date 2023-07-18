import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export class Product {
  @ApiProperty({
    minimum: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  img: string;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  quantity: number;
}
