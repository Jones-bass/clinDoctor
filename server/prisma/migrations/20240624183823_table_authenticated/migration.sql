/*
  Warnings:

  - You are about to drop the `ConnectionsSchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Doctor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DoctorSchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Patient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ConnectionsSchedule";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Doctor";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DoctorSchedule";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Patient";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "patient_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "doctor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "doctor_schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "available" BOOLEAN NOT NULL,
    "doctorId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "doctor_schedule_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "connections_schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientUserId" TEXT NOT NULL,
    "doctorScheduleId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "connections_schedule_patientUserId_fkey" FOREIGN KEY ("patientUserId") REFERENCES "patient_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "connections_schedule_doctorScheduleId_fkey" FOREIGN KEY ("doctorScheduleId") REFERENCES "doctor_schedule" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_tokens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "patientUserId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_tokens_patientUserId_fkey" FOREIGN KEY ("patientUserId") REFERENCES "patient_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "patient_user_phone_key" ON "patient_user"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_name_key" ON "doctor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_schedule_available_key" ON "doctor_schedule"("available");

-- CreateIndex
CREATE UNIQUE INDEX "connections_schedule_patientUserId_key" ON "connections_schedule"("patientUserId");

-- CreateIndex
CREATE UNIQUE INDEX "connections_schedule_doctorScheduleId_key" ON "connections_schedule"("doctorScheduleId");
