import { PrismaPatientUserRepository } from '../../../../repositories/prisma/prismaPatientUserRepository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const patientUsersRepository = new PrismaPatientUserRepository()
  const authenticateUseCase = new AuthenticateUseCase(patientUsersRepository)

  return authenticateUseCase
}
