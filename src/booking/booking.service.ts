import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Booking } from '@prisma/client';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';


@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}
  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
     try{return await this.prisma.booking.create({
       data: { ...createBookingDto },
     });}
     catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
   }

  async findAll():Promise<Booking[]> {
    try{return this.prisma.booking.findMany();}
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }

  async findOne(id: number):Promise<Booking> {
   try{ return await this.prisma.booking.findUnique({where:{id:id}},)}
   catch(error){
    throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
   }
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
   try {return await this.prisma.booking.update({
      where: { id },
      data: {
        ...updateBookingDto,
      },
    });}
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }

  async remove(id: number) {
    try{return await this.prisma.booking.delete({
      where: {
        id: id,
      },
    }) }
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }
  
}

