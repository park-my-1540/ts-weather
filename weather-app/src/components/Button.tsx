import React from 'react';
import { button, ButtonVariantProps, themeButton, ThemeButtonVariantProps, activeStyle } from '@/styles/components/buttons.css';
import { none } from '@/styles/style.css'

type ButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

type themeButtonProps = {
    isActive: boolean,
    onClick: React.MouseEventHandler<HTMLAnchorElement>;
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

export const ThemeButton = ({
    theme,
    isActive,
    onClick,
}: themeButtonProps & Partial<ThemeButtonVariantProps>) => {
    
return (
    <a href="#none" onClick={ onClick }
        className={`${isActive ? 'on' :''} ${themeButton({ theme })} ${activeStyle}`}>
            <span className={none}>{theme}</span>
    </a>
    );
};
