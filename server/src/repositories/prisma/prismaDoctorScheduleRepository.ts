import { Prisma, DoctorSchedule } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { DoctorScheduleAvailability, DoctorScheduleRepository, ScheduleWithDoctor } from '../doctorScheduleRepository'

export class PrismaDoctorScheduleRepository
  implements DoctorScheduleRepository
{
  async create(data: Prisma.DoctorScheduleUncheckedCreateInput) {
    const createdSchedule = await prisma.doctorSchedule.create({ data })
    return createdSchedule
  }

  async findByDoctorAndDate(
    doctorId: string,
    time: Date,
    patientUserId: string,
  ): Promise<DoctorSchedule | null> {
    return prisma.doctorSchedule.findFirst({
      where: {
        doctorId,
        time,
        patientUserId,
      },
    })
  }

  async findAllDoctorSchedule(): Promise<DoctorSchedule[]> {
    const findDoctorSchedule = await prisma.doctorSchedule.findMany()
    return findDoctorSchedule
  }

  async updateAvailability(scheduleId: string): Promise<DoctorSchedule> {
    const updatedSchedule = await prisma.doctorSchedule.update({
      where: { id: scheduleId },
      data: { },
    })
    return updatedSchedule
  }

  
  async findSchedulesByPatientUserId(patientUserId: string): Promise<ScheduleWithDoctor[]> {
    const schedulesPatientUserId = await prisma.doctorSchedule.findMany({
      where: { patientUserId },
      include: {
        doctor: true,
      },
    });
    return schedulesPatientUserId;
  }

  async findByPatientUserIdAndTime(patientUserId: string, time: Date): Promise<DoctorSchedule | null> {
    return await prisma.doctorSchedule.findFirst({
      where: {
        patientUserId,
        time,
      },
    });
  }

  async findAllInDayFromDoctor({ doctorId, day, month, year }: DoctorScheduleAvailability): Promise<DoctorSchedule[]>  {
    const findAllInMonthFromDoctor = await prisma.doctorSchedule.findMany({
      where: {
        doctorId,
        time: { 
          gte: new Date(Number(year), Number(month) - 1, Number(day), 0, 0, 0),
          lt: new Date(Number(year), Number(month) - 1, Number(day), 23, 59, 59),
        },
      },
    });
    
    return findAllInMonthFromDoctor
  }
}
