import { Doctor, Prisma } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { DoctorRepository } from '../doctorRepository'

export class PrismaDoctorRepository implements DoctorRepository {
  async create(data: Prisma.DoctorCreateInput): Promise<Doctor> {
    const createdDoctor = await prisma.doctor.create({ data })
    return createdDoctor
  }

  async findAllDoctors(): Promise<Doctor[]> {
    const doctors = await prisma.doctor.findMany()
    return doctors
  }

  async findDoctorById(doctorId: string): Promise<Doctor | null> {
    const findDoctorById = prisma.doctor.findUnique({
      where: { id: doctorId },
    });
    return findDoctorById
  }
}
