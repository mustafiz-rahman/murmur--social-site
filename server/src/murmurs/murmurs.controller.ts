import { Body, Controller, Get, Param, Post,UseGuards ,Req, Delete} from '@nestjs/common';
import { MurmursService } from './murmurs.service';
import { CreateMurmurDto} from './dtos/create-murmur.dto';
import { AuthGurd } from 'src/gurds/auth.gurd';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/models/user.entity';
import { MurmurDto } from './dtos/murmur.dto';
import { Serialize } from 'src/interceptors/serialize.Interceptors';
import { LikeService } from 'src/like/like.service';
import { Murmur } from 'src/models/murmur.entity';
import { LikedDto } from 'src/like/dtos/liked.dto';


@Controller('murmur')

export class MurmursController {
    constructor(private murmurService:MurmursService,private likeService:LikeService){}

    @Post()
    @UseGuards(AuthGurd)
    @Serialize(MurmurDto)
    CreateMurmur(@Body() body:CreateMurmurDto, @CurrentUser() user:User){
       return  this.murmurService.postMurmur(body,user);
    }
    @UseGuards(AuthGurd)
    @Get('/me')
    getUserMurmur(@CurrentUser() user:User): Promise<Murmur[]>{
        return this.murmurService.findUserMurmur(user.userId);
    }
    @UseGuards(AuthGurd)
    @Get()
    getAllMurmur(): Promise<Murmur[]>{
        return this.murmurService.allMurmur();
    }
    @UseGuards(AuthGurd)
    @Get('/:id')
    getMurmurById(@Param('id') id:string): Promise<Murmur>{
        return this.murmurService.findMurmur(parseInt(id));

    }
    @UseGuards(AuthGurd)
    @Delete('/:id')
    deleteMurmur(@Param('id') id:string,@CurrentUser() user:User): Promise<Murmur>{
     return this.murmurService.deleteMurmur(parseInt(id),user.userId);

    }
    @UseGuards(AuthGurd)
    @Serialize(LikedDto)
    @Post('/:id/like')
    likePost(@Param('id') murmur:Murmur ,@CurrentUser() user:User){

        return this.likeService.postLike(murmur,user);

    }



    

    
    

}
