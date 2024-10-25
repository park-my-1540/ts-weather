import React from 'react';
import { input, InputVariantProps } from '@/styles/components/inputs.css';

type ReactInputProps = React.ComponentPropsWithoutRef<'input'>;

type InputProps = {
  id: ReactInputProps['id'];
  className?: ReactInputProps['className'];
  placeholder: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

export const Input = ({
  id,
  onChange,
  onClick,
  color = 'primary',
  size = 'medium',
  placeholder = '입력해주세요.',
  value = '',
}: InputProps & Partial<InputVariantProps>) => {
    
  return (
    <input
        type="text"
        id={id}
        autoComplete='off'
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        value={value}
        className={input({ color, size})}
    />
  );
};