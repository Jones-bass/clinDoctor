export class PatientAlreadyExistsError extends Error {
  constructor() {
    super('Já existe um paciente com este número de telefone.')
  }
}
