import { DoctorSchedule } from '@prisma/client'
import { getHours, isBefore, startOfHour } from 'date-fns'
import { PasteDateError } from '../errors/past-date-error'
import { DoctorScheduleRepository } from '../repositories/doctorScheduleRepository'
import { InvalidConnectionsScheduleTimeError } from '../errors/connectionsSchedule-hour-invalid-error'
import { ConnectionsScheduleHourError } from '../errors/connectionsSchedule-hour-error'

interface DoctorScheduleRequest {
  doctorId: string
  available: boolean
  date: Date
}

interface DoctorScheduleResponse {
  doctorSchedule: DoctorSchedule
}

export class RegisterDoctorScheduleUseCase {
  constructor(private scheduleRepository: DoctorScheduleRepository) {}

  async execute({
    doctorId,
    date,
    available,
  }: DoctorScheduleRequest): Promise<DoctorScheduleResponse> {
    const scheduleDate = startOfHour(date)

    // Check if the appointment date is in the past
    if (isBefore(scheduleDate, new Date())) {
      throw new PasteDateError()
    }

    // Check if the appointment time is within working hours (8 AM to 5 PM)
    if (getHours(scheduleDate) < 8 || getHours(scheduleDate) >= 17) {
      throw new ConnectionsScheduleHourError()
    }

    const existingAppointment =
      await this.scheduleRepository.findByDoctorAndDate(doctorId, scheduleDate)
    if (existingAppointment) {
      throw new InvalidConnectionsScheduleTimeError()
    }

    const createdSchedule = await this.scheduleRepository.create({
      doctorId,
      available,
      date: new Date(scheduleDate).toISOString(),
    })

    return { doctorSchedule: createdSchedule }
  }
}
