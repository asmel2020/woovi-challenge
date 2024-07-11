/*
  Warnings:

  - You are about to drop the column `credicardInstallment` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `crediCardInstallment` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" REAL NOT NULL,
    "amountInstallment" REAL NOT NULL,
    "cashback" REAL NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "totalInstallment" INTEGER NOT NULL,
    "crediCardInstallment" INTEGER NOT NULL,
    "installmentPix" INTEGER NOT NULL,
    "isPaymentPix" BOOLEAN NOT NULL DEFAULT false,
    "isPaymentCredicard" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Payment" ("amount", "amountInstallment", "cashback", "id", "installmentPix", "isPaymentCredicard", "isPaymentPix", "name", "totalInstallment") SELECT "amount", "amountInstallment", "cashback", "id", "installmentPix", "isPaymentCredicard", "isPaymentPix", "name", "totalInstallment" FROM "Payment";
DROP TABLE "Payment";
ALTER TABLE "new_Payment" RENAME TO "Payment";
CREATE UNIQUE INDEX "Payment_id_key" ON "Payment"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
