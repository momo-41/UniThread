/*
  Warnings:

  - Added the required column `updatedAt` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Made the column `department` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Course" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "department" SET NOT NULL;
