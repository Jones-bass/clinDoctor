import { PrismaAppointmentRepository } from "../../repositories/prisma/prismaAppoitmentRepository"
import { RegisterAppointmentUseCase } from "../registerAppoitment"

export function makeRegisterAppoitmentUseCase() {
  const appotimentRepository = new PrismaAppointmentRepository()
  const registerAppointmentUseCase = new RegisterAppointmentUseCase(appotimentRepository)

  return registerAppointmentUseCase
}
