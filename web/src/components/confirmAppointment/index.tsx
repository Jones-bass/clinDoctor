import * as Dialog from '@radix-ui/react-dialog'
import { LuX } from 'react-icons/lu'
import { AiOutlineCalendar } from 'react-icons/ai'
import {
  Overlay,
  Content,
  CloseButton,
  ModalButtons,
  DateInput,
} from './styled'
import { PropsDoctor } from '../../page/doctorList'
import { useState } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hook/auth'
import { toast } from 'react-toastify'
import { Button } from '../button'
import { z } from 'zod'

interface DiologProps {
  isOpen: boolean
  onClose: () => void
  confirmDoctorProps: PropsDoctor | null
  onConfirmDelete: (selectedDate: string) => void
}

const appointmentSchema = z.object({
  selectedDate: z.string().min(1, "Por favor, selecione uma data válida")
    .refine((date) => {
      const time = new Date(date)
      const isValidTime = !isNaN(time.getTime()) && time.getMinutes() === 0
      const dayOfWeek = time.getDay()
      const isWeekday = dayOfWeek !== 0 && dayOfWeek !== 6
      return isValidTime && isWeekday
    }, "Por favor, selecione um dia útil para o agendamento."),
})

export function ConfirmAppointment({
  isOpen,
  onClose,
  confirmDoctorProps,
  onConfirmDelete,
}: DiologProps) {
  const [selectedDate, setSelectedDate] = useState('')
  const [error, setError] = useState<string | null>(null)

  const { user } = useAuth()

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    if (value) {
      // Garantir que os minutos sejam 00
      const formattedValue = value.slice(0, 13) + ":00"
      setSelectedDate(formattedValue)
    }
  }

  async function handleConfirm() {
    const validation = appointmentSchema.safeParse({ selectedDate })
    if (!validation.success) {
      setError(validation.error.errors[0].message)
      return
    }

    setError(null)

    if (selectedDate && confirmDoctorProps && user) {
      const formattedDate = new Date(selectedDate).toISOString()
      const appointmentData = {
        patientUserId: user.id,
        doctorId: confirmDoctorProps.id,
        time: formattedDate,
      }

      try {
        const response = await api.post('/doctor-schedule', appointmentData)

        if (response.status === 200) {
          toast.success('Agendamento confirmado com sucesso!')
          onConfirmDelete(formattedDate)
          setSelectedDate('')
          onClose()
        } else {
          toast.error(
            `Erro ao confirmar o agendamento: ${response.data.message || 'Erro desconhecido'}`,
          )
        }
      } catch (error: unknown) {
        const errorMessage =
          (error as { response?: { data?: { message?: string } } }).response
            ?.data?.message ||
          'Erro ao conectar com o servidor. Tente novamente mais tarde.'
        toast.error(errorMessage)
        console.error(error)
      } finally {
        onClose()
      }
    }
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <AiOutlineCalendar className="icon-appointment" />
          <Dialog.Title>Agendamento</Dialog.Title>
          <Dialog.Description>
            Vamos confirmar o agendamento com{' '}
            {confirmDoctorProps?.gender === 'Feminino' ? 'Doutora' : 'Doutor'}{' '}
            {confirmDoctorProps?.name}?
          </Dialog.Description>

          <DateInput
            type="datetime-local"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />

          {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}

          <ModalButtons>
            <Button title='Confirmar' size='medium' onClick={handleConfirm} />
          </ModalButtons>

          <CloseButton onClick={onClose}>
            <LuX size={24} />
          </CloseButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
