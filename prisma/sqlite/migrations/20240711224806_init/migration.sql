-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" REAL NOT NULL,
    "amountInstallment" REAL NOT NULL,
    "payInstallment" REAL NOT NULL,
    "cashback" REAL NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "totalInstallment" INTEGER NOT NULL,
    "creditCardInstallment" INTEGER NOT NULL,
    "installmentPix" INTEGER NOT NULL,
    "isPaymentPix" BOOLEAN NOT NULL DEFAULT false,
    "isPaymentCredicard" BOOLEAN NOT NULL DEFAULT false,
    "statusPayment" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CreditCardPayment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "last4DigitsCreditCard" TEXT NOT NULL,
    "installment" INTEGER NOT NULL,
    "amountInstallment" REAL NOT NULL,
    "paymentId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CreditCardPayment_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_id_key" ON "Payment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CreditCardPayment_id_key" ON "CreditCardPayment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CreditCardPayment_paymentId_key" ON "CreditCardPayment"("paymentId");
