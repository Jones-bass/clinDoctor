import { ConnectionsSchedule, Prisma } from '@prisma/client'

export interface ConnectionsScheduleRepository {
  createConnectionsSchedule(
    data: Prisma.ConnectionsScheduleCreateInput,
  ): Promise<ConnectionsSchedule>
  findByScheduleAndPatientId(
    scheduleId: string,
    patientId: string,
  ): Promise<ConnectionsSchedule | null>
  findAllConnectionsSchedule(): Promise<ConnectionsSchedule[]>
}
