/*
  Warnings:

  - You are about to drop the column `userId` on the `Library` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[clerkUserId]` on the table `Library` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNo]` on the table `Library` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkUserId` to the `Library` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Library" DROP CONSTRAINT "Library_userId_fkey";

-- AlterTable
ALTER TABLE "Library" DROP COLUMN "userId",
ADD COLUMN     "clerkUserId" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateIndex
CREATE UNIQUE INDEX "Library_clerkUserId_key" ON "Library"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Library_phoneNo_key" ON "Library"("phoneNo");
