import { Appointment, Prisma } from '@prisma/client';

export interface AppointmentRepository {
  createAppointment(data: Prisma.AppointmentCreateInput): Promise<Appointment>;
  findByPatientId(patientId: number): Promise<Appointment | null>;
}
