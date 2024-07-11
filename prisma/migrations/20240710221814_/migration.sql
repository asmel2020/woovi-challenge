/*
  Warnings:

  - You are about to alter the column `amount` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" REAL NOT NULL,
    "name" TEXT NOT NULL,
    "isPayment" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Payment" ("amount", "id", "isPayment", "name") SELECT "amount", "id", "isPayment", "name" FROM "Payment";
DROP TABLE "Payment";
ALTER TABLE "new_Payment" RENAME TO "Payment";
CREATE UNIQUE INDEX "Payment_id_key" ON "Payment"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
