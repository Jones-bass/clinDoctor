import { Prisma, Doctor } from '@prisma/client'

export interface DoctorRepository {
  create(data: Prisma.DoctorCreateInput): Promise<Doctor>
  findAllDoctors(): Promise<Doctor[]>
  findDoctorById(doctorId: string): Promise<Doctor | null> 
}
