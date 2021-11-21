import { Injectable, Options, Session } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';
import { Murmur } from '../models/murmur.entity';
import { CreateMurmurDto } from './dtos/create-murmur.dto';

@Injectable()
export class MurmursService {
  constructor(@InjectRepository(Murmur) private repo: Repository<Murmur>) {}

  

  async findUserMurmur(id: number) {
    const murmurs = await this.repo
      .createQueryBuilder('murmur')
      .having('userUserId = :id', { id })
      .getMany();
    return murmurs;
  }

  async findMurmur(id: number) {
    return this.repo.findOne(id);
  }

  async allMurmur() {
    return await this.repo.find();
  }
  
  
}
