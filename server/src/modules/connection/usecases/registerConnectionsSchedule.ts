import { ConnectionsSchedule } from '@prisma/client'
import { ConnectionsScheduleRepository } from '../../../repositories/connectionsSchedule-repository'
import { DoctorScheduleRepository } from '../../../repositories/doctorScheduleRepository'
import { AppointmentAlreadyExistsError } from '../../../errors/appointment-already-exists-error'

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
      await this.connectionsScheduleRepository.findByScheduleAndPatientUserId(
        scheduleId,
        patientId,
      )

    if (existingAppointment) {
      throw new AppointmentAlreadyExistsError()
    }

    const newConnectionsSchedule =
      await this.connectionsScheduleRepository.createConnectionsSchedule({
        patientUser: { connect: { id: patientId } },
        doctorSchedule: { connect: { id: scheduleId } },
      })

    await this.doctorScheduleRepository.updateAvailability(scheduleId, false)

    return { connectionsSchedule: newConnectionsSchedule }
  }
}
