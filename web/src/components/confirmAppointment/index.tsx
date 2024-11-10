import * as Dialog from '@radix-ui/react-dialog';
import { LuX } from 'react-icons/lu';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Overlay, Content, CloseButton, ConfirmButton, ModalButtons, DateInput } from './styled';
import { PropsDoctor } from '../../page/DoctorList';
import { useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hook/auth';
import { toast } from 'react-toastify';

interface DiologProps {
  isOpen: boolean;
  onClose: () => void;
  confirmDoctorProps: PropsDoctor | null;
  onConfirmDelete: (selectedDate: string) => void;
}

export function ConfirmAppointment({ isOpen, onClose, confirmDoctorProps, onConfirmDelete }: DiologProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const { user } = useAuth();

  async function handleConfirm() {
    if (selectedDate && confirmDoctorProps && user) {
      const formattedDate = new Date(selectedDate).toISOString();
      const appointmentData = {
        patientUserId: user.id,
        doctorId: confirmDoctorProps.id,
        time: formattedDate,
      };

      try {
        const response = await api.post("/doctor-schedule", appointmentData);

        if (response.status === 200) {
          toast.success("Agendamento confirmado com sucesso!");
          onConfirmDelete(formattedDate);
          setSelectedDate("");
          onClose();
        } else {
          toast.error(`Erro ao confirmar o agendamento: ${response.data.message || "Erro desconhecido"}`);
        }

      } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Erro ao conectar com o servidor. Tente novamente mais tarde.";
        toast.error(errorMessage);
        console.error(error);
      } finally {
        onClose();
      }
    }
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <AiOutlineCalendar className='icon-appointment'/>
          <Dialog.Title>
            Agendamento
          </Dialog.Title>
          <Dialog.Description>
              Vamos confirmar o agendamento com {confirmDoctorProps?.gender === 'Feminino' ? 'Doutora' : 'Doutor'} {confirmDoctorProps?.name}?
          </Dialog.Description>

          <DateInput
            type="datetime-local"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />

          <ModalButtons>
            <ConfirmButton onClick={handleConfirm}>Confirmar</ConfirmButton>
          </ModalButtons>

          <CloseButton onClick={onClose}>
            <LuX size={24} />
          </CloseButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
