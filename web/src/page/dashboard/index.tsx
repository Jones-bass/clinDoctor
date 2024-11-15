import { useCallback, useEffect, useMemo, useState } from 'react'
import { FiClock } from 'react-icons/fi'

import {
  Appointment,
  Calender,
  Container,
  Content,
  NextAppointment,
  Schedule,
  Section,
} from './styles'
import { format, isAfter, isToday, parseISO } from 'date-fns'
import { useAuth } from '../../hook/auth'
import { ptBR } from 'date-fns/locale'

import 'react-day-picker/dist/style.css'
import { RiCalendarScheduleLine } from 'react-icons/ri'
import { MdOutlineDateRange } from 'react-icons/md'
import { api } from '../../services/api'

export interface Appointments {
  id: string
  time: string
  date: string
  hourFormatted: string
  doctorId: string
  dateFormatted: string
  user: {
    name: string
    avatar_url: string
  }
  doctor: {
    name: string
    speciality: string
    avatar_url: string
  }
}

export function Dashboard() {
  const { user } = useAuth()

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [appointments, setAppointments] = useState<Appointments[]>([])

  const handleDateChange = useCallback((day: Date | undefined) => {
    if (day) {
      setSelectedDate(day)
    }
  }, [])

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await api.get(`/patients/${user.id}/schedules`)
        const data = await response.data

        console.log('Dados da API:', data)

        if (data && Array.isArray(data.schedules)) {
          const formattedAppointments = data.schedules.map(
            (appointment: Appointments) => ({
              id: appointment.id,
              date: appointment.time,
              dateFormatted: format(
                parseISO(appointment.time),
                "dd 'de' MMMM",
                { locale: ptBR },
              ),
              hourFormatted: format(parseISO(appointment.time), 'HH:mm'),
              doctorId: appointment.doctorId,
              user: {
                name: user.name,
                avatar_url: user.avatar_url,
              },
              doctor: {
                name: appointment.doctor.name,
                speciality: appointment.doctor.speciality,
                avatar_url: appointment.doctor.avatar_url,
              },
            }),
          )

          setAppointments(formattedAppointments)
        } else {
          console.warn('Estrutura de dados inesperada:', data)
        }
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error)
      }
    }

    fetchAppointments()
  }, [selectedDate, user.id, user.name, user.avatar_url])

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    })
  }, [selectedDate])

  const selectedDateAppointments = useMemo(() => {
    return appointments.filter(
      (appointment) =>
        format(parseISO(appointment.date), 'yyyy-MM-dd') ===
        format(selectedDate, 'yyyy-MM-dd'),
    )
  }, [appointments, selectedDate])

  const morningAppointments = useMemo(() => {
    return selectedDateAppointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() < 12
    })
  }, [selectedDateAppointments])

  const afternoonAppointments = useMemo(() => {
    return selectedDateAppointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() >= 12
    })
  }, [selectedDateAppointments])

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', {
      locale: ptBR,
    })
  }, [selectedDate])

  const nextAppointment = useMemo(() => {
    return appointments.find((appointment) =>
      isAfter(parseISO(appointment.date), new Date()),
    )
  }, [appointments])

  return (
    <Container>
      <Content>
        <div className="schedule-and-calendar">
          <Schedule>
            <h1>Horários agendados</h1>
            <p>
              {isToday(selectedDate) && <span>Hoje</span>}
              <span>{selectedDateAsText}</span>
              <span>{selectedWeekDay}</span>
            </p>

            {isToday(selectedDate) && nextAppointment && (
              <NextAppointment>
                <strong>
                  Sua próximo agendamento é no dia{' '}
                  {nextAppointment.dateFormatted}{' '}
                </strong>
                <div>
                  <img
                    src={nextAppointment.doctor.avatar_url}
                    alt={nextAppointment.doctor.name}
                  />
                  <div className="appointment-details">
                    <div className="appointment-time-and-date">
                      <span>
                        <FiClock /> {nextAppointment.hourFormatted}
                      </span>
                      <span>
                        <MdOutlineDateRange /> {nextAppointment.dateFormatted}
                      </span>
                    </div>
                    <strong>{nextAppointment.doctor.name}</strong>
                    <span>{nextAppointment.doctor.speciality}</span>
                  </div>
                </div>
              </NextAppointment>
            )}

            {morningAppointments.length === 0 &&
            afternoonAppointments.length === 0 &&
            (!nextAppointment || !isToday(parseISO(nextAppointment.date))) ? (
              <div className="no-appointments">
                <RiCalendarScheduleLine className="icon" />
                <span>Nenhum agendamento para hoje</span>
              </div>
            ) : (
              <>
                {morningAppointments.length > 0 && (
                  <Section>
                    <strong>Manhã</strong>
                    {morningAppointments.map((appointment) => (
                      <Appointment key={appointment.id}>
                        <div>
                          <img
                            src={appointment.doctor.avatar_url}
                            alt={appointment.doctor.name}
                          />
                          <div className="user-info">
                            <span>
                              <FiClock />
                              {appointment.hourFormatted}
                            </span>
                            <strong>{appointment.doctor.name}</strong>
                            <span>{appointment.doctor.speciality}</span>
                          </div>
                        </div>
                      </Appointment>
                    ))}
                  </Section>
                )}

                {afternoonAppointments.length > 0 && (
                  <Section>
                    <strong>Tarde</strong>
                    {afternoonAppointments.map((appointment) => (
                      <Appointment key={appointment.id}>
                        <div>
                          <img
                            src={appointment.doctor.avatar_url}
                            alt={appointment.user.name}
                          />
                          <div className="user-info">
                            <span>
                              <FiClock />
                              {appointment.hourFormatted}
                            </span>
                            <strong>{appointment.doctor.name}</strong>
                            <span>{appointment.doctor.speciality}</span>
                          </div>
                        </div>
                      </Appointment>
                    ))}
                  </Section>
                )}
              </>
            )}
          </Schedule>

          <Calender
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            locale={ptBR}
            modifiersClassNames={{
              available: 'available-day',
            }}
            disabled={[{ dayOfWeek: [0, 6] }]}
            startMonth={new Date()}
          />
        </div>
      </Content>
    </Container>
  )
}
