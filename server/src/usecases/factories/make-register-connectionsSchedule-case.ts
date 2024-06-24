import { PrismaConnectionsScheduleRepository } from '../../repositories/prisma/prismaConnectionsScheduleRepository'
import { RegisterConnectionsScheduleUseCase } from '../registerConnectionsSchedule'

export function makeRegisterConnectionsScheduleUseCase() {
  const connectionsScheduleRepository =
    new PrismaConnectionsScheduleRepository()
  const registerAppointmentUseCase = new RegisterConnectionsScheduleUseCase(
    connectionsScheduleRepository,
  )

  return registerAppointmentUseCase
}
