import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Customer } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
     return await this.prisma.customer.create({
       data: { ...createCustomerDto },
     });
   }


  async findAll():Promise<Customer[]> {
    return this.prisma.customer.findMany();
  }

  async findOne(id: number):Promise<Customer> {
    return await this.prisma.customer.findUnique({where:{id:id}},)
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return await this.prisma.customer.update({
      where: { id },
      data: {
        ...updateCustomerDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.customer.delete({
      where: {
        id: id,
      },
    }) 
  }
}

