import { Doctor } from '@prisma/client';
import { DoctorRepository } from '../repositories/doctorRepository';

interface RegisterUseCaseRequest {
  name: string;
  speciality: string;
  price: number;
  availability: string;
  experience: string;
}

interface RegisterUseCaseResponse {
  doctor: Doctor;
}

export class RegisterDoctorUseCase {
  constructor(private doctorRepository: DoctorRepository) {}

  async execute({
    name,
    availability,
    experience,
    price,
    speciality,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {

    const createdDoctor = await this.doctorRepository.create({
      name,
      availability,
      experience,
      price,
      speciality,
    });

    return { doctor: createdDoctor };
  }
}
