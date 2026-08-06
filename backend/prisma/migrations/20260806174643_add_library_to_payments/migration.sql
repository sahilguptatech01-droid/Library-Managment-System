/*
  Warnings:

  - Added the required column `libraryId` to the `StudentPayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StudentPayment" ADD COLUMN     "libraryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "StudentPayment" ADD CONSTRAINT "StudentPayment_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
