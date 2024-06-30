import { ButtonContainer } from './styles';

interface ButtonProps {
  title: string
  size?: 'small' | 'medium' | 'large';
}

export function Button({title, size='medium'}: ButtonProps) {
  return (
    <ButtonContainer size={size}>
      <span>-&gt;</span> {' '}
      {title}
    </ButtonContainer>
  );
}
