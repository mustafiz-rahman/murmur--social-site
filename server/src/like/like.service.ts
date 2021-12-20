import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LikePost } from 'src/models/likePost.entity';
import { Murmur } from 'src/models/murmur.entity';
import { LikeDto } from './dtos/like.dto';
import { Repository } from 'typeorm';
import { User } from 'src/models/user.entity';
import { MurmursService } from 'src/murmurs/murmurs.service';

@Injectable()
export class LikeService {
    constructor(@InjectRepository(LikePost) private repo:Repository<LikePost>,private murmurService:MurmursService){}

    async postLike(murmur:Murmur,user:User){
        
        const likepost = this.repo.create();
        likepost.murmur=murmur;
        likepost.user= user;
        return this.repo.save(likepost);
    }
}
