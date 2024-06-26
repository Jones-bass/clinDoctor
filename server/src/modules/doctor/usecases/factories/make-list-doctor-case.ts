import { PrismaDoctorRepository } from '../../../../repositories/prisma/prismaDoctorRepository'
import { ListDoctorsUseCase } from '../listDoctors'

export function makeListDoctorsUseCase() {
  const doctorRepository = new PrismaDoctorRepository()
  const listDoctorsUseCase = new ListDoctorsUseCase(doctorRepository)

  return listDoctorsUseCase
}
