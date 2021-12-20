import { Murmur } from "src/models/murmur.entity";
import { User } from "./user.entity";
import { Entity,PrimaryGeneratedColumn,  ManyToOne, Column, OneToOne, ManyToMany, OneToMany } from "typeorm";



@Entity()
export class LikePost{
    @PrimaryGeneratedColumn()
    Id:number;

    
    @ManyToOne(type => Murmur)
    murmur: Murmur
    
    @ManyToOne(type => User)
    user: User
    
}