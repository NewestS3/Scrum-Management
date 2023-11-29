import { Entity,Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phoneNo: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;
}

