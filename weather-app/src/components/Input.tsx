import { input} from '@/styles/inputs.css';
import React from 'react';
import { styleWidth } from '@/styles/variants.css';
import { WidthSize } from "@/types/styles";

interface InputStyleProps {
    widthSize: WidthSize;
}

type ReactInputProps = React.ComponentPropsWithoutRef<'input'>;

interface InputProps extends Partial<InputStyleProps> {
  id: ReactInputProps['id'];
  className?: ReactInputProps['className'];
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  className = '',
  id,
  onChange,
  widthSize = 'default',
  placeholder = '입력해주세요.',
  value = '',
}: InputProps) => {
    
  const widthClass = styleWidth[widthSize]; // widthSize[defulat or medium]

  return (
    <input
        type="text"
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={`${input} ${widthClass} ${className}`}
    />
  );
};