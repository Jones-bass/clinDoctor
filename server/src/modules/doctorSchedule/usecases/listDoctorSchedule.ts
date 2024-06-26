import { DoctorSchedule } from '@prisma/client'
import { DoctorScheduleRepository } from '../../../repositories/doctorScheduleRepository'

interface ListDoctorScheduleResponse {
  doctorSchedule: DoctorSchedule[]
}

export class ListDoctorScheduleUseCase {
  constructor(private doctorScheduleRepository: DoctorScheduleRepository) {}

  async execute(): Promise<ListDoctorScheduleResponse> {
    const doctorSchedule =
      await this.doctorScheduleRepository.findAllDoctorSchedule()
    return { doctorSchedule }
  }
}
