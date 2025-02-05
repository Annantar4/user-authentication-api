/*
  Warnings:

  - You are about to drop the column `usernama` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "usernama",
ADD COLUMN     "username" TEXT;
