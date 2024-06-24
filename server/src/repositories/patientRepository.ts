import { Prisma, Patient } from '@prisma/client'

export interface PatientRepository {
  findByPhone(phone: string): Promise<Patient | null>
  findAllPatient(): Promise<Patient[]>
  create(data: Prisma.PatientCreateInput): Promise<Patient>
}
