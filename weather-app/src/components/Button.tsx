import React from 'react';
import { button, ButtonVariantProps} from '@/styles/buttons.css';

type ButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

export const Button = ({
    theme = 'blue',
    color = 'primary',
    size = 'medium',
    rounded = false,
    onClick,
    children,
}: ButtonProps & Partial<ButtonVariantProps>) => {
    
return (
    <button type="button" className={button({ theme, color, size, rounded })} onClick={onClick}>
        {children}
    </button>
    );
};