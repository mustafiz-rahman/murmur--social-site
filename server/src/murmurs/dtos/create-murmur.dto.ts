import { IsString,IsNumber } from "class-validator";
export class CreateMurmurDto{
    @IsString()
    murmur:string;
    

}