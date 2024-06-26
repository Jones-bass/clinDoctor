import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListConnectionsScheduleUseCase } from '../usecases/factories/make-list-connectionsSchedule-case'

export async function ListConnectionsScheduleController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const listConnectionsScheduleUseCase = makeListConnectionsScheduleUseCase()

  const { findConnectionsSchedule } =
    await listConnectionsScheduleUseCase.execute()

  return reply.status(200).send({ findConnectionsSchedule })
}
