import { IconBaseProps } from 'react-icons';
import { ButtonContainer } from './styles';
import { ReactNode } from 'react';

interface ButtonProps {
  title: string
  size?: 'small' | 'medium' | 'large';

  disabled?: boolean;
  type?: string;
  icon?: React.ComponentType<IconBaseProps>
  onClick?: () => void; 
  children?: ReactNode; 
}

export function Button({ title, icon: Icon, children, onClick, size = 'medium' }: ButtonProps) {
  return (
    <ButtonContainer size={size} onClick={onClick}>
      {Icon && <Icon size={22} />}
      {children || title}
    </ButtonContainer>
  );
}
