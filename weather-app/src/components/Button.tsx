import React from 'react';
import { button } from '@/styles/buttons.css';
import { styleFontSize, styleBgColor } from '@/styles/variants.css';
import { FontSize, ThemeColor } from "@/types/styles";

interface ButtonStyleProps {
    fontSize: FontSize;
    theme: ThemeColor;
}

interface ButtonProps extends Partial<ButtonStyleProps> {
    value: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({
    value,
    onClick,
    fontSize = "small",
    theme = "blue"
}: ButtonProps ) => {
    
    const widthClass = styleFontSize[fontSize]; // widthSize[defulat or medium]
    const colorClass = styleBgColor[theme];

    return (
        <button 
            onClick={onClick}
            className={`${button} ${widthClass} ${colorClass}`}
            type="button">{value}</button>
       
      );
    };