import { FaBaby, FaFlask, FaHeartbeat, FaPumpSoap } from 'react-icons/fa'
import {
  Container,
  Icon,
  ListItem,
  Section,
  ContentContainer,
  IconFaHeartbeat,
  ImageLeft,
  ImageRight,
  LayoutCell,
  LayoutWrap,
} from './styles'

import { Link } from 'react-router-dom'
import { RiHeartPulseLine } from 'react-icons/ri'
import { useEffect, useRef, useState } from 'react'

const items = [
  {
    icon: <FaHeartbeat />,
    title: 'Ecocardiogramas',
    text: 'Os associados são capazes de visualizar o batimento do coração e muitas de suas estruturas.',
  },
  {
    icon: <FaPumpSoap />,
    title: 'Dermatologia',
    text: 'Nossos provedores são treinados para lidar com uma variedade de doenças de pele.',
  },
  {
    icon: <FaBaby />,
    title: 'Pediátrico',
    text: 'Nossos pediatras clínicos podem ser contratados antes ou depois da alta hospitalar/nascimento.',
  },
  {
    icon: <FaFlask />,
    title: 'Laboratório',
    text: 'Os pedidos laboratoriais são criados no prontuário eletrônico (EHR) do paciente.',
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    const threshold = 0.02

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '10px',
      threshold,
    }

    function callback(entries: IntersectionObserverEntry[]) {
      const [entry] = entries
      const { intersectionRatio } = entry

      if (intersectionRatio >= threshold) {
        setIsVisible(true)
      }
    }

    const observer = new IntersectionObserver(callback, options)
    if (containerRef?.current) {
      observer.observe(containerRef.current)
    }

    const containerRefCurrent = containerRef.current
    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent)
      }
    }
  }, [containerRef])

  return (
    <Section isVisible={isVisible} ref={containerRef}>
      <LayoutWrap>
        <LayoutCell>
          <ImageLeft />
        </LayoutCell>

        <LayoutCell>
          <ContentContainer>
            <IconFaHeartbeat>
              <RiHeartPulseLine />
            </IconFaHeartbeat>
            <h1>Nossos Serviços</h1>
            <p>
              Visitar seu médico regularmente é fundamental para uma vida
              saudável. Esteja você sentindo os efeitos de um resfriado comum ou
              apenas vindo para um check-up, queremos ter certeza de que você
              tem tudo...
            </p>

            <Link to="/cadastro">
              <p> Leia Mais</p>
              <span>-&gt;</span>
            </Link>
          </ContentContainer>
        </LayoutCell>

        <LayoutCell>
          <ImageRight />
        </LayoutCell>
      </LayoutWrap>

      <Container>
        {items.map((item, index) => (
          <ListItem key={index}>
            <Icon isVisible={isVisible} ref={containerRef}>
              {item.icon}
            </Icon>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </ListItem>
        ))}
      </Container>
    </Section>
  )
}
