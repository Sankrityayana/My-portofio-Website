import { motion } from 'framer-motion';
import Button from './Button';
import Card from './Card';
import { FaCheck } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../../utils/animations';

const plans = [
    {
        title: 'Basic',
        price: '$999',
        description: 'Perfect for landing pages and simple portfolios.',
        features: [
            'Responsive Design',
            '3 Pages',
            'Contact Form',
            'SEO Basics',
            '1 Month Support'
        ],
        recommended: false
    },
    {
        title: 'Professional',
        price: '$2,499',
        description: 'Ideal for small businesses and growing startups.',
        features: [
            'Everything in Basic',
            'Up to 10 Pages',
            'CMS Integration',
            'Advanced SEO',
            'Performance Optimization',
            '3 Months Support'
        ],
        recommended: true
    },
    {
        title: 'Enterprise',
        price: 'Custom',
        description: 'Full-scale applications and complex solutions.',
        features: [
            'Custom Design System',
            'Unlimited Pages',
            'E-commerce / Database',
            'User Authentication',
            'Analytics Setup',
            '6 Months Support'
        ],
        recommended: false
    }
];

const Pricing = () => {
    return (
        <div style={{ margin: '6rem 0' }}>
            <motion.div
                variants={staggerContainer(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                {plans.map((plan, index) => (
                    <motion.div key={index} variants={fadeIn('up', 0)}>
                        <Card
                            glass
                            hoverable
                            style={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                border: plan.recommended ? '1px solid var(--primary-500)' : '1px solid var(--border-color)',
                                transform: plan.recommended ? 'scale(1.05)' : 'none',
                                zIndex: plan.recommended ? 2 : 1
                            }}
                        >
                            {plan.recommended && (
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'var(--primary-500)',
                                    color: '#fff',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold'
                                }}>
                                    Recommended
                                </div>
                            )}

                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{plan.title}</h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-500)', marginBottom: '0.5rem' }}>
                                    {plan.price}
                                </div>
                                <p style={{ color: 'var(--text-secondary)' }}>{plan.description}</p>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', flex: 1 }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                        <FaCheck style={{ color: 'var(--accent-500)', fontSize: '0.875rem' }} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button to="/contact" variant={plan.recommended ? 'primary' : 'secondary'} fullWidth>
                                Choose Plan
                            </Button>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Pricing;
