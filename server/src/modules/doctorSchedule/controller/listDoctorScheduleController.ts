import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListDoctorScheduleUseCase } from '../usecases/factories/make-list-doctorschedule-case'

export async function ListDoctorScheduleController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const listDoctorScheduleUseCase = makeListDoctorScheduleUseCase()

  const { appointmentDoctors } = await listDoctorScheduleUseCase.execute()

  return reply.status(200).send({ appointmentDoctors })
}
