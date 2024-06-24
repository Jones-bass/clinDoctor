# API de Agendamento de Consultas Médicas

<h2 align="left">Este projeto é uma API para agendamento de consultas médicas, construída usando Prisma e Fastify. O objetivo é fornecer uma interface eficiente e robusta para gerenciar a disponibilidade de médicos e permitir que pacientes façam agendamentos de forma fácil e segura.</h2>

## Tecnologias Utilizadas

<div align="left">
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="40" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg" height="40" alt="storybook logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
</div>

###


# Funcionalidades Principais
## Gerenciamento de Médicos

- Cadastro de médicos com informações como nome, especialidade, preço, descrição e experiência.
- Listagem de médicos disponíveis.
- Gerenciamento da disponibilidade dos médicos através de horários (schedules).

## Gerenciamento de Pacientes
- Cadastro de pacientes com informações básicas como nome, email e telefone.
- Associação de pacientes a usuários.

## Agendamento de Consultas
- Registro de horários disponíveis para consultas médicas.
- Criação de agendamentos por pacientes, onde um horário é marcado como indisponível após a reserva.
- Validações para evitar agendamentos em horários passados e fora do horário de expediente (8h às 17h).

# Fluxo de Uso
## Cadastro de Médicos
- Os médicos são cadastrados no sistema com informações detalhadas sobre suas especialidades e horários disponíveis.

## Cadastro de Pacientes
- Pacientes se registram no sistema, fornecendo informações de contato e outros detalhes relevantes.

## Disponibilização de Horários
- Médicos configuram seus horários disponíveis para consulta através da API. Cada horário é registrado como disponível inicialmente (available: true).

## Agendamento de Consultas
- Pacientes escolhem um horário disponível e realizam um agendamento. Ao confirmar o agendamento, o horário é marcado como indisponível (available: false) para evitar conflitos.


# Exemplo de Uso
## Cadastro de Médico
http
Copiar código
POST /doctors
Content-Type: application/json

```bash
{
  "name": "Dr. João",
  "speciality": "Cardiologia",
  "price": 200.00,
  "description": "Especialista em doenças cardíacas",
  "experience": "10 anos"
}
```

## Cadastro de Paciente
http
Copiar código
POST /patients
Content-Type: application/json

```bash
{
  "name": "Maria Silva",
  "email": "maria@example.com",
  "phone": "123456789"
}
```

## Registro de Horário Disponível
http
Copiar código
POST /doctor-schedules
Content-Type: application/json

```bash
{
  "doctorId": "id-do-doutor",
  "available": true,
  "date": "2024-06-24T13:00:00.000Z"
}
```

## Agendamento de Consulta
http
Copiar código
POST /connections-schedules
Content-Type: application/json

```bash
{
  "scheduleId": "id-do-horario",
  "patientId": "id-do-paciente"
}
```



## Licença

Este projeto está licenciado sob a licença [MIT](https://github.com/Jones-bass/). Consulte o arquivo LICENSE para obter mais informações.