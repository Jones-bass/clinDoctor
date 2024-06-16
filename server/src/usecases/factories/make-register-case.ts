import { PrismaPatientRepository } from "../../repositories/prisma/prismaPatientRepository"
import { RegisterPatientUseCase } from "../registerPatient"


export function makeRegisterUseCase() {
  const patientRepository = new PrismaPatientRepository()
  const registerUseCase = new RegisterPatientUseCase(patientRepository)

  return registerUseCase
}
