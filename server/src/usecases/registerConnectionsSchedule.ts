import { ConnectionsSchedule } from '@prisma/client'
import { ConnectionsScheduleRepository } from '../repositories/connectionsSchedule-repository'
import { AppointmentAlreadyExistsError } from '../errors/appointment-already-exists-error'

import { DoctorScheduleRepository } from '../repositories/doctorScheduleRepository'

interface RegisterConnectionsScheduleUseCaseResponse {
  connectionsSchedule: ConnectionsSchedule
}

interface RegisterConnectionsScheduleUseCaseRequest {
  scheduleId: string
  patientId: string
}

export class RegisterConnectionsScheduleUseCase {
  constructor(
    private connectionsScheduleRepository: ConnectionsScheduleRepository,
    private doctorScheduleRepository: DoctorScheduleRepository,
  ) {}

  async execute({
    scheduleId,
    patientId,
  }: RegisterConnectionsScheduleUseCaseRequest): Promise<RegisterConnectionsScheduleUseCaseResponse> {
    const existingAppointment =
      await this.connectionsScheduleRepository.findByScheduleAndPatientId(
        scheduleId,
        patientId,
      )

    if (existingAppointment) {
      throw new AppointmentAlreadyExistsError()
    }

    const newConnectionsSchedule =
      await this.connectionsScheduleRepository.createConnectionsSchedule({
        patient: { connect: { id: patientId } },
        doctorSchedule: { connect: { id: scheduleId } },
      })

    await this.doctorScheduleRepository.updateAvailability(scheduleId, false)

    return { connectionsSchedule: newConnectionsSchedule }
  }
}
