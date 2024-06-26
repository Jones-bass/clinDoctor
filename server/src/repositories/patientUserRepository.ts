import { Prisma, PatientUser, UserToken } from '@prisma/client'

export interface PatientUserRepository {
  findByEmail(email: string): Promise<PatientUser | null>
  findAllPatientUser(): Promise<PatientUser[]>
  create(data: Prisma.PatientUserCreateInput): Promise<PatientUser>
  createToken(data: { patientUserId: string }): Promise<UserToken>
}
