import { Description, ItemDescription, ItemTitle, ListContainer, ListItem, Section, Title } from './styles';

const servicesData = [
  {
    title: 'Cuidados Familiares',
    description: 'Nossos médicos, enfermeiros e funcionários da clínica trabalham juntos para fornecer atendimento amigável e personalizado a todos os membros da sua família, desde o nascimento até os 100 anos ou mais.',
  },
  {
    title: 'Atendimento Urgente',
    description: 'Desde atendimento ambulante, consultas no mesmo dia até visitas on-line com OnCare, cuidaremos bem de você. Se você estiver passando por uma emergência.',
  },
  {
    title: 'Pediátrico',
    description: 'Nossa equipe de atendimento conquistou a reputação de fornecer atendimento especializado a crianças, incluindo o tratamento de muitas condições complexas.',
  },
  {
    title: 'Serviços de laboratório',
    description: 'Podemos ajudá-lo a saber o que esperar antes, durante e depois do seu teste.',
  }
];

export function MedicalServices() {
  return (
    <Section>
      <Title>Serviços Médicos</Title>
      <Description>
        Nosso Centro oferece a você e sua família uma gama completa de serviços de saúde.
      </Description>
      <ListContainer>
        {servicesData.map((service, index) => (
          <ListItem key={index}>
            <ItemTitle>{service.title}</ItemTitle>
            <ItemDescription>{service.description}</ItemDescription>
          </ListItem>
        ))}
      </ListContainer>
    </Section>
  );
}
