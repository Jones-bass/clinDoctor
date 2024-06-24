import { PrismaConnectionsScheduleRepository } from '../../repositories/prisma/prismaConnectionsScheduleRepository'
import { ListConnectionsScheduleUseCase } from '../listConnectionsSchedule'

export function makeListConnectionsScheduleUseCase() {
  const connectionsScheduleRepository =
    new PrismaConnectionsScheduleRepository()
  const listConnectionsScheduleUseCase = new ListConnectionsScheduleUseCase(
    connectionsScheduleRepository,
  )

  return listConnectionsScheduleUseCase
}
