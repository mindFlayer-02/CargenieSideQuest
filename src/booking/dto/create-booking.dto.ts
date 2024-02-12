import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty ,IsNumber,IsDateString} from 'class-validator';

export class CreateBookingDto  {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    customerId: number;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    pickupDate: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    deliveryDate: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    containerType: string;


  }


