import { DoctorSchedule } from '@prisma/client';
import { getHours, isBefore, startOfHour } from 'date-fns';
import { AppointmentHourError } from '../errors/appointment-hour-error';
import { PasteDateError } from '../errors/past-date-error';
import { InvalidAppointmentTimeError } from '../errors/appointment-hour-invalid-error';
import { DoctorScheduleRepository } from '../repositories/doctorScheduleRepository';

interface DoctorScheduleRequest {
  doctorId: number;
  date: Date;
}

interface DoctorScheduleResponse {
  doctorSchedule: DoctorSchedule;
}

export class RegisterDoctorScheduleUseCase {
  constructor(private scheduleRepository: DoctorScheduleRepository) {}

  async execute({ doctorId, date }: DoctorScheduleRequest): Promise<DoctorScheduleResponse> {
    const scheduleDate = startOfHour(date);

    // Check if the appointment date is in the past
    if (isBefore(scheduleDate, new Date())) {
      throw new PasteDateError();
    }

    // Check if the appointment time is within working hours (8 AM to 5 PM)
    if (getHours(scheduleDate) < 8 || getHours(scheduleDate) >= 17) {
      throw new AppointmentHourError();
    }

    const existingAppointment = await this.scheduleRepository.findByDoctorAndDate(doctorId, scheduleDate);
    if (existingAppointment) {
      throw new InvalidAppointmentTimeError();
    }

    const createdSchedule = await this.scheduleRepository.create({
      doctorId,
      date: new Date(scheduleDate).toISOString(),

    });

    return { doctorSchedule: createdSchedule };
  }
}
