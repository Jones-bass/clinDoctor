import { useCallback, useEffect, useMemo, useState } from "react";
import { FiClock, FiPower } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Appointment, Calender, Container, Content, Header, HeaderContent, NextAppointment, Profile, Schedule, Section } from "./styles";
import { format, isAfter, isToday, parseISO } from "date-fns";
import { useAuth } from "../../hook/auth";
import { ptBR } from "date-fns/locale";

import "react-day-picker/dist/style.css";
import { GrSchedule, GrSchedulePlay } from "react-icons/gr";
import { RiCalendarScheduleLine } from "react-icons/ri";

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface Appointments {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

export function Dashboard() {
  const { user, signOut } = useAuth();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthAvailability, setMonthAvailability] = useState<MonthAvailabilityItem[]>([]);
  const [appointments, setAppointments] = useState<Appointments[]>([]);

  const handleDateChange = useCallback((day: Date | undefined) => {
    if (day) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  // Mocking month availability data
  useEffect(() => {
    const mockMonthAvailability = [
      { day: 5, available: false },
      { day: 10, available: true },
      { day: 15, available: false },
      { day: 20, available: true },
    ];
    setMonthAvailability(mockMonthAvailability);
  }, [currentMonth]);

  // Mocking appointments data
  useEffect(() => {
    const mockAppointments = [
      {
        id: "1",
        date: new Date(new Date().setHours(8)).toISOString(),
        hourFormatted: format(new Date(), "HH:mm"),
        user: {
          name: "John Doe",
          avatar_url: "https://via.placeholder.com/150",
        },
      },
      {
        id: "2",
        date: new Date(new Date().setHours(11)).toISOString(),
        hourFormatted: format(new Date(new Date().setHours(14)), "HH:mm"),
        user: {
          name: "Jane Smith",
          avatar_url: "https://github.com/Jones-bass.png",
        },
      },
      {
        id: "3",
        date: new Date(new Date().setHours(15)).toISOString(),
        hourFormatted: format(new Date(new Date().setHours(14)), "HH:mm"),
        user: {
          name: "Jane Smith",
          avatar_url: "https://github.com/Jones-bass.png",
        },
      },
      {
        id: "4",
        date: new Date(new Date().setHours(14)).toISOString(),
        hourFormatted: format(new Date(new Date().setHours(11)), "HH:mm"),
        user: {
          name: "Jane Smith",
          avatar_url: "https://github.com/Jones-bass.png",
        },
      },
    ];

    const appointmentsFormatted = mockAppointments.map((appointment) => ({
      ...appointment,
      hourFormatted: format(parseISO(appointment.date), "HH:mm"),
    }));

    setAppointments(appointmentsFormatted);
  }, [selectedDate]);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter((monthDay) => monthDay.available === false)
      .map((monthDay) => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    });
  }, [selectedDate]);

  const selectedDateAppointments = useMemo(() => {
    return appointments.filter((appointment) =>
      format(parseISO(appointment.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
    );
  }, [appointments, selectedDate]);

  const morningAppointments = useMemo(() => {
    return selectedDateAppointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() < 12;
    });
  }, [selectedDateAppointments]);

  const afternoonAppointments = useMemo(() => {
    return selectedDateAppointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() >= 12;
    });
  }, [selectedDateAppointments]);


  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, "cccc", {
      locale: ptBR,
    });
  }, [selectedDate]);

  const nextAppointment = useMemo(() => {
    return appointments.find((appointment) =>
      isAfter(parseISO(appointment.date), new Date())
    );
  }, [appointments]);

  return (
    <Container>

      <Header>
        <HeaderContent>

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>


          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

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
                <strong>Agendamento a seguir</strong>
                <div>
                  <img src={nextAppointment.user.avatar_url} alt={nextAppointment.user.name} />

                  <div className="appointment-details">
                    <span>
                      <FiClock />
                      {nextAppointment.hourFormatted}
                    </span>
                    <strong>{nextAppointment.user.name}</strong>
                  </div>
                </div>
              </NextAppointment>
            )}

            {morningAppointments.length === 0 && afternoonAppointments.length === 0 ? (
                <div className="no-appointments">
                <RiCalendarScheduleLine className="icon" />
                <span>Nenhum agendamento nesta data</span>
              </div>
            ) : (
              <>
                {morningAppointments.length > 0 && (
                  <Section>
                    <strong>Manhã</strong>

                    {morningAppointments.length === 0 && (
                      <p>Nenhum agendamento no horário da manhã</p>
                    )}

                    {morningAppointments.map((appointment) => (
                      <Appointment key={appointment.id}>
                        <div>
                          <img src={appointment.user.avatar_url} alt={appointment.user.name} />
                          <div className="user-info">
                            <span>
                              <FiClock />
                              {appointment.hourFormatted}
                            </span>
                            <strong>{appointment.user.name}</strong>
                          </div>
                        </div>
                      </Appointment>
                    ))}
                  </Section>
                )}

                {afternoonAppointments.length > 0 && (

                  <Section>
                    <strong>Tarde</strong>

                    {afternoonAppointments.length === 0 && (
                      <p>Nenhum agendamento no horário da tarde</p>
                    )}

                    {afternoonAppointments.map((appointment) => (
                      <Appointment key={appointment.id}>
                        <div>
                          <img src={appointment.user.avatar_url} alt={appointment.user.name} />
                          <div className="user-info">
                            <span>
                              <FiClock />
                              {appointment.hourFormatted}
                            </span>
                            <strong>{appointment.user.name}</strong>
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
            onMonthChange={handleMonthChange}
            locale={ptBR}
            modifiersClassNames={{
              available: 'available-day',
            }}
            disabled={[
              { dayOfWeek: [0, 6] },
              ...disabledDays,
            ]}
            startMonth={new Date()}
          />
        </div>
      </Content>
    </Container>
  );
}
