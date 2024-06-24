import { PrismaDoctorScheduleRepository } from '../../repositories/prisma/prismaDoctorScheduleRepository'
import { ListDoctorScheduleUseCase } from '../listDoctorSchedule'

export function makeListDoctorScheduleUseCase() {
  const doctorScheduleRepository = new PrismaDoctorScheduleRepository()
  const listDoctorScheduleUseCase = new ListDoctorScheduleUseCase(
    doctorScheduleRepository,
  )

  return listDoctorScheduleUseCase
}
