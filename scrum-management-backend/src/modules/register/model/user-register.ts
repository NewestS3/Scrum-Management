import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserRegister{
    @PrimaryGeneratedColumn({type:'int'})
        id:number;
    
    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    phone:string;

    @Column()
    password:string;

    @Column()
    type:string;
}