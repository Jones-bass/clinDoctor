import { PrismaUsersRepository } from "../../repositories/prisma/prismaUsersRepository"
import { RegisterPatientUseCase } from "../registerPatient"


export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterPatientUseCase(usersRepository)

  return registerUseCase
}
