import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Booking } from '@prisma/client';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}
  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
     return await this.prisma.booking.create({
       data: { ...createBookingDto },
     });
   }


  async findAll():Promise<Booking[]> {
    return this.prisma.booking.findMany();
  }

  async findOne(id: number):Promise<Booking> {
    return await this.prisma.booking.findUnique({where:{id:id}},)
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    return await this.prisma.booking.update({
      where: { id },
      data: {
        ...updateBookingDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.booking.delete({
      where: {
        id: id,
      },
    }) 
  }
}

