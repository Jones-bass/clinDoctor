export class InvalidScheduleTimeError extends Error {
  constructor() {
    super('O agendamento deverá ser feito em um outro horário.')
  }
}
