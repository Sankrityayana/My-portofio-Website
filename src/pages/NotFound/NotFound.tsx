import { motion } from 'framer-motion';
import Button from '../../components/UI/Button';
import { textVariant, fadeIn } from '../../utils/animations';

const NotFound = () => {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '1.5rem'
        }}>
            <motion.h1
                variants={textVariant(0.1)}
                initial="hidden"
                animate="show"
                style={{
                    fontSize: 'clamp(6rem, 20vw, 10rem)',
                    color: 'var(--primary-500)',
                    lineHeight: 1,
                    marginBottom: '1rem',
                    textShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
                }}
            >
                404
            </motion.h1>

            <motion.h2
                variants={textVariant(0.3)}
                initial="hidden"
                animate="show"
                style={{
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)'
                }}
            >
                Page Not Found
            </motion.h2>

            <motion.p
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                animate="show"
                style={{
                    color: 'var(--text-secondary)',
                    maxWidth: '500px',
                    marginBottom: '2.5rem',
                    fontSize: '1.1rem'
                }}
            >
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </motion.p>

            <motion.div
                variants={fadeIn('up', 0.7)}
                initial="hidden"
                animate="show"
            >
                <Button to="/" variant="primary" size="large">
                    Back to Home
                </Button>
            </motion.div>
        </div>
    );
};

export default NotFound;
