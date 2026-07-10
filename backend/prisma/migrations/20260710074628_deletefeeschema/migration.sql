/*
  Warnings:

  - You are about to drop the column `feeId` on the `StudentPayment` table. All the data in the column will be lost.
  - You are about to drop the `Fee` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount` to the `StudentPayment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StudentPayment" DROP CONSTRAINT "StudentPayment_feeId_fkey";

-- DropForeignKey
ALTER TABLE "StudentPayment" DROP CONSTRAINT "StudentPayment_studentId_fkey";

-- AlterTable
ALTER TABLE "StudentPayment" DROP COLUMN "feeId",
ADD COLUMN     "amount" DECIMAL(10,2) NOT NULL;

-- DropTable
DROP TABLE "Fee";

-- AddForeignKey
ALTER TABLE "StudentPayment" ADD CONSTRAINT "StudentPayment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
