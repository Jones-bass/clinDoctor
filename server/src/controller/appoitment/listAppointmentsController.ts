import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListAppointmentUseCase } from '../../usecases/factories/make-list-appointment-case';

export async function ListAppointmentsController(request: FastifyRequest, reply: FastifyReply) {
  const listAppointmentUseCase = makeListAppointmentUseCase();

  const { findAppointments } = await listAppointmentUseCase.execute();

  return reply.status(200).send({ findAppointments });
}
