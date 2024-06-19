import { Appointment } from '@prisma/client';
import { AppointmentHourError } from '../errors/appointment-hour-error';
import { AppointmentRepository } from '../repositories/appoitment-repository';
import { AppointmentAlreadyExistsError } from '../errors/email-already-exists-error';

interface RegisterAppointmentUseCaseResponse {
  appointment: Appointment;
}

interface RegisterAppointmentUseCaseRequest {
  scheduleId: number;
  patientId: number;
  date: Date;
}

export class RegisterAppointmentUseCase {
  constructor(private appointmentRepository: AppointmentRepository) {}

  async execute({ scheduleId, patientId, date}: RegisterAppointmentUseCaseRequest): Promise<RegisterAppointmentUseCaseResponse> {
    const existingAppointment = await this.appointmentRepository.findByPatientId(patientId);

    if (existingAppointment) {
      throw new AppointmentAlreadyExistsError();
    }

    const newAppointment = await this.appointmentRepository.createAppointment({
      patient: { connect: { id: patientId } },
      schedule: { connect: { id: scheduleId } },
      date: new Date().toISOString() // or any specific date logic
    });
    
    if (!newAppointment) {
      throw new AppointmentHourError();
    }

    return { appointment: newAppointment };
  }
}
