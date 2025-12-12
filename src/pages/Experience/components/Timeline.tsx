import { motion } from 'framer-motion';

import styles from '../Experience.module.css';
import type { Experience } from '../../../types';
import { fadeIn, staggerContainer } from '../../../utils/animations';

const experiences: Experience[] = [
    {
        id: '1',
        role: 'Senior Frontend Developer',
        company: 'Tech Innovations Inc.',
        period: '2022 - Present',
        type: 'Work',
        description: [
            'Led the frontend team in rebuilding the legacy application using React and TypeScript.',
            'Improved site performance by 40% through code splitting and optimization techniques.',
            'Mentored junior developers and established code quality standards.'
        ]
    },
    {
        id: '2',
        role: 'Full Stack Developer',
        company: 'Creative Solutions Agency',
        period: '2020 - 2022',
        type: 'Work',
        description: [
            'Developed custom e-commerce solutions for various clients using MERN stack.',
            'Integrated payment gateways and third-party APIs.',
            'Collaborated of designers and managers to deliver projects on time.'
        ]
    },
    {
        id: '3',
        role: 'Computer Science Degree',
        company: 'University of Technology',
        period: '2016 - 2020',
        type: 'Education',
        description: [
            'Specialized in Software Engineering and Artificial Intelligence.',
            'Graduated with Honors.',
            'Built a campus navigation app as a final year project.'
        ]
    }
];

const Timeline = () => {
    return (
        <div className={styles.timelineContainer}>
            <motion.div
                variants={staggerContainer(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
            >
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}
                        variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0)}
                    >
                        <div className={styles.dot}></div>
                        <div className={styles.content}>
                            <span className={styles.date}>{exp.period}</span>
                            <h3 className={styles.role}>{exp.role}</h3>
                            <h4 className={styles.company}>{exp.company}</h4>
                            <ul className={styles.description}>
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Timeline;
