import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Customer } from '@prisma/client';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';


@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
     try{return await this.prisma.customer.create({
       data: { ...createCustomerDto },
     });}
     catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
   }


  async findAll():Promise<Customer[]> {
    try{return this.prisma.customer.findMany();}
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }

  async findOne(id: number):Promise<Customer> {
    try{return await this.prisma.customer.findUnique({where:{id:id}},)}
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    try{return await this.prisma.customer.update({
      where: { id },
      data: {
        ...updateCustomerDto,
      },
    });}
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }

  async remove(id: number) {
    try{return await this.prisma.customer.delete({
      where: {
        id: id,
      },
    }) }
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }
}

