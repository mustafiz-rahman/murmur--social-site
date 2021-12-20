import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  createUser(name: string, email: string, password: string) {
    const user = this.repo.create({ name, email, password });
    return this.repo.save(user);
  }

  async find(email: string) {
    return await this.repo.find({ email });
  }

  async findOne(id: number) {
    if(!id){
      return null;
    }
    const user = await this.repo.findOne(id);
    if (!user) {
      throw new NotFoundException('User Not found');
    }
    return user;
  }
  
 
}
