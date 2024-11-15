import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import { useFormContext } from 'react-hook-form'
import { Container, ErrorText } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  errorMessage: string
  icon: React.ComponentType<IconBaseProps>
}

export const Input = ({
  errorMessage,
  name,
  icon: Icon,
  ...rest
}: InputProps) => {
  const { register } = useFormContext()

  return (
    <>
      <Container>
        {Icon && <Icon className="icon" size={18} />}
        <input {...register(name)} {...rest} />
      </Container>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  )
}
