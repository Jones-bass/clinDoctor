import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListDoctorDayAvailabilityUseCase } from '../usecases/factories/make-list-dayAvailability-case';
import { z } from 'zod';

interface RequestParams {
  doctorId: string
}

export async function ListDoctorDayAvailabilityController(
  request: FastifyRequest<{ Params: RequestParams }>,
  reply: FastifyReply,
) {
  const createCheckInParamsSchema = z.object({
    month: z.string(),
    day: z.string(),
    year: z.string(),
  })

  const { doctorId } = request.params

  const { month, year, day } = createCheckInParamsSchema.parse(request.query)

  
  const listDoctorDayAvailabilityUseCase = makeListDoctorDayAvailabilityUseCase()


  const availability = await listDoctorDayAvailabilityUseCase.execute({
    doctorId,
    month,
    day,
    year,
  });

  return reply.status(200).send({ availability });
}
