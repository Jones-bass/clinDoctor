import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListDoctorsUseCase } from '../../usecases/factories/make-list-doctor-case'

export async function ListDoctorsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const listDoctorsUseCase = makeListDoctorsUseCase()

  const { doctors } = await listDoctorsUseCase.execute()

  return reply.status(200).send({ doctors })
}
