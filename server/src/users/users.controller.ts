import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Session,
  UseGuards

} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UserDto } from './dtos/user.dto';
import { Serialize } from 'src/interceptors/serialize.Interceptors';
import { AuthService } from './auth.service';
import { SigninDto } from './dtos/signin.dto';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from '../models/user.entity';
import { AuthGurd } from 'src/gurds/auth.gurd';


@Controller('auth')
@Serialize(UserDto)

export class UsersController {
  constructor(private userService: UsersService,private authService:AuthService) {}

  
  // @Get('/me')
  // userIdentifier(@Session() session:any){
  //   return this.userService.findOne(session.userId);
  // }

  @Get('/me')
  @UseGuards(AuthGurd)
  userIdentifier(@CurrentUser() user:User): User{
    
    return user;
  }

  @Post('/signout')
  signOut(@Session() session:any){
    session.userId=null;
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session:any):Promise<User> {
    const user= await this.authService.signup(body.name, body.email, body.password);
    session.userId=user.userId;
    return user;
  }

  @Post('/signin')
  async signIn(@Body() body:SigninDto, @Session() session:any):Promise<User>{
    const user= await this.authService.signin(body.email,body.password);
    session.userId= user.userId;
    return user;
  }
  
  @Get('/:id')
  findUser(@Param('id') id: string):Promise<User> {
    return this.userService.findOne(parseInt(id));
  }

  @Get()
  findAllUser(@Query('email') email: string):Promise<User[]> {
    return this.userService.find(email);
  }

}
