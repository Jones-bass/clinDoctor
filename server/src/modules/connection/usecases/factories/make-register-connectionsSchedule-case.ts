import { PrismaConnectionsScheduleRepository } from '../../../../repositories/prisma/prismaConnectionsScheduleRepository'
import { PrismaDoctorScheduleRepository } from '../../../../repositories/prisma/prismaDoctorScheduleRepository'
import { RegisterConnectionsScheduleUseCase } from '../registerConnectionsSchedule'

export function makeRegisterConnectionsScheduleUseCase() {
  const connectionsScheduleRepository =
    new PrismaConnectionsScheduleRepository()
  const doctorScheduleRepository = new PrismaDoctorScheduleRepository()

  return new RegisterConnectionsScheduleUseCase(
    connectionsScheduleRepository,
    doctorScheduleRepository,
  )
}
