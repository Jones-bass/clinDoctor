import { useCallback, useEffect, useState } from 'react'
import { api } from '../../services/api'
import {
  Main,
  DoctorsContainer,
  DoctorCard,
  DoctorInfoBox,
  DoctorAvatar,
  DoctorDetails,
  DoctorBio,
  DoctorStats,
  Section,
} from './styles'
import { Button } from '../../components/button'
import { Loading } from '../../components/loading'
import { useNavigate } from 'react-router-dom'

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

export function DoctorList() {
  const navigate = useNavigate()
  const [doctors, setDoctors] = useState<PropsDoctor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await api.get<{ doctors: PropsDoctor[] }>(
          '/list-doctor',
        )
        setDoctors(response.data.doctors)
      } catch (error) {
        console.error('Erro ao carregar os dados dos médicos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  const handleOnSubmit = useCallback(
    (doctorId: string) => {
      navigate(`/detalhar-consulta/${doctorId}`)
    },
    [navigate],
  )

  if (loading) {
    return <Loading />
  }

  return (
    <Main>
      <Section>
        <h1>Nossos</h1>
        <p>Doutores</p>
      </Section>
      <DoctorsContainer>
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
              <Button
                size="large"
                type="button"
                title="Detalhar consulta"
                onClick={() => handleOnSubmit(doctor.id)}
              >
                Detalhar consulta
              </Button>
            </DoctorInfoBox>
          </DoctorCard>
        ))}
      </DoctorsContainer>
    </Main>
  )
}
