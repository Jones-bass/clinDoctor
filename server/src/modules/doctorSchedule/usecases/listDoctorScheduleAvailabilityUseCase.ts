import { getHours, isAfter } from 'date-fns'
import { DoctorScheduleRepository } from '../../../repositories/doctorScheduleRepository'

interface IRequest {
  doctorId: string
  day: string
  month: string
  year: string
}

type IResponse = Array<{
  hour: number
  available: boolean
}>

export class ListDoctorDayAvailabilityUseCase {
  constructor(
    private doctorScheduleRepository: DoctorScheduleRepository
  ) {}

  public async execute({
    doctorId,
    day,
    month,
    year,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.doctorScheduleRepository.findAllInDayFromDoctor(
      {
        doctorId,
        day,
        month,
        year,
      },
    )

    const hourStart = 8
    const eachHourArray = Array.from(
      { length: 10 },
      (_, index) => index + hourStart
    )

    const numberOfDaysInMonth = new Date()

    const availability = eachHourArray.map((hour) => {
      const hasAppointmentInHour = appointments.find(
        (appointment) => getHours(appointment.time) === hour
      )

      const compareDate = new Date(Number(year), Number(month) - 1, Number(day), hour)

      return {
        hour,
        available: !hasAppointmentInHour && isAfter(compareDate, numberOfDaysInMonth),
      }
    })

    return availability
  }
}
