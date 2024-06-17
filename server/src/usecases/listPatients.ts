import { Patient } from '@prisma/client';
import { PatientRepository } from '../repositories/patientRepository';

interface ListDoctorsResponse {
  patients: Patient[];
}

export class ListPatientsUseCase {
  constructor(private patientsRepository: PatientRepository) {}

  async execute(): Promise<ListDoctorsResponse> {
    const patients = await this.patientsRepository.findAllPatient();
    return { patients };
  }
}
