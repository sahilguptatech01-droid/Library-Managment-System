/*
  Warnings:

  - Made the column `shifts` on table `Shift` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_shiftId_fkey";

-- AlterTable
ALTER TABLE "Shift" ALTER COLUMN "shifts" SET NOT NULL;

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "shiftId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("id") ON DELETE SET NULL ON UPDATE CASCADE;
