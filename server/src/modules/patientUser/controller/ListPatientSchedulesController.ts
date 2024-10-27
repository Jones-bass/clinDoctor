import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { PrismaDoctorScheduleRepository } from '../../../repositories/prisma/prismaDoctorScheduleRepository';
import { ListPatientSchedulesUseCase } from '../usecases/listPatientsSchedules';

export async function ListPatientSchedulesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const PatientScheduleSchema = z.object({
    patientUserId: z.string(),
  });

  // Validação dos dados da requisição
  const { patientUserId } = PatientScheduleSchema.parse(request.params);

  try {
    // Instanciando o repositório e o use case
    const doctorScheduleRepository = new PrismaDoctorScheduleRepository();
    const listPatientSchedulesUseCase = new ListPatientSchedulesUseCase(doctorScheduleRepository);

    // Executando o use case para obter os agendamentos
    const schedules = await listPatientSchedulesUseCase.execute({ patientUserId });

    return reply.status(200).send({ schedules });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}
