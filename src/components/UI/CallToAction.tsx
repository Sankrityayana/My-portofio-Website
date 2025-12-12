import { motion } from 'framer-motion';
import Button from './Button';
import { fadeIn } from '../../utils/animations';

const CallToAction = () => {
    return (
        <section style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
            <motion.div
                variants={fadeIn('up', 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{
                    background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--accent-600) 100%)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '4rem 2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                {/* Background decorative elements */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-20%',
                    width: '500px',
                    height: '500px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-50%',
                    right: '-10%',
                    width: '400px',
                    height: '400px',
                    background: 'rgba(0,0,0,0.2)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        color: '#fff'
                    }}>
                        Ready to start your next project?
                    </h2>
                    <p style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '1.25rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem'
                    }}>
                        Let's collaborate to build something amazing together. I'm currently open for new opportunities.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Button to="/contact" variant="primary" size="large" style={{ backgroundColor: '#fff', color: 'var(--primary-600)' }}>
                            Get In Touch
                        </Button>
                        <Button to="/projects" variant="secondary" size="large" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff', background: 'transparent' }}>
                            View Portfolio
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CallToAction;
