import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt,
    FaDocker, FaAws, FaFigma
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiTailwindcss, SiGraphql } from 'react-icons/si';
import styles from './TechMarquee.module.css';

const technologies = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'var(--text-primary)' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
];

const TechMarquee = () => {
    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.fadeLeft} />
            <div className={styles.fadeRight} />

            <motion.div
                className={styles.track}
                animate={{ x: [0, -1035] }} // Approximate width of one set of icons
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
            >
                {/* Render typically enough copies to fill screen width + scroll buffer */}
                {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                    <div key={`${tech.name}-${index}`} className={styles.techItem}>
                        <tech.icon className={styles.icon} style={{ color: tech.color }} />
                        <span className={styles.name}>{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechMarquee;
