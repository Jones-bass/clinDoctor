import { PatientUser, Prisma } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { PatientUserRepository } from '../patientUserRepository'

export class PrismaPatientUserRepository implements PatientUserRepository {
  async create(data: Prisma.PatientUserCreateInput): Promise<PatientUser> {
    const createPatientUser = await prisma.patientUser.create({ data })
    return createPatientUser
  }

  async findByPhone(phone: string): Promise<PatientUser | null> {
    const phoneId = await prisma.patientUser.findUnique({
      where: { phone },
    })

    return phoneId
  }

  async findAllPatientUser(): Promise<PatientUser[]> {
    const patients = await prisma.patientUser.findMany()
    return patients
  }
}
