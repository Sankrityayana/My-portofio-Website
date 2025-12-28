import { motion } from 'framer-motion';

import styles from '../Experience.module.css';
import type { Experience } from '../../../types';
import { fadeIn, staggerContainer } from '../../../utils/animations';

const experiences: Experience[] = [
    {
        id: '1',
        role: 'NSS Unit Leader',
        company: 'Presidency University',
        period: 'Present',
        type: 'Work',
        description: [
            'Coordinated campus-wide initiatives, leading cross-functional student teams for social projects.',
            'Enhanced collaboration, adaptability, and communication while managing outreach programs.',
            'Recognized for ownership, teamwork, and leadership skills in diverse environments.'
        ]
    },
    {
        id: '2',
        role: 'B.Tech in Computer Science and Technology',
        company: 'Presidency University, Bangalore',
        period: '2022 - Present',
        type: 'Education',
        description: [
            'CGPA: 7.55',
            'Strong foundations in programming, data structures, and problem-solving.',
            'Hands-on experience in AI, machine learning, and full-stack development.',
            'Developed key projects: Chat-with-PDF, Sentiment Analysis Tool, and AI-based Chatbot.'
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
