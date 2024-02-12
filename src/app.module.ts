import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CustomerModule } from './customer/customer.module';
import { BookingModule } from './booking/booking.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CargoModule } from './cargo/cargo.module';
import { VesselModule } from './vessel/vessel.module';

@Module({
  imports: [PrismaModule, CustomerModule, BookingModule, InvoiceModule, CargoModule, VesselModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
