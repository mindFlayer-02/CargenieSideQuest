export class CreateCargoDto {}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty ,IsInt} from 'class-validator';

export class CreateBookingDto  {

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    bookingId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    type: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    weight: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    volume: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    hazardous: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    quantity: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    unitPrice: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    cargoPrice: number;




  }


