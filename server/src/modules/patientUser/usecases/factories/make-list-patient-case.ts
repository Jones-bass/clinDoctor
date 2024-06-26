import { PrismaPatientUserRepository } from '../../../../repositories/prisma/prismaPatientUserRepository'
import { ListPatientUsersUseCase } from '../listPatients'

export function makeListPatientsUseCase() {
  const patientsRepository = new PrismaPatientUserRepository()
  const listPatientsUseCase = new ListPatientUsersUseCase(patientsRepository)

  return listPatientsUseCase
}
