import { Prisma, Doctor } from '@prisma/client'

export interface DoctorRepository {
  create(data: Prisma.DoctorCreateInput): Promise<Doctor>
}
