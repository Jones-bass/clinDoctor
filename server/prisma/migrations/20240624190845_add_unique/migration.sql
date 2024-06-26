/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `patient_user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "patient_user_phone_key";

-- CreateIndex
CREATE UNIQUE INDEX "patient_user_email_key" ON "patient_user"("email");
