import { PrismaAppointmentRepository } from "../../repositories/prisma/prismaAppoitmentRepository";
import { ListAppointmentsUseCase } from "../listAppointments";

export function makeListAppointmentUseCase() {
  const appointmentRepository = new PrismaAppointmentRepository();
  const listAppointmentUseCase = new ListAppointmentsUseCase(appointmentRepository);

  return listAppointmentUseCase;
}
