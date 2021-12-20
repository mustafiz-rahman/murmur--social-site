import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { MurmursModule } from './murmurs/murmurs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeService } from './like/like.service';




@Module({
  imports: [TypeOrmModule.forRoot(),UsersModule, MurmursModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
