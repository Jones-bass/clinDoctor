import { PatientUser } from '@prisma/client'
import { compare } from 'bcryptjs'
import { PatientUserRepository } from '../../../repositories/patientUserRepository'
import { InvalidCredentialsError } from '../../../errors/invalid-credentials-error'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  patientUser: PatientUser
}

export class AuthenticateUseCase {
  constructor(private patientUsersRepository: PatientUserRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const patientUser = await this.patientUsersRepository.findByEmail(email)

    if (!patientUser) {
      throw new InvalidCredentialsError()
    }

    const doestPasswordMatches = await compare(password, patientUser.password)

    if (!doestPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      patientUser,
    }
  }
}
