import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
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

  @OneToMany(() => User, (user) => user.products)
  users: User[];
}
