import React from 'react';
import { button, ButtonVariantProps, themeButton, ThemeButtonVariantProps, activeStyle } from '@/styles/components/buttons.css';
import { none } from '@/styles/style.css'

type ButtonProps <T = unknown> = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
} & ButtonVariantProps & T;

type themeButtonProps = {
    isActive: boolean,
    onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Button = <T,>({
    theme = 'blue',
    color = 'primary',
    size = 'medium',
    rounded = false,
    onClick,
    children,
    ...rest // 추가 속성을 받을 수 있게 함
}: ButtonProps<T>) => {
    
return (
    <button type="button" className={button({ theme, color, size, rounded })} onClick={onClick} {...rest}>
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
