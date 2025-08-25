/*
  Warnings:

  - Made the column `courseId` on table `Thread` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Thread" DROP CONSTRAINT "Thread_courseId_fkey";

-- AlterTable
ALTER TABLE "public"."Thread" ALTER COLUMN "courseId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Thread" ADD CONSTRAINT "Thread_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
