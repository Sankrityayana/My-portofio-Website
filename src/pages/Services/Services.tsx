import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import SectionTitle from '../../components/UI/SectionTitle';
import Card from '../../components/UI/Card';
import { fadeIn, staggerContainer } from '../../utils/animations';
import Process from '../../components/UI/Process';
import Pricing from '../../components/UI/Pricing';
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaSearch, FaRocket } from 'react-icons/fa';

const services = [
    {
        title: 'Web Development',
        description: 'Building fast, responsive, and SEO-friendly websites using modern frameworks like React and Next.js.',
        icon: <FaCode />
    },
    {
        title: 'Mobile Apps',
        description: 'Creating cross-platform mobile applications for iOS and Android using React Native.',
        icon: <FaMobileAlt />
    },
    {
        title: 'UI/UX Design',
        description: 'Designing intuitive and beautiful user interfaces that provide exceptional user experiences.',
        icon: <FaPaintBrush />
    },
    {
        title: 'Backend Development',
        description: 'Developing robust server-side applications, APIs, and database architectures.',
        icon: <FaServer />
    },
    {
        title: 'SEO Optimization',
        description: 'Optimizing websites to rank higher in search engines and drive organic traffic.',
        icon: <FaSearch />
    },
    {
        title: 'Performance Optimization',
        description: 'Enhancing website speed and performance for better user retention and conversion.',
        icon: <FaRocket />
    }
];

const Services = () => {
    return (
        <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
            <SectionTitle
                title="My Services"
                subtitle="What I can do for you"
            />
            <SEO
                title="Services"
                description="Web development services including React apps, UI/UX design, SEO optimization, and mobile development."
            />

            <motion.div
                variants={staggerContainer(0.1)}
                initial="hidden"
                animate="show"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}
            >
                {services.map((service, index) => (
                    <motion.div key={index} variants={fadeIn('up', 0)}>
                        <Card hoverable glass style={{ height: '100%', textAlign: 'center', padding: '2.5rem' }}>
                            <div style={{
                                fontSize: '3rem',
                                color: 'var(--primary-500)',
                                marginBottom: '1.5rem',
                                display: 'inline-block'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{service.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            <div style={{ marginTop: '8rem' }}>
                <SectionTitle
                    title="My Work Process"
                    subtitle="How I bring ideas to life"
                />
                <Process />
            </div>

            <div style={{ marginTop: '8rem' }}>
                <SectionTitle
                    title="Pricing Plans"
                    subtitle="Flexible options for your needs"
                />
                <Pricing />
            </div>
        </div>
    );
};

export default Services;
