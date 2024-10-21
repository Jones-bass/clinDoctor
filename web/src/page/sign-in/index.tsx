import { FiMail, FiUser } from 'react-icons/fi'

import logo from "../../assets/logo.png";

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import { Container, Content, AnimationContainer, Background } from './styles'
import { Link } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { Input } from '../../components/input'
import { Loading } from '../../components/loading'
import { Button } from '../../components/button';

const createUserSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'O nome é obrigatório',
    })
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    }),
  email: z
    .string()
    .min(1, {
      message: 'O e-mail é obrigatório',
    })
    .email({
      message: 'Formato de e-mail inválido',
    })
    .toLowerCase(),
})

type CreateUserData = z.infer<typeof createUserSchema>

export function SignIn() {
  const [loading, setLoading] = useState(false)

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = createUserForm

  const handleOnSubmit = useCallback(
    async (data: CreateUserData) => {
      try {
        setLoading(true)
        console.log('users', data)

        toast.success('Usuário cadastrado com Sucesso.')
      } catch {
        toast.error('Ocorreu um erro ao se cadastrar, tente novamente!')
        setLoading(false)
      }
    },
    [],
  )

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Logo ClinDoctor" />

          <FormProvider {...createUserForm}>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <h2>Acesse sua conta</h2>

              <Input
                name="name"
                placeholder="Nome"
                icon={FiUser}
                errorMessage={errors?.name?.message ?? ''}
              />
              <Input
                name="email"
                placeholder="E-mail"
                icon={FiMail}
                errorMessage={errors?.email?.message ?? ''}
              />
              <Button size='large' title='Cadastrar' disabled={isSubmitting} type="submit">
                {loading ? <Loading /> : 'Cadastrar'}
              </Button>
            </form>
          </FormProvider>

          <Link to="/cadastro">
            <span>-&gt;</span>
            <p>Quero me cadastrar</p>
          </Link>
        
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
}