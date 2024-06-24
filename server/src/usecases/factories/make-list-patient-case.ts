import { PrismaPatientRepository } from '../../repositories/prisma/prismaPatientRepository'
import { ListPatientsUseCase } from '../listPatients'

export function makeListPatientsUseCase() {
  const patientsRepository = new PrismaPatientRepository()
  const listPatientsUseCase = new ListPatientsUseCase(patientsRepository)

  return listPatientsUseCase
}
