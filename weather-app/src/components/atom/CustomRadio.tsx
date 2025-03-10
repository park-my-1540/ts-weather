import React, { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';
import {
  radioButton,
  slider,
  RadioButtonVariantProps,
  left,
  right,
} from '@/styles/components/radioButton.css';
import { none } from '@/styles/style.css';
import tempState from '@/recoil/atoms/optionAtom';
import { OptionType } from '@/types/styles';

type ButtonProps = {
  id: keyof OptionType;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
};

type RadioButtonContextType = {
  toggleActive: (property: keyof OptionType) => void;
};

const RadioButtonContext = createContext<RadioButtonContextType | null>(null);
export const RadioButton = ({
  id,
  theme,
  onClick,
  children,
}: ButtonProps & Partial<RadioButtonVariantProps>) => {
  const [tempOptions, setTempOptions] = useRecoilState(tempState);
  const toggleActive = (property: keyof OptionType) => {
    setTempOptions((prev) => ({
      ...prev,
      [property]: !tempOptions[property],
    }));
  };

  return (
    <RadioButtonContext.Provider value={{ toggleActive }}>
      <label htmlFor={id}>
        <input type="checkbox" id={id} className={none} />
        <a
          href="#none"
          onClick={(event) => {
            if (onClick) onClick(event); // onClick이 존재할 때만 호출
            toggleActive(id);
          }}
          className={`${tempOptions[id] ? 'on' : ''} ${slider} ${radioButton({ theme })}`}
        >
          {children}
        </a>
      </label>
    </RadioButtonContext.Provider>
  );
};

type SideProps = {
  children: React.ReactNode;
};

const Left: React.FC<SideProps> = ({ children }) => {
  const context = useContext(RadioButtonContext);
  if (!context) {
    throw new Error('RadioButton.Left must be used inside RadioButton');
  }

  return <p className={left}>{children}</p>;
};

const Right: React.FC<SideProps> = ({ children }) => {
  const context = useContext(RadioButtonContext);
  if (!context) {
    throw new Error('RadioButton.Right must be used inside RadioButton');
  }

  return <p className={right}>{children}</p>;
};

// Compound Component Export
RadioButton.Left = Left;
RadioButton.Right = Right;

export default RadioButton;
