import { Doctor } from "@prisma/client";
import { DoctorRepository } from "../../../repositories/doctorRepository";

interface ListDoctorsResponse {
  doctors: Doctor[];
}

export class ListDoctorsUseCase {
  constructor(private doctorRepository: DoctorRepository) {}

  async execute(doctorId?: string): Promise<ListDoctorsResponse> {
    if (doctorId) {
      const doctor = await this.doctorRepository.findDoctorById(doctorId);
      return { doctors: doctor ? [doctor] : [] }; // retorna array com um médico ou vazio
    } else {
      const doctors = await this.doctorRepository.findAllDoctors();
      return { doctors };
    }
  }
}
