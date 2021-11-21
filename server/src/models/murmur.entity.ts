import { Optional } from "@nestjs/common";
import { User } from "src/models/user.entity";
import { LikePost } from "./likePost.entity";
import { Entity,Column,PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn,CreateDateColumn} from "typeorm";


@Entity()
export class Murmur{

    @PrimaryGeneratedColumn()
    murmurId:number;
    @Column()
    murmur:string;
    // @CreateDateColumn()
    // created_at: Date;
    @ManyToOne(type=>User)
    user:User;

    @OneToMany(()=>LikePost,(likePost)=>likePost.murmur)
    likePost:LikePost[];

    
}