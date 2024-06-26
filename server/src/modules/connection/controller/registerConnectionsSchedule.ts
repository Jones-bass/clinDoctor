import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeRegisterConnectionsScheduleUseCase } from '../usecases/factories/make-register-connectionsSchedule-case'
import { AppointmentAlreadyExistsError } from '../../../errors/appointment-already-exists-error'
import { NoAppointmentFoundError } from '../../../errors/noAppointment-found-error'

export async function RegisterConnectionsScheduleController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createConnectionsScheduleParamsSchema = z.object({
    scheduleId: z.string(),
    patientId: z.string(),
  })

  const { scheduleId, patientId } = createConnectionsScheduleParamsSchema.parse(
    request.body,
  )

  const connectionsScheduleUseCase = makeRegisterConnectionsScheduleUseCase()

  try {
    const connectionsSchedule = await connectionsScheduleUseCase.execute({
      scheduleId,
      patientId,
    })

    return reply.status(200).send({
      connectionsSchedule,
    })
  } catch (err) {
    if (err instanceof AppointmentAlreadyExistsError) {
      return reply.status(400).send({ message: err.message })
    } else if (err instanceof NoAppointmentFoundError) {
      return reply.status(400).send({ message: err.message })
    } else {
      return reply.status(500).send({ error: 'Internal Server Error' })
    }
  }
}
