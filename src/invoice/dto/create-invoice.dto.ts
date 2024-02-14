import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateInvoiceDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bookingId: number;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    InvoiceDate: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    Amount: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    Tax: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    Discount: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    AmountDue: number;

}