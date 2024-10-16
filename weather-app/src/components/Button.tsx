import React from 'react';
import { button, ButtonVariantProps} from '@/styles/components/buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

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

export const IconButton = ({
    theme = 'blue',
    color = 'primary',
    size = 'medium',
    rounded = false,
    onClick,
    children,
}: ButtonProps & Partial<ButtonVariantProps>) => {
    
return (
    <button type="button" onClick={onClick}>
        <i className="ico-item"><FontAwesomeIcon icon={faCheck} /></i>
    </button>
    );
};