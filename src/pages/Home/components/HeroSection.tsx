import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import Button from '../../../components/UI/Button';
import { textVariant, fadeIn } from '../../../utils/animations';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.heroContainer}>
            {/* Animated Background Shapes */}
            <div className={`${styles.shape} ${styles.shape1}`} />
            <div className={`${styles.shape} ${styles.shape2}`} />
            <div className={`${styles.shape} ${styles.shape3}`} />

            <div className={styles.heroContent}>
                <motion.div
                    variants={textVariant(0.3)}
                    initial="hidden"
                    animate="show"
                >
                    <span className={styles.greeting}>
                        Hello there, I'm
                    </span>
                </motion.div>

                <motion.h1
                    variants={textVariant(0.4)}
                    initial="hidden"
                    animate="show"
                    className={styles.title}
                >
                    Suraj Laxman <span className={styles.highlight}>Shanbhag</span>
                </motion.h1>

                <motion.h2
                    variants={textVariant(0.5)}
                    initial="hidden"
                    animate="show"
                    className={styles.subtitle}
                >
                    Aspiring Software Engineer
                </motion.h2>

                <motion.p
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    animate="show"
                    className={styles.description}
                >
                    Strong foundations in programming, data structures, and problem-solving with expertise in Java, Python, and web technologies. 
                    Hands-on experience in AI, machine learning, and full-stack development.
                </motion.p>

                <motion.div
                    variants={fadeIn('up', 0.8)}
                    initial="hidden"
                    animate="show"
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <Button to="/projects" variant="primary" size="large">
                        View My Work
                    </Button>
                    <Button to="/contact" variant="secondary" size="large">
                        Contact Me
                    </Button>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollDown}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span>Scroll Down</span>
                <FaArrowDown />
            </motion.div>
        </section>
    );
};

export default HeroSection;
