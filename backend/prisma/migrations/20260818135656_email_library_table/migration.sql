/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Library` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Library" ADD COLUMN     "email" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Library_email_key" ON "Library"("email");
