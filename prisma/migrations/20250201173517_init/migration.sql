/*
  Warnings:

  - You are about to drop the `nama` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "nama";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
