import { Doctor } from '@prisma/client'
import { DoctorRepository } from '../repositories/doctorRepository'

interface ListDoctorsResponse {
  doctors: Doctor[]
}

export class ListDoctorsUseCase {
  constructor(private doctorRepository: DoctorRepository) {}

  async execute(): Promise<ListDoctorsResponse> {
    const doctors = await this.doctorRepository.findAllDoctors()
    return { doctors }
  }
}
