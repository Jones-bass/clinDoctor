export class ScheduleHourError extends Error {
  constructor() {
    super('Você só pode criar agendamento entre 8h e 17h.')
  }
}
