/* eslint-disable prettier/prettier */
import { prisma } from '../src/lib/prisma'

async function seed() {
  const doctors = [
    {
      name: 'Aldiran Nascimento',
      speciality: 'Médico de família',
      price: 120,
      city: 'Tobias Barreto',
      state: 'Sergipe',
      experience: 'Mais de 10 anos',
      avatar_url: 'https://randomuser.me/api/portraits/men/1.jpg',
      description:
        'Fornece cuidados primários, trata uma ampla gama de problemas médicos e oferece cuidados preventivos. Eles gerenciam a saúde geral e encaminham os pacientes para especialistas, se necessário.',
    },
    {
      name: 'Maria Silva',
      speciality: 'Cardiologista',
      price: 150,
      city: 'Tobias Barreto',
      state: 'Sergipe',
      experience: 'Mais de 15 anos',
      avatar_url: 'https://randomuser.me/api/portraits/women/2.jpg',
      description:
        'Especialista em doenças do coração e do sistema cardiovascular, trata condições como hipertensão e insuficiência cardíaca.',
    },
    {
      name: 'Pedro Souza',
      speciality: 'Dermatologista',
      price: 100,
      city: 'Tobias Barreto',
      state: 'Sergipe',
      avatar_url: 'https://randomuser.me/api/portraits/men/10.jpg',
      experience: 'Mais de 8 anos',
      description:
        'Diagnostica e trata doenças da pele, cabelos e unhas, como eczema, acne e câncer de pele.',
    },
    {
      name: 'Ana Costa',
      speciality: 'Pediatra',
      price: 130,
      city: 'Tobias Barreto',
      state: 'Sergipe',
      experience: 'Mais de 12 anos',
      avatar_url: 'https://randomuser.me/api/portraits/women/4.jpg',
      description:
        'Cuida da saúde de bebês, crianças e adolescentes, desde consultas de rotina até o tratamento de doenças infantis.',
    },
    {
      name: 'Luiz Fernandes',
      speciality: 'Ortopedista',
      price: 140,
      city: 'Tobias Barreto',
      state: 'Sergipe',
      experience: 'Mais de 20 anos',
      avatar_url: 'https://randomuser.me/api/portraits/men/5.jpg',
      description:
        'Especialista em doenças e lesões do sistema músculo-esquelético, incluindo ossos, articulações, ligamentos, tendões e músculos.',
    },
    {
      name: 'Patricia Almeida',
      speciality: 'Ginecologista',
      price: 125,
      city: 'Tobias Barreto',
      state: 'Sergipe',
      experience: 'Mais de 10 anos',
      avatar_url: 'https://randomuser.me/api/portraits/women/10.jpg',
      description:
        'Cuida da saúde do sistema reprodutor feminino e oferece acompanhamento durante a gestação e parto.',
    },
    {
      name: 'Roberto Lima',
      speciality: 'Neurologista',
      price: 160,
      city: 'Aracaju',
      state: 'Sergipe',
      experience: 'Mais de 18 anos',
      avatar_url: 'https://randomuser.me/api/portraits/men/7.jpg',
      description:
        'Trata doenças do sistema nervoso, como epilepsia, esclerose múltipla, Parkinson e outras desordens neurológicas.',
    },
    {
      name: 'Fernanda Gomes',
      speciality: 'Psiquiatra',
      price: 150,
      city: 'Lagarto',
      state: 'Sergipe',
      experience: 'Mais de 14 anos',
      avatar_url: 'https://randomuser.me/api/portraits/women/8.jpg',
      description:
        'Especialista em saúde mental, trata condições como depressão, ansiedade, transtorno bipolar e esquizofrenia.',
    },
    {
      name: 'Carlos Oliveira',
      speciality: 'Oftalmologista',
      price: 110,
      city: 'Itabaiana',
      state: 'Sergipe',
      experience: 'Mais de 9 anos',
      avatar_url: 'https://randomuser.me/api/portraits/men/18.jpg',
      description:
        'Cuida da saúde ocular, diagnostica e trata problemas de visão, como miopia, hipermetropia e glaucoma.',
    },
    {
      name: 'Juliana Pereira',
      speciality: 'Endocrinologista',
      price: 135,
      city: 'Umbauba',
      state: 'Sergipe',
      experience: 'Mais de 13 anos',
      avatar_url: 'https://randomuser.me/api/portraits/women/19.jpg',
      description:
        'Trata distúrbios hormonais e metabólicos, como diabetes, doenças da tireoide e obesidade.',
    },
    {
      name: 'Renata Souza',
      speciality: 'Ortopedista',
      price: 135,
      city: 'Itabaiana',
      state: 'Sergipe',
      experience: 'Mais de 12 anos',
      avatar_url: 'https://randomuser.me/api/portraits/women/23.jpg',
      description:
      'Especialista em doenças e lesões do sistema músculo-esquelético, incluindo ossos, articulações, ligamentos, tendões e músculos.',
    },
    {
      name: 'Gabriela Teles',
      speciality: 'Ginecologista',
      price: 135,
      city: 'Tobias Barreto',
      state: 'Sergipe',
      experience: 'Mais de 3 anos',
      avatar_url: 'https://randomuser.me/api/portraits/women/29.jpg',
      description:
      'Cuida da saúde do sistema reprodutor feminino e oferece acompanhamento durante a gestação e parto.',
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
