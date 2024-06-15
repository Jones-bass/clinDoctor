import { Prisma, Patient } from '@prisma/client'

export interface PatientRepository {
  findByPhone(phone: string): Promise<Patient | null>
  create(data: Prisma.PatientCreateInput): Promise<Patient>
}
