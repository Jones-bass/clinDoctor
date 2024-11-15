import { FiLock, FiMail } from 'react-icons/fi'

import logo from '../../assets/logo.png'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import { Container, Content, AnimationContainer, Background } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { Input } from '../../components/input'
import { Loading } from '../../components/loading'
import { Button } from '../../components/button'
import { useAuth } from '../../hook/auth'

const createUserSchema = z.object({
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

export function SignIn() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

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
        await signIn({ ...data })
        console.log('users', data)

        navigate('/dashboard')
        if (data !== undefined) {
          toast.success('Usuário Logado.')
        }
      } catch {
        toast.error('Ocorreu um erro ao se cadastrar, tente novamente!')
        setLoading(false)
      }
    },
    [navigate, signIn],
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

              <Button
                size="large"
                title="Cadastrar"
                disabled={isSubmitting}
                type="submit"
              >
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
