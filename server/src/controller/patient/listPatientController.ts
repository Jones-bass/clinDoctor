import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListPatientsUseCase } from '../../usecases/factories/make-list-patient-case'

export async function ListPatientController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const listPatientsUseCase = makeListPatientsUseCase()

  const { patientUsers } = await listPatientsUseCase.execute()

  return reply.status(200).send({ patientUsers })
}
