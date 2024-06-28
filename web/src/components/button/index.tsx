import { ButtonContainer } from './styles';

interface ButtonProps {
  title: string
}

export function Button({title}: ButtonProps) {
  return (
    <ButtonContainer>
      <span>-&gt;</span> {' '}
      {title}
    </ButtonContainer>
  );
}
