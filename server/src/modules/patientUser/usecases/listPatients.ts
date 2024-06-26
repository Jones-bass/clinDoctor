import { PatientUser } from '@prisma/client'
import { PatientUserRepository } from '../../../repositories/patientUserRepository'

interface ListDoctorsResponse {
  patientUsers: PatientUser[]
}

export class ListPatientUsersUseCase {
  constructor(private patientUsersRepository: PatientUserRepository) {}

  async execute(): Promise<ListDoctorsResponse> {
    const patientUsers = await this.patientUsersRepository.findAllPatientUser()
    return { patientUsers }
  }
}
