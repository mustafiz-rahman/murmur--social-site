import { Expose,Transform } from "class-transformer";
import { User } from "src/models/user.entity";

export class MurmurDto{
    @Expose()
    id:number;
    @Expose()
    murmur:string;
    @Transform(({obj})=>obj.user.userId)
    @Expose()
    userUserId:number;
   

}