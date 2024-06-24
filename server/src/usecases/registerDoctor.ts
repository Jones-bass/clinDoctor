import { Doctor } from '@prisma/client'
import { DoctorRepository } from '../repositories/doctorRepository'

interface RegisterUseCaseRequest {
  name: string
  speciality: string
  price: number
  description: string
  experience: string
  city: string
  state: string
}

interface RegisterUseCaseResponse {
  doctor: Doctor
}

export class RegisterDoctorUseCase {
  constructor(private doctorRepository: DoctorRepository) {}

  async execute({
    name,
    description,
    experience,
    price,
    speciality,
    city,
    state,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const createdDoctor = await this.doctorRepository.create({
      name,
      description,
      experience,
      price,
      speciality,
      city,
      state,
    })

    return { doctor: createdDoctor }
  }
}
