import { Prisma, PatientUser } from '@prisma/client'

export interface PatientUserRepository {
  findByPhone(phone: string): Promise<PatientUser | null>
  findAllPatientUser(): Promise<PatientUser[]>
  create(data: Prisma.PatientUserCreateInput): Promise<PatientUser>
}
