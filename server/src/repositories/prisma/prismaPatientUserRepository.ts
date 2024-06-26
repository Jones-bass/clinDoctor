import { PatientUser, Prisma, UserToken } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { PatientUserRepository } from '../patientUserRepository'

export class PrismaPatientUserRepository implements PatientUserRepository {
  async create(data: Prisma.PatientUserCreateInput): Promise<PatientUser> {
    const createPatientUser = await prisma.patientUser.create({ data })
    return createPatientUser
  }

  async findByEmail(email: string): Promise<PatientUser | null> {
    const emailId = await prisma.patientUser.findUnique({
      where: { email },
    })

    return emailId
  }

  async findAllPatientUser(): Promise<PatientUser[]> {
    const patients = await prisma.patientUser.findMany()
    return patients
  }

  async createToken(data: { patientUserId: string }): Promise<UserToken> {
    const patientToken = await prisma.userToken.create({
      data: {
        patientUserId: data.patientUserId,
      },
    })
    return patientToken
  }
}
