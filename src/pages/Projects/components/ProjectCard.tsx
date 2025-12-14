import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../../../components/UI/Card';
import Button from '../../../components/UI/Button';
import styles from './ProjectCard.module.css';
import type { Project } from '../../../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card hoverable glass className={styles.cardWrapper}>
            <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            {/* Fallback if no image url is valid css */}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{project.title}</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {project.category}
                </span>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.tags}>
                {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>

            <div className={styles.links}>
                {project.demoUrl && (
                    <Button href={project.demoUrl} size="small" variant="primary">
                        <FaExternalLinkAlt style={{ marginRight: '0.5rem' }} /> Live Demo
                    </Button>
                )}
                {project.githubUrl && (
                    <Button href={project.githubUrl} size="small" variant="secondary">
                        <FaGithub style={{ marginRight: '0.5rem' }} /> Code
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default ProjectCard;
