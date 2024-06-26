import { hash } from 'bcryptjs'
import { PatientUser } from '@prisma/client'
import { PatientAlreadyExistsError } from '../../../errors/patient-already-exists-error'
import { PatientUserRepository } from '../../../repositories/patientUserRepository'

interface UserToken {
  id: string
  token: string
  patientUserId: string
  created_at: Date
  updated_at: Date
}

interface RegisterUseCaseRequest {
  name: string
  phone: string
  password: string
  email: string
}

interface RegisterUseCaseResponse {
  userPatient: PatientUser & { UserToken: UserToken[] }
}

export class RegisterPatientUseCase {
  constructor(private patientUserRepository: PatientUserRepository) {}

  async execute({
    name,
    phone,
    password,
    email,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const patientWithSameEmail =
      await this.patientUserRepository.findByEmail(email)
    const password_hash = await hash(password, 6)

    if (patientWithSameEmail) {
      throw new PatientAlreadyExistsError()
    }

    const userPatient = await this.patientUserRepository.create({
      name,
      email,
      phone,
      password: password_hash,
    })

    const userToken = await this.patientUserRepository.createToken({
      patientUserId: userPatient.id,
    })

    return { userPatient: { ...userPatient, UserToken: [userToken] } }
  }
}
