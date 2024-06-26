import { PrismaPatientUserRepository } from '../../../../repositories/prisma/prismaPatientUserRepository'
import { RegisterPatientUseCase } from '../registerPatient'

export function makeRegisterPatientUseCase() {
  const patientRepository = new PrismaPatientUserRepository()
  const registerPatientUseCase = new RegisterPatientUseCase(patientRepository)

  return registerPatientUseCase
}
