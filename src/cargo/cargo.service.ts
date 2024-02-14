import { Injectable } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CargoInfo } from '@prisma/client';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';


@Injectable()
export class CargoService {
  constructor(private prisma: PrismaService) {}
  async create(createCargoDto: CreateCargoDto): Promise<CargoInfo> {
     try{return await this.prisma.cargoInfo.create({
       data: { ...createCargoDto },
     });}
     catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
   }


  async findAll():Promise<CargoInfo[]> {
    try{return this.prisma.cargoInfo.findMany();}
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }

  async findOne(id: number):Promise<CargoInfo> {
    try{return await this.prisma.cargoInfo.findUnique({where:{id:id}},)}
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }

  async update(id: number, updateCargoDto: UpdateCargoDto) {
    try{return await this.prisma.cargoInfo.update({
      where: { id },
      data: {
        ...updateCargoDto,
      },
    });}
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }

  async remove(id: number) {
    try{return await this.prisma.cargoInfo.delete({
      where: {
        id: id,
      },
    }) }
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }
}









