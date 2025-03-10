import { ReactNode } from 'react';
import { ThemeColor, OptionType } from '@/types/styles';
import { RadioButton } from '@/components/atom/CustomRadio';

interface RadioButtonGroupProps {
  id: keyof OptionType;
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
    <RadioButton theme={theme} onClick={onClick} id={id}>
      <RadioButton.Left>{leftLabel}</RadioButton.Left>
      <RadioButton.Right>{rightLabel}</RadioButton.Right>
    </RadioButton>
  );
};

export default RadioButtonGroup;
