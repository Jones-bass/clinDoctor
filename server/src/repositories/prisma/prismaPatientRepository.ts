import { Patient, Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { PatientRepository } from '../patientRepository';

export class PrismaPatientRepository implements PatientRepository {
  async create(data: Prisma.PatientCreateInput): Promise<Patient> {
    const createPatient = await prisma.patient.create({ data });
    return createPatient;
  }

  async findByPhone(phone: string): Promise<Patient | null> {
    const phoneId = await prisma.patient.findUnique({
      where: { phone },
    });

    return phoneId;
  }

  async findAllPatient(): Promise<Patient[]> {
    const patients = await prisma.patient.findMany();
    return patients;
  }
}
