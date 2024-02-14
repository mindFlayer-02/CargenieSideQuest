import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Invoices } from '@prisma/client';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';


@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}
  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoices> {
     try{return await this.prisma.invoices.create({
       data: { ...createInvoiceDto },
     });}
     catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
   }


  async findAll():Promise<Invoices[]> {
    try{return this.prisma.invoices.findMany();}
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }

  async findOne(id: number):Promise<Invoices> {
    try{return await this.prisma.invoices.findUnique({where:{id:id}},)}
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }

  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    try{return await this.prisma.invoices.update({
      where: { id },
      data: {
        ...updateInvoiceDto,
      },
    });}
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }

  async remove(id: number) {
    try{return await this.prisma.invoices.delete({
      where: {
        id: id,
      },
    }) }
    catch(error){
      throw new HttpErrorByCode[400]({ error: 'Invalid Input' });
     }
  }
}

