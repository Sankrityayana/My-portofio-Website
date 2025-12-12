import { motion } from 'framer-motion';
import Button from '../../../components/UI/Button';
import SectionTitle from '../../../components/UI/SectionTitle';
import ProjectCard from '../../Projects/components/ProjectCard'; // Cross-import
import { fadeIn, staggerContainer } from '../../../utils/animations';
import type { Project } from '../../../types';

// Placeholder data - ideally moved to src/data/projects.ts
const featuredProjects: Project[] = [
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
    }
];

const FeaturedProjects = () => {
    return (
        <section className="container" style={{ padding: '4rem 1.5rem' }}>
            <SectionTitle
                title="Featured Projects"
                subtitle="Some of my recent work"
            />

            <motion.div
                variants={staggerContainer(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}
            >
                {featuredProjects.map(project => (
                    <motion.div key={project.id} variants={fadeIn('up', 0)}>
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </motion.div>

            <div style={{ textAlign: 'center' }}>
                <Button to="/projects" variant="secondary" size="large">
                    View All Projects
                </Button>
            </div>
        </section>
    );
};

export default FeaturedProjects;
