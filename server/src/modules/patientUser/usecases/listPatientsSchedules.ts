import { DoctorScheduleRepository } from "../../../repositories/doctorScheduleRepository";

interface ListPatientSchedulesRequest {
  patientUserId: string;
}

export class ListPatientSchedulesUseCase {
  constructor(private doctorScheduleRepository: DoctorScheduleRepository) {}

  async execute({ patientUserId }: ListPatientSchedulesRequest) {
    // Busca os agendamentos do paciente chamando o método do repositório
    const schedules = await this.doctorScheduleRepository.findSchedulesByPatientUserId(patientUserId);

    return schedules;
  }
}
