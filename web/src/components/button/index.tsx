import { IconBaseProps } from 'react-icons';
import { ButtonContainer } from './styles';
import { ReactNode } from 'react';

interface ButtonProps {
  title: string
  size?: 'small' | 'medium' | 'large';

  disabled?: boolean;
  type?: string;
  icon?: React.ComponentType<IconBaseProps>
  children?: ReactNode; 
}

export function Button({ title, icon: Icon, children, size = 'medium' }: ButtonProps) {
  return (
    <ButtonContainer size={size}>
      {Icon && <Icon size={22} />}
      {children || title}
    </ButtonContainer>
  );
}
