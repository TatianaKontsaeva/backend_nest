import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
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
  surname: string;

  @ApiProperty()
  @Column({
    unique: true,
  })
  email: string;

  @ApiProperty()
  @Column()
  password: string;
}
