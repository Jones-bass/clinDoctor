import { hash } from 'bcryptjs'
import { PatientUser } from '@prisma/client'
import { PatientAlreadyExistsError } from '../errors/patient-already-exists-error'
import { PatientUserRepository } from '../repositories/patientUserRepository'

interface RegisterUseCaseRequest {
  name: string
  phone: string
  password: string
  email: string
}

interface RegisterUseCaseResponse {
  userPatient: PatientUser
}

export class RegisterPatientUseCase {
  constructor(private patientUserRepository: PatientUserRepository) {}

  async execute({
    name,
    phone,
    password,
    email,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const patientWithSamePhone =
      await this.patientUserRepository.findByPhone(phone)
    const password_hash = await hash(password, 6)

    if (patientWithSamePhone) {
      throw new PatientAlreadyExistsError()
    }

    const userPatient = await this.patientUserRepository.create({
      name,
      email,
      phone,
      password: password_hash,
    })

    return { userPatient }
  }
}
