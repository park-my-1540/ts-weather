import React from 'react';
import { useState, createContext, useContext } from 'react';
import { radioButton, slider, RadioButtonVariantProps, left, right } from '@/styles/components/radioButton.css';
import { none } from '@/styles/style.css'

type ButtonProps = {
    id: string;
    children: React.ReactNode;
}

type RadioButtonContextType = {
    isActive: boolean;
    toggleActive: () => void;
  };

const RadioButtonContext = createContext<RadioButtonContextType | null>(null);
export const RadioButton = ({
    id,
    theme = 'blue',
    children
}: ButtonProps & Partial<RadioButtonVariantProps>) => {

    const [isActive, setIsActive] = useState(true);
    const toggleActive = () => setIsActive((prev) => !prev);
    
    return (
    <RadioButtonContext.Provider value={{ isActive, toggleActive }}>
        {isActive}
      <label htmlFor={id}>
        <input type="checkbox" id={id} className={none}/>
        <a
            href="#none"
            onClick={toggleActive}
            className={`${isActive ? 'on' : ''} ${slider} ${radioButton({ theme })}`}>
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
if (!context) throw new Error('RadioButton.Left must be used inside RadioButton');

return <p className={left}>{children}</p>;
};

const Right: React.FC<SideProps> = ({ children }) => {
const context = useContext(RadioButtonContext);
if (!context) throw new Error('RadioButton.Right must be used inside RadioButton');

return <p className={right}>{children}</p>;
};

// Compound Component Export
RadioButton.Left = Left;
RadioButton.Right = Right;