import { PrismaDoctorScheduleRepository } from '../../../../repositories/prisma/prismaDoctorScheduleRepository'
import { ListDoctorDayAvailabilityUseCase } from '../listDoctorScheduleAvailabilityUseCase'

export function makeListDoctorDayAvailabilityUseCase() {
  const doctorScheduleRepository = new PrismaDoctorScheduleRepository()
  const listDoctorDayAvailabilityUseCase = new ListDoctorDayAvailabilityUseCase(
    doctorScheduleRepository,
  )

  return listDoctorDayAvailabilityUseCase
}
