import { ConnectionsSchedule, Prisma } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { ConnectionsScheduleRepository } from '../connectionsSchedule-repository'

export class PrismaConnectionsScheduleRepository
  implements ConnectionsScheduleRepository
{
  async createConnectionsSchedule(
    data: Prisma.ConnectionsScheduleCreateInput,
  ): Promise<ConnectionsSchedule> {
    const createdConnectionsSchedule = await prisma.connectionsSchedule.create({
      data,
    })
    return createdConnectionsSchedule
  }

  async findByScheduleAndPatientUserId(
    scheduleId: string,
    patientUserId: string,
  ): Promise<ConnectionsSchedule | null> {
    const appointment = await prisma.connectionsSchedule.findFirst({
      where: {
        doctorScheduleId: scheduleId,
        patientUserId,
      },
    })
    return appointment
  }

  async findAllConnectionsSchedule(): Promise<ConnectionsSchedule[]> {
    const findAppointment = await prisma.connectionsSchedule.findMany()
    return findAppointment
  }
}
