import { Appointment } from '@prisma/client';
import { AppointmentRepository } from '../repositories/appoitment-repository';

interface ListDoctorsResponse {
  findAppointments: Appointment[];
}

export class ListAppointmentsUseCase {
  constructor(private appointmentsRepository: AppointmentRepository) {}

  async execute(): Promise<ListDoctorsResponse> {
    const findAppointments = await this.appointmentsRepository.findAllAppointments();
    return { findAppointments };
  }
}
