import { PrismaDoctorRepository } from '../../../../repositories/prisma/prismaDoctorRepository'
import { RegisterDoctorUseCase } from '../registerDoctor'

export function makeRegisterDoctorUseCase() {
  const doctorRepository = new PrismaDoctorRepository()
  const registerDoctorUseCase = new RegisterDoctorUseCase(doctorRepository)

  return registerDoctorUseCase
}
