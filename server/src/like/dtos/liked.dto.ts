import { Expose,Transform } from "class-transformer";

export class LikedDto{
    @Expose()
    id:number;
    @Expose()
    murmurMurmurId:number;
    @Expose()
    userUserId:number;
}