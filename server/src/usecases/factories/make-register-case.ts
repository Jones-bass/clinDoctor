import { PrismaPatientRepository } from '../../repositories/prisma/prismaPatientRepository'
import { RegisterPatientUseCase } from '../registerPatient'

export function makeRegisterPatientUseCase() {
  const patientRepository = new PrismaPatientRepository()
  const registerPatientUseCase = new RegisterPatientUseCase(patientRepository)

  return registerPatientUseCase
}
