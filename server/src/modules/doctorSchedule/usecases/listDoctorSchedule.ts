import { DoctorSchedule } from '@prisma/client'
import { DoctorScheduleRepository } from '../../../repositories/doctorScheduleRepository'

interface ListDoctorScheduleResponse {
  appointmentDoctors: DoctorSchedule[]
}

export class ListDoctorScheduleUseCase {
  constructor(private doctorScheduleRepository: DoctorScheduleRepository) {}

  async execute(): Promise<ListDoctorScheduleResponse> {
    const appointmentDoctors =
      await this.doctorScheduleRepository.findAllDoctorSchedule()
    return { appointmentDoctors }
  }
}
