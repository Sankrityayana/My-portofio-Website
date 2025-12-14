import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import Button from '../../components/UI/Button';
import { allProjects } from '../../data/projects';
import styles from './ProjectDetails.module.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = allProjects.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/not-found" />;
    }

    return (
        <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
            <Link to="/projects" className={styles.backLink}>
                <FaArrowLeft /> Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.content}
            >
                <div className={styles.imageWrapper}>
                    <img src={project.image} alt={project.title} className={styles.image} />
                </div>

                <div className={styles.details}>
                    <h1 className={styles.title}>{project.title}</h1>

                    <div className={styles.tags}>
                        {project.tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>

                    <div className={styles.links}>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary">
                                Live Demo <FaExternalLinkAlt style={{ marginLeft: '0.5rem' }} />
                            </Button>
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary">
                                Source Code <FaGithub style={{ marginLeft: '0.5rem' }} />
                            </Button>
                        </a>
                    </div>

                    <div className={styles.section}>
                        <h2>Overview</h2>
                        <p>{project.fullDescription || project.description}</p>
                    </div>

                    {project.challenges && (
                        <div className={styles.section}>
                            <h2>Challenges</h2>
                            <p>{project.challenges}</p>
                        </div>
                    )}

                    {project.solutions && (
                        <div className={styles.section}>
                            <h2>Solutions</h2>
                            <p>{project.solutions}</p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
