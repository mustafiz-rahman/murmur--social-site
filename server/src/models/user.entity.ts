import { Murmur } from "src/models/murmur.entity";
import{LikePost} from "src/models/likePost.entity"
import { Entity,Column,PrimaryGeneratedColumn,OneToMany, ManyToMany, ManyToOne, OneToOne } from "typeorm";



@Entity()
export class User{
    @PrimaryGeneratedColumn()
    userId:number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    password:string;
    
    @OneToMany(()=>Murmur,(murmur)=>murmur.user)
    murmurs:Murmur[]

    @OneToMany(()=>LikePost,(likePost)=>likePost.user)
    likePost:LikePost[]

    

    
}