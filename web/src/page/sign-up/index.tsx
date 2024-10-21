import { FiMail, FiUser, FiLock } from 'react-icons/fi'

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
  password: z
    .string()
    .min(8, { message: 'A senha deve ter pelo menos 8 caracteres.' })
    .regex(/[A-Z]/, {
      message: 'A senha deve ter pelo menos uma letra maiúscula.',
    })
    .regex(/[a-z]/, {
      message: 'A senha deve ter pelo menos uma letra minúscula.',
    })
    .regex(/[0-9]/, { message: 'A senha deve ter pelo menos um número.' })
    .regex(/[^A-Za-z0-9]/, {
      message: 'A senha deve ter pelo menos um caractere especial.',
    }),
})

type CreateUserData = z.infer<typeof createUserSchema>

export function SignUp() {
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
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logo} alt="Logo ClinDoctor" />

          <FormProvider {...createUserForm}>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <h2>Realize seu Cadastro</h2>

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
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                icon={FiLock}
                errorMessage={errors?.password?.message ?? ''}
              />
              <Button size='large' title='Cadastrar' disabled={isSubmitting} type="submit">
                {loading ? <Loading /> : 'Cadastrar'}
              </Button>

              <a href="#">Esqueci minha senha</a>

            </form>
          </FormProvider>

          <Link to="/login">
            <span>&lt;-</span>
            <p>Fazer login</p>
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  )
}