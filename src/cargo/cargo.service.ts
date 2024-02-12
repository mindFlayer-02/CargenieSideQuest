import { Injectable } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CargoInfo } from '@prisma/client';

@Injectable()
export class CargoService {
  constructor(private prisma: PrismaService) {}
  async create(createCargoDto: CreateCargoDto): Promise<CargoInfo> {
     return await this.prisma.cargoInfo.create({
       data: { ...createCargoDto },
     });
   }


  async findAll():Promise<CargoInfo[]> {
    return this.prisma.cargoInfo.findMany();
  }

  async findOne(id: number):Promise<CargoInfo> {
    return await this.prisma.cargoInfo.findUnique({where:{id:id}},)
  }

  async update(id: number, updateCargoDto: UpdateCargoDto) {
    return await this.prisma.cargoInfo.update({
      where: { id },
      data: {
        ...updateCargoDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.cargoInfo.delete({
      where: {
        id: id,
      },
    }) 
  }
}









