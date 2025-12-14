import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../../components/UI/SectionTitle';
import ProjectCard from './components/ProjectCard';
import Button from '../../components/UI/Button';
import styles from './Projects.module.css';
import { allProjects } from '../../data/projects';
import { fadeIn, staggerContainer } from '../../utils/animations';

const categories = ['All', 'Web', 'Mobile', 'Design'];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === activeCategory);

    return (
        <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
            <SectionTitle
                title="My Projects"
                subtitle="A collection of my recent work"
            />

            <div className={styles.filterContainer}>
                {categories.map(category => (
                    <Button
                        key={category}
                        variant={activeCategory === category ? 'primary' : 'secondary'}
                        onClick={() => setActiveCategory(category)}
                        size="small"
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCategory}
                    variants={staggerContainer(0.1)}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={styles.grid}
                >
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <motion.div key={project.id} variants={fadeIn('up', 0)} layout>
                                <ProjectCard project={project} />
                            </motion.div>
                        ))
                    ) : (
                        <div className={styles.noResults}>
                            <p>No projects found in this category.</p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Projects;
