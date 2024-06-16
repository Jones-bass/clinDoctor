import { hash } from 'bcryptjs';
import { Patient } from '@prisma/client';
import { PatientAlreadyExistsError } from '../errors/patient-already-exists-error';
import { PatientRepository } from '../repositories/patientRepository';

interface RegisterUseCaseRequest {
  name: string;
  phone: string;
  password: string;
}

interface RegisterUseCaseResponse {
  user: Patient;
}

export class RegisterPatientUseCase {
  constructor(private patientRepository: PatientRepository) {}

  async execute({
    name,
    phone,
    password,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {

    const patientWithSamePhone = await this.patientRepository.findByPhone(phone);
    const password_hash = await hash(password, 6)


    if (patientWithSamePhone) {
      throw new PatientAlreadyExistsError();
    }

    const user = await this.patientRepository.create({
      name,
      phone,
      user: {
        create: { 
          password: password_hash,
          phone, 
        },
      },  
    });

    return { user };
  }
}
