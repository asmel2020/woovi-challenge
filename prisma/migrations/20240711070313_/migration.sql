-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "amountInstallment" DOUBLE PRECISION NOT NULL,
    "payInstallment" DOUBLE PRECISION NOT NULL,
    "cashback" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "totalInstallment" INTEGER NOT NULL,
    "creditCardInstallment" INTEGER NOT NULL,
    "installmentPix" INTEGER NOT NULL,
    "isPaymentPix" BOOLEAN NOT NULL DEFAULT false,
    "isPaymentCredicard" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_id_key" ON "Payment"("id");
