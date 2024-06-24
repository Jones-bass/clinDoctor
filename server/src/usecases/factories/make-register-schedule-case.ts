import { PrismaDoctorScheduleRepository } from '../../repositories/prisma/prismaDoctorScheduleRepository'
import { RegisterDoctorScheduleUseCase } from '../registerDoctorSchedule'

export function makeRegisterDoctorScheduleUseCase() {
  const doctorScheduleRepository = new PrismaDoctorScheduleRepository()
  const registerDoctorScheduleUseCase = new RegisterDoctorScheduleUseCase(
    doctorScheduleRepository,
  )

  return registerDoctorScheduleUseCase
}
