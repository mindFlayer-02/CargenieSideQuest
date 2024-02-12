import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateCustomerDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstName: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    postalCode: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    status: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    type: string;
    

  }

