import React from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <h2 className={styles.title}>
                <span>{title}</span>
            </h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    );
};

export default SectionTitle;
