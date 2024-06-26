import { ConnectionsSchedule } from '@prisma/client'
import { ConnectionsScheduleRepository } from '../../../repositories/connectionsSchedule-repository'

interface ListConnectionsScheduleResponse {
  findConnectionsSchedule: ConnectionsSchedule[]
}

export class ListConnectionsScheduleUseCase {
  constructor(
    private connectionsScheduleRepository: ConnectionsScheduleRepository,
  ) {}

  async execute(): Promise<ListConnectionsScheduleResponse> {
    const findConnectionsSchedule =
      await this.connectionsScheduleRepository.findAllConnectionsSchedule()
    return { findConnectionsSchedule }
  }
}
