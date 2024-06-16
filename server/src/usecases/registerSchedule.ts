import { Schedule } from '@prisma/client';
import { ScheduleRepository } from '../repositories/scheduleRepository';
import { getHours, getMinutes, isBefore, startOfHour } from 'date-fns';
import { AppointmentHourError } from '../errors/appointment-hour-error';
import { PasteDateError } from '../errors/past-date-error';
import { InvalidAppointmentTimeError } from '../errors/appointment-hour-invalid-error';

interface ScheduleAppointmentRequest {
  doctorId: number;
  date: Date;
}

interface ScheduleAppointmentResponse {
  schedule: Schedule;
}

export class RegisterScheduleUseCase {
  constructor(private scheduleRepository: ScheduleRepository) {}

  async execute({ doctorId, date }: ScheduleAppointmentRequest): Promise<ScheduleAppointmentResponse> {
    const appointmentDate = startOfHour(date);

    // Check if the appointment date is in the past
    if (isBefore(appointmentDate, new Date())) {
      throw new PasteDateError();
    }

    // Check if the appointment time is within working hours (8 AM to 5 PM)
    if (getHours(appointmentDate) < 8 || getHours(appointmentDate) >= 17) {
      throw new AppointmentHourError();
    }

    const existingAppointment = await this.scheduleRepository.findByDoctorAndDate(doctorId, appointmentDate);
    if (existingAppointment) {
      throw new InvalidAppointmentTimeError();
    }

    const createdSchedule = await this.scheduleRepository.create({
      doctorId,
      date: appointmentDate,
    });

    return { schedule: createdSchedule };
  }
}
