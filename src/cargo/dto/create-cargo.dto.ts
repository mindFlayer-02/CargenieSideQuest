import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty ,IsInt} from 'class-validator';

export class CreateCargoDto  {

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
    weigth: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    volume: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    hazardFragile: string;

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


