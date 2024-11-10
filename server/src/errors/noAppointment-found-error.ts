export class NoAppointmentFoundError extends Error {
  constructor() {
    super('Nenhuma consulta encontrada para o horário e paciente indicados.')
  }
}
