import { PrismaScheduleRepository } from "../../repositories/prisma/prismaScheduleRepository"
import { RegisterScheduleUseCase } from "../registerSchedule"


export function makeRegisterScheduleUseCase() {
  const scheduleRepository = new PrismaScheduleRepository()
  const registerDoctorUseCase = new RegisterScheduleUseCase(scheduleRepository)

  return registerDoctorUseCase
}
