import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeRegisterPatientUseCase } from '../usecases/factories/make-register-case'
import { PatientAlreadyExistsError } from '../../../errors/patient-already-exists-error'

export async function RegisterPatientController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    password: z.string(),
    avatar_url: z.string(),
  })

  const { name, phone, password, email, avatar_url } = registerBodySchema.parse(
    request.body,
  )

  try {
    const registerUseCase = makeRegisterPatientUseCase()

    const { userPatient } = await registerUseCase.execute({
      phone,
      name,
      password,
      email,
      avatar_url
    })

    return reply.status(200).send({ userPatient })
  } catch (err) {
    if (err instanceof PatientAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    return reply.status(500).send({ message: 'Internal Server Error' })
  }
}
