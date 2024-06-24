import { prisma } from '../src/lib/prisma'

async function seed() {
  const doctors = [
    {
      name: 'Jones Bass',
      speciality: 'Médico de família',
      price: 120,
      experience: 'Mais de 10 anos',
      description:
        'Fornece cuidados primários, trata uma ampla gama de problemas médicos e oferece cuidados preventivos. Eles gerenciam a saúde geral e encaminham os pacientes para especialistas, se necessário.',
    },
    {
      name: 'Maria Silva',
      speciality: 'Cardiologista',
      price: 150,
      experience: 'Mais de 15 anos',
      description:
        'Especialista em doenças do coração e do sistema cardiovascular, trata condições como hipertensão e insuficiência cardíaca.',
    },
    {
      name: 'Pedro Souza',
      speciality: 'Dermatologista',
      price: 100,
      experience: 'Mais de 8 anos',
      description:
        'Diagnostica e trata doenças da pele, cabelos e unhas, como eczema, acne e câncer de pele.',
    },
    {
      name: 'Ana Costa',
      speciality: 'Pediatra',
      price: 130,
      experience: 'Mais de 12 anos',
      description:
        'Cuida da saúde de bebês, crianças e adolescentes, desde consultas de rotina até o tratamento de doenças infantis.',
    },
    {
      name: 'Luiz Fernandes',
      speciality: 'Ortopedista',
      price: 140,
      experience: 'Mais de 20 anos',
      description:
        'Especialista em doenças e lesões do sistema músculo-esquelético, incluindo ossos, articulações, ligamentos, tendões e músculos.',
    },
    {
      name: 'Patricia Almeida',
      speciality: 'Ginecologista',
      price: 125,
      experience: 'Mais de 10 anos',
      description:
        'Cuida da saúde do sistema reprodutor feminino e oferece acompanhamento durante a gestação e parto.',
    },
    {
      name: 'Roberto Lima',
      speciality: 'Neurologista',
      price: 160,
      experience: 'Mais de 18 anos',
      description:
        'Trata doenças do sistema nervoso, como epilepsia, esclerose múltipla, Parkinson e outras desordens neurológicas.',
    },
    {
      name: 'Fernanda Gomes',
      speciality: 'Psiquiatra',
      price: 150,
      experience: 'Mais de 14 anos',
      description:
        'Especialista em saúde mental, trata condições como depressão, ansiedade, transtorno bipolar e esquizofrenia.',
    },
    {
      name: 'Carlos Oliveira',
      speciality: 'Oftalmologista',
      price: 110,
      experience: 'Mais de 9 anos',
      description:
        'Cuida da saúde ocular, diagnostica e trata problemas de visão, como miopia, hipermetropia e glaucoma.',
    },
    {
      name: 'Juliana Pereira',
      speciality: 'Endocrinologista',
      price: 135,
      experience: 'Mais de 13 anos',
      description:
        'Trata distúrbios hormonais e metabólicos, como diabetes, doenças da tireoide e obesidade.',
    },
  ]

  for (const doctor of doctors) {
    await prisma.doctor.upsert({
      where: { name: doctor.name },
      update: doctor,
      create: doctor,
    })
  }
  console.log('All doctors created')
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

// comando npx prisma db seed
