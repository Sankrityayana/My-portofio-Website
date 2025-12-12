import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { FaLightbulb, FaPencilRuler, FaCode, FaRocket } from 'react-icons/fa';

const steps = [
    {
        icon: <FaLightbulb />,
        title: 'Discovery',
        description: 'I start by understanding your goals, target audience, and project requirements to create a solid foundation.'
    },
    {
        icon: <FaPencilRuler />,
        title: 'Design',
        description: 'Creating intuitive and beautiful interface designs (UI/UX) that align with your brand identity.'
    },
    {
        icon: <FaCode />,
        title: 'Development',
        description: 'Writing clean, efficient, and scalable code to bring the designs to life using modern technologies.'
    },
    {
        icon: <FaRocket />,
        title: 'Launch',
        description: 'Testing, optimizing, and deploying your project to production, ensuring a smooth launch.'
    }
];

const Process = () => {
    return (
        <div style={{ margin: '6rem 0' }}>
            <motion.div
                variants={staggerContainer(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    position: 'relative'
                }}
            >
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn('up', 0)}
                        style={{
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'var(--bg-card)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            fontSize: '2rem',
                            color: 'var(--primary-500)',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                        }}>
                            {step.icon}
                        </div>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{step.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.description}</p>

                        {/* Connector Line (except for last item) */}
                        {index < steps.length - 1 && (
                            <div
                                className="connector"
                                style={{
                                    position: 'absolute',
                                    top: '40px',
                                    left: '50%',
                                    width: '100%',
                                    height: '2px',
                                    background: 'var(--border-color)',
                                    zIndex: -1,
                                    display: 'none' // Hide by default, show via media query manually if needed, or keeping simple grid
                                }}
                            />
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* 
        Note: True horizontal connectors in responsive grids are tricky without media queries. 
        For now, the simple grid layout works best for responsiveness. 
      */}
        </div>
    );
};

export default Process;
