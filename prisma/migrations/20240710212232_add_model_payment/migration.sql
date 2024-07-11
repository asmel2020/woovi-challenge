-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "isPayment" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_id_key" ON "Payment"("id");
