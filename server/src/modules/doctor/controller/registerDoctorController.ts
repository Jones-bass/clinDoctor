import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeRegisterDoctorUseCase } from '../usecases/factories/make-register-doctor-case'

export async function RegisterDoctorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const DoctorSchema = z.object({
    name: z.string(),
    speciality: z.string(),
    price: z.number(),
    description: z.string(),
    experience: z.string(),
    city: z.string(),
    state: z.string(),
  })

  const { name, description, experience, price, speciality, city, state } =
    DoctorSchema.parse(request.body)

  try {
    const registerUseCase = makeRegisterDoctorUseCase()

    const { doctor } = await registerUseCase.execute({
      name,
      description,
      city,
      state,
      experience,
      price,
      speciality,
    })

    return reply.status(200).send({ doctor })
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' })
  }
}
