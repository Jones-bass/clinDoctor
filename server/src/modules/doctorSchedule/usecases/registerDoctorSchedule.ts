import { DoctorSchedule } from '@prisma/client';
import { getHours, isBefore, startOfHour } from 'date-fns';
import { DoctorScheduleRepository } from '../../../repositories/doctorScheduleRepository';
import { PasteDateError } from '../../../errors/past-date-error';
import { ScheduleHourError } from '../../../errors/schedule-hour-error';
import { InvalidScheduleTimeError } from '../../../errors/schedule-hour-invalid-error';

interface DoctorScheduleRequest {
  doctorId: string;
  patientUserId: string;
  time: Date;
}

interface DoctorScheduleResponse {
  doctorSchedule: DoctorSchedule;
}

export class RegisterDoctorScheduleUseCase {
  constructor(private scheduleRepository: DoctorScheduleRepository) {}

  async execute({
    doctorId,
    patientUserId,
    time,
  }: DoctorScheduleRequest): Promise<DoctorScheduleResponse> {
    const scheduleDate = startOfHour(time);

    // Verificar se a data está no passado
    if (isBefore(scheduleDate, new Date())) {
      throw new PasteDateError();
    }

    // Verificar se o horário é entre 8h e 17h
    if (getHours(scheduleDate) < 8 || getHours(scheduleDate) >= 17) {
      throw new ScheduleHourError();
    }
    
     // Verificar se já existe um agendamento para o mesmo horário e data para o mesmo paciente
     const existingSchedule = await this.scheduleRepository.findByPatientUserIdAndTime(
      patientUserId,
      scheduleDate
    );

    if (existingSchedule) {
      throw new InvalidScheduleTimeError();
    }

    // Criação do agendamento com `patientUserId` incluído
    const createdSchedule = await this.scheduleRepository.create({
      doctorId,
      patientUserId,
      time: scheduleDate.toISOString(),
    });

    return { doctorSchedule: createdSchedule };
  }
}
