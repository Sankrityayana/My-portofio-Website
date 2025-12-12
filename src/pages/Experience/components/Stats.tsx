import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/animations';

const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Awards Won', value: '12' }
];

const Stats = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            margin: '4rem 0',
            textAlign: 'center'
        }}>
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    variants={fadeIn('up', index * 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{
                        padding: '2rem',
                        background: 'var(--bg-card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-color)'
                    }}
                >
                    <h3 className="text-gradient" style={{ fontSize: '3rem', fontWeight: '800', lineHeight: 1 }}>{stat.value}</h3>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '1.1rem' }}>{stat.label}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default Stats;
