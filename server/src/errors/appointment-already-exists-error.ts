export class AppointmentAlreadyExistsError extends Error {
  constructor() {
    super('O agendamento já existe!')
  }
}
