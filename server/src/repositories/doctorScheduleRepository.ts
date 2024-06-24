import { Prisma, DoctorSchedule } from '@prisma/client'

export interface DoctorScheduleRepository {
  create(
    data: Prisma.DoctorScheduleUncheckedCreateInput,
  ): Promise<DoctorSchedule>
  findByDoctorAndDate(
    doctorId: string,
    date: Date,
  ): Promise<DoctorSchedule | null>
  findAllDoctorSchedule(): Promise<DoctorSchedule[]>
  updateAvailability(
    scheduleId: string,
    available: boolean,
  ): Promise<DoctorSchedule>
}
