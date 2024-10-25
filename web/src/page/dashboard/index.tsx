import { useEffect, useMemo, useState } from "react";
import { FiClock, FiPower } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Appointment, Container, Content, Header, HeaderContent, Profile, Schedule, Section } from "./styles";
import { format, isToday, parseISO } from "date-fns";
import { useAuth } from "../../hook/auth";
import { ptBR } from "date-fns/locale";

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

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, "cccc", {
      locale: ptBR,
    });
  }, [selectedDate]);

  const morningAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() < 12;
    });
  }, [appointments]);

  const afternoonAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() >= 12;
    });
  }, [appointments]);

  return (
    <Container>
      <Header>
        <HeaderContent>

          <Profile>
            <img src={user.avatar_url } alt={user.name} />
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
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            {isToday(selectedDate) && <span>Hoje</span>}
            <span>{selectedDateAsText}</span>
            <span>{selectedWeekDay}</span>
          </p>

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
        </Schedule>
      </Content>
    </Container>
  );
}
