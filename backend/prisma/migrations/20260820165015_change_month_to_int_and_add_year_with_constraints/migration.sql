/*
  Warnings:

  - You are about to drop the column `createdAt` on the `StudentPayment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentId,month,year]` on the table `StudentPayment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `year` to the `StudentPayment` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `month` on the `StudentPayment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Library" ALTER COLUMN "email" DROP DEFAULT;

-- AlterTable
ALTER TABLE "StudentPayment" DROP COLUMN "createdAt",
ADD COLUMN     "year" INTEGER NOT NULL,
DROP COLUMN "month",
ADD COLUMN     "month" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "StudentPayment_libraryId_month_year_idx" ON "StudentPayment"("libraryId", "month", "year");

-- CreateIndex
CREATE INDEX "StudentPayment_studentId_paymentDate_idx" ON "StudentPayment"("studentId", "paymentDate");

-- CreateIndex
CREATE UNIQUE INDEX "StudentPayment_studentId_month_year_key" ON "StudentPayment"("studentId", "month", "year");
