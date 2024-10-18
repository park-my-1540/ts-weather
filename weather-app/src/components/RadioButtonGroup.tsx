import { ReactNode } from 'react';
import { ThemeColor } from '@/types/styles';
import { RadioButton } from "@/components/CustomRadio";

interface RadioButtonGroupProps {
    id: string;
    theme: ThemeColor;
    onClick: () => void;
    leftLabel: ReactNode;
    rightLabel: ReactNode;
  }
  
  const RadioButtonGroup = ({
    id,
    theme,
    onClick,
    leftLabel,
    rightLabel,
  }: RadioButtonGroupProps) => {
    return (
      <RadioButton 
          theme={theme}
          onClick={onClick}
          id={id}>
            <RadioButton.Left>{leftLabel}</RadioButton.Left>
            <RadioButton.Right>{rightLabel}</RadioButton.Right>
      </RadioButton>
    );
  };
  
  export default RadioButtonGroup;