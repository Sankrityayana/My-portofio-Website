import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/SEO';
import SectionTitle from '../../components/UI/SectionTitle';
import ProjectCard from './components/ProjectCard';
import Button from '../../components/UI/Button';
import styles from './Projects.module.css';
import type { Project } from '../../types';
import { fadeIn, staggerContainer } from '../../utils/animations';

// Placeholder data - moved here for now
const allProjects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart functionality, user authentication, and payment processing integration.',
        image: 'https://via.placeholder.com/600x400/1e293b/6366f1?text=E-Commerce',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        category: 'Web',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: '2',
        title: 'Task Management App',
        description: 'Productivity tool for teams to organize tasks, set deadlines, and track progress with real-time updates.',
        image: 'https://via.placeholder.com/600x400/1e293b/06b6d4?text=Task+App',
        tags: ['TypeScript', 'Firebase', 'Tailwind', 'React'],
        category: 'Web',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: '3',
        title: 'Portfolio Design',
        description: 'Modern portfolio website template with smooth animations and responsive design for creative professionals.',
        image: 'https://via.placeholder.com/600x400/1e293b/ef4444?text=Portfolio',
        tags: ['React', 'Framer Motion', 'CSS Modules'],
        category: 'Design',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: '4',
        title: 'Fitness Tracker Mobile App',
        description: 'Mobile application to track workouts, monitor progress, and set fitness goals with social sharing features.',
        image: 'https://via.placeholder.com/600x400/1e293b/10b981?text=Fitness+App',
        tags: ['React Native', 'Redux', 'API Integration'],
        category: 'Mobile',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: '5',
        title: 'Financial Dashboard',
        description: 'Data visualization dashboard for financial analytics with interactive charts and real-time data updates.',
        image: 'https://via.placeholder.com/600x400/1e293b/f59e0b?text=Dashboard',
        tags: ['Vue.js', 'D3.js', 'Firebase'],
        category: 'Web',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: '6',
        title: 'Brand Identity Design',
        description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines.',
        image: 'https://via.placeholder.com/600x400/1e293b/ec4899?text=Branding',
        tags: ['Illustrator', 'Photoshop', 'Figma'],
        category: 'Design',
        demoUrl: '#',
        githubUrl: '#'
    }
];

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
            <SEO
                title="Projects"
                description="Showcase of my web development projects, featuring React, TypeScript, and modern UI/UX design."
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
