export class PatientAlreadyExistsError extends Error {
  constructor() {
    super('There is already a patient with this phone number.')
  }
}
