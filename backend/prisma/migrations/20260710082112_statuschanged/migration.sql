/*
  Warnings:

  - The values [PENDING] on the enum `Payment` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Payment_new" AS ENUM ('COMPLETED');
ALTER TABLE "public"."StudentPayment" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "StudentPayment" ALTER COLUMN "status" TYPE "Payment_new" USING ("status"::text::"Payment_new");
ALTER TYPE "Payment" RENAME TO "Payment_old";
ALTER TYPE "Payment_new" RENAME TO "Payment";
DROP TYPE "public"."Payment_old";
ALTER TABLE "StudentPayment" ALTER COLUMN "status" SET DEFAULT 'COMPLETED';
COMMIT;

-- AlterTable
ALTER TABLE "StudentPayment" ALTER COLUMN "status" SET DEFAULT 'COMPLETED';
