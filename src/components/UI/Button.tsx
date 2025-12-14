import React, { type ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    href?: string;
    to?: string;
    className?: string;
    download?: boolean | string;
    target?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    href,
    to,
    className = '',
    ...props
}) => {
    const classes = `
    ${styles.button} 
    ${styles[variant]} 
    ${styles[size]} 
    ${fullWidth ? styles.fullWidth : ''}
    ${className}
  `;

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...(props as any)}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
