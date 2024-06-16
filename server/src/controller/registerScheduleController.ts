import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeRegisterScheduleUseCase } from '../usecases/factories/make-register-schedule-case';
import { parseISO } from 'date-fns';
import { AppointmentHourError } from '../errors/appointment-hour-error';
import { PasteDateError } from '../errors/past-date-error';
import { InvalidAppointmentTimeError } from '../errors/appointment-hour-invalid-error';

export async function RegisterScheduleController(request: FastifyRequest, reply: FastifyReply) {
  const ScheduleSchema = z.object({
    doctorId: z.number(),
    date: z.string(),
  });

  const { doctorId, date } = ScheduleSchema.parse(request.body);
  const parsedDate = parseISO(date);

  try {
    const scheduleUseCase = makeRegisterScheduleUseCase();

    const { schedule } = await scheduleUseCase.execute({ 
      doctorId, 
      date: parsedDate 
    });

    return reply.status(200).send({ schedule });
  } catch (err) {
    if (err instanceof PasteDateError) {
      return reply.status(400).send({ message: err.message });
    } else if (err instanceof AppointmentHourError) {
      return reply.status(400).send({ message: err.message });
    } else if (err instanceof InvalidAppointmentTimeError) {
      return reply.status(400).send({ message: err.message });
    } else {
      return reply.status(500).send({ message: 'Internal Server Error' });
    }
  }
}
