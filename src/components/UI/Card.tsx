import React, { type HTMLAttributes } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverable?: boolean;
    glass?: boolean;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    children,
    hoverable = false,
    glass = false,
    className = '',
    ...props
}) => {
    return (
        <div
            className={`
        ${styles.card} 
        ${hoverable ? styles.hoverable : ''} 
        ${glass ? styles.glass : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
