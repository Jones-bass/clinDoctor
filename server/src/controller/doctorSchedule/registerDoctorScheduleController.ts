import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { parseISO } from 'date-fns'
import { makeRegisterDoctorScheduleUseCase } from '../../usecases/factories/make-register-schedule-case'
import { PasteDateError } from '../../errors/past-date-error'
import { ConnectionsScheduleHourError } from '../../errors/connectionsSchedule-hour-error'
import { InvalidConnectionsScheduleTimeError } from '../../errors/connectionsSchedule-hour-invalid-error'

export async function RegisterDoctorScheduleController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const ScheduleSchema = z.object({
    doctorId: z.string(),
    date: z.string(),
  })

  const { doctorId, date } = ScheduleSchema.parse(request.body)
  const parsedDate = parseISO(date)

  try {
    const scheduleUseCase = makeRegisterDoctorScheduleUseCase()

    const { doctorSchedule } = await scheduleUseCase.execute({
      doctorId,
      date: parsedDate,
    })

    return reply.status(200).send({ doctorSchedule })
  } catch (err) {
    if (err instanceof PasteDateError) {
      return reply.status(400).send({ message: err.message })
    } else if (err instanceof ConnectionsScheduleHourError) {
      return reply.status(400).send({ message: err.message })
    } else if (err instanceof InvalidConnectionsScheduleTimeError) {
      return reply.status(400).send({ message: err.message })
    } else {
      return reply.status(500).send({ message: 'Internal Server Error' })
    }
  }
}
