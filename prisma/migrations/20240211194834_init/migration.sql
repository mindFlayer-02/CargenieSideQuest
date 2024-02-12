-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "bookingDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pickupDate" TIMESTAMP(3) NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "bookingStatus" BOOLEAN NOT NULL DEFAULT true,
    "containerType" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoices" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "InvoiceDate" TEXT NOT NULL,
    "DueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Amount" INTEGER NOT NULL,
    "Tax" INTEGER NOT NULL,
    "Discount" INTEGER NOT NULL,
    "AmountDue" INTEGER NOT NULL,
    "PaymentStatus" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CargoInfo" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "weigth" INTEGER NOT NULL,
    "volume" INTEGER NOT NULL,
    "hazardFragile" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" INTEGER NOT NULL,
    "cargoPrice" INTEGER NOT NULL,

    CONSTRAINT "CargoInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VesselInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "grossTonnage" INTEGER NOT NULL,
    "deadTonnage" INTEGER NOT NULL,

    CONSTRAINT "VesselInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CargoInfoToVesselInfo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CargoInfoToVesselInfo_AB_unique" ON "_CargoInfoToVesselInfo"("A", "B");

-- CreateIndex
CREATE INDEX "_CargoInfoToVesselInfo_B_index" ON "_CargoInfoToVesselInfo"("B");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoInfo" ADD CONSTRAINT "CargoInfo_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoInfoToVesselInfo" ADD CONSTRAINT "_CargoInfoToVesselInfo_A_fkey" FOREIGN KEY ("A") REFERENCES "CargoInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoInfoToVesselInfo" ADD CONSTRAINT "_CargoInfoToVesselInfo_B_fkey" FOREIGN KEY ("B") REFERENCES "VesselInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
