import { useCallback, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Loading } from '../../components/loading'
import { ConfirmAppointment } from '../../components/confirmAppointment'
import { useParams, useNavigate } from 'react-router-dom'
import {
  AvailabilityList,
  CalenderWrapper,
  Content,
  DoctorAvatar,
  DoctorBio,
  DoctorCard,
  DoctorDetails,
  DoctorInfoBox,
  DoctorStats,
} from './styles'
import { Button } from '../../components/button'
import { toast } from 'react-toastify'
import { ptBR } from 'date-fns/locale'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { Calender } from '../dashboard/styles'

import { TbClockHour7 } from 'react-icons/tb'

export interface PropsDoctor {
  id: string
  name: string
  speciality: string
  price: number
  city: string
  state: string
  avatar_url: string
  description: string
  experience: string
  createdAt: string
  gender: 'Feminino' | 'Masculino'
}

interface Availability {
  hour: number
  available: boolean
}

export function AvailibityDoctors() {
  const { doctorId } = useParams<{ doctorId: string }>()
  const [doctors, setDoctors] = useState<PropsDoctor[]>([])
  const [availability, setAvailability] = useState<Availability[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedDoctor, setSelectedDoctor] = useState<PropsDoctor | null>(null)
  const [loading, setLoading] = useState(true)
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false)
  const navigate = useNavigate()
  const userId = localStorage.getItem('userId')

  const handleDateChange = useCallback((day: Date | undefined) => {
    if (day) {
      setSelectedDate(day)
    }
  }, [])

  useEffect(() => {
    async function fetchDoctor() {
      try {
        const response = await api.get<{ doctor: { doctors: PropsDoctor[] } }>(
          `/list-doctor/${doctorId}`,
        )
        setDoctors(response.data.doctor.doctors)
      } catch (error) {
        toast.error('Erro ao carregar os dados do médico:')
        console.error('Erro ao carregar os dados do médico:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctor()
  }, [doctorId])

  useEffect(() => {
    if (doctorId) {
      api
        .get(`/doctor/${doctorId}/day-availability`, {
          params: {
            year: selectedDate.getFullYear(),
            month: selectedDate.getMonth() + 1,
            day: selectedDate.getDate(),
          },
        })
        .then((response) => {
          setAvailability(response.data.availability)
        })
    }
  }, [doctorId, selectedDate])

  function handleSchedule(doctor: PropsDoctor) {
    setSelectedDoctor(doctor)
    setConfirmModalOpen(true)
  }

  function closeConfirmModal() {
    setConfirmModalOpen(false)
    setSelectedDoctor(null)
  }

  function confirmAppointment() {
    if (selectedDoctor && userId) {
      navigate('/dashboard')
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Content>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id}>
          <DoctorAvatar>
            <img src={doctor.avatar_url} alt={doctor.name} />
          </DoctorAvatar>
          <DoctorInfoBox>
            <DoctorDetails>
              <h3 className="name">{doctor.name}</h3>
              <p className="username">{doctor.speciality}</p>
              <p className="join-date">Experience: {doctor.experience}</p>
            </DoctorDetails>
            <DoctorBio>{doctor.description}</DoctorBio>
            <DoctorStats>
              <div>
                <span>Preço</span>
                <h2>R${doctor.price}</h2>
              </div>
              <div>
                <span>Cidade</span>
                <h2>{doctor.city}</h2>
              </div>
              <div>
                <span>Estado</span>
                <h2>{doctor.state}</h2>
              </div>
            </DoctorStats>
          </DoctorInfoBox>

          <Button
            size="large"
            type="button"
            title="Agendar sua consulta"
            onClick={() => handleSchedule(doctor)}
          >
            {loading ? <Loading /> : 'Agendar sua consulta'}
          </Button>
        </DoctorCard>
      ))}
      <CalenderWrapper>
        <Calender
          mode="single"
          selected={selectedDate}
          onSelect={handleDateChange}
          locale={ptBR}
          modifiersClassNames={{
            available: 'available-day', // Class para marcar os dias disponíveis
          }}
          disabled={[
            { dayOfWeek: [0, 6] }, // Desabilitar sábado e domingo, se necessário
          ]}
          startMonth={new Date()}
        />
        <div>
          <AvailabilityList>
            <h3>Disponibilidade de Horários:</h3>
            <ul>
              {availability.map((item) => (
                <li key={item.hour}>
                  <span>
                    <TbClockHour7 /> {String(item.hour).padStart(2, '0')}:00h{' '}
                  </span>
                  <span
                    className={item.available ? 'available' : 'unavailable'}
                  >
                    {item.available ? (
                      <AiOutlineCheck color="green" />
                    ) : (
                      <AiOutlineClose color="red" />
                    )}
                    {item.available ? 'Disponível' : 'Indisponível'}
                  </span>
                </li>
              ))}
            </ul>
          </AvailabilityList>
        </div>
      </CalenderWrapper>

      <ConfirmAppointment
        isOpen={isConfirmModalOpen}
        onClose={closeConfirmModal}
        confirmDoctorProps={selectedDoctor}
        onConfirmDelete={confirmAppointment}
      />
    </Content>
  )
}
