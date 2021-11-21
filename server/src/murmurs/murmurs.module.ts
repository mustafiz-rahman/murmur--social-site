import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MurmursController } from './murmurs.controller';
import { MurmursService } from './murmurs.service';
import { Murmur } from '../models/murmur.entity';
import { LikeService } from 'src/like/like.service';
import { LikePost } from 'src/models/likePost.entity';




@Module({
  imports:[TypeOrmModule.forFeature([Murmur,LikePost])],
  controllers: [MurmursController],
  providers: [LikeService,MurmursService]
})
export class MurmursModule {}
