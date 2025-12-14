import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import SectionTitle from '../../components/UI/SectionTitle';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { FaFlag, FaUsers, FaTrophy, FaCalendarAlt } from 'react-icons/fa';

const journeyEvents = [
    {
        year: '2024',
        title: 'Hackathon Winner',
        description: 'Won 1st place in the National Tech Innovation Hackathon for building an AI-powered accessibility tool.',
        type: 'Hackathon',
        icon: <FaTrophy />
    },
    {
        year: '2023',
        title: 'NSS Team Lead',
        description: 'Led a team of 50+ volunteers for social service camps and community development projects.',
        type: 'Volunteering',
        icon: <FaUsers />
    },
    {
        year: '2023',
        title: 'Tech Conference Speaker',
        description: 'Delivered a talk on "Modern Web Architecture" at the regional developer summit.',
        type: 'Event',
        icon: <FaFlag />
    },
    {
        year: '2022',
        title: 'Open Source Contributor',
        description: 'Started active contributions to major react ecosystem libraries.',
        type: 'Milestone',
        icon: <FaCalendarAlt />
    }
];

const Journey = () => {
    return (
        <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
            <SectionTitle
                title="My Journey"
                subtitle="Hackathons, Events & Volunteering"
            />
            <SEO
                title="Journey"
                description="My journey through hackathons, tech events, and community service (NSS)."
            />

            <motion.div
                className="journey-timeline"
                variants={staggerContainer(0.2)}
                initial="hidden"
                animate="show"
                style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}
            >
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'var(--border-color)',
                    zIndex: 0
                }} />

                {journeyEvents.map((event, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn('left', 0)}
                        style={{
                            display: 'flex',
                            gap: '2rem',
                            marginBottom: '3rem',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        {/* Icon/Dot */}
                        <div style={{
                            minWidth: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'var(--bg-card)',
                            border: '2px solid var(--primary-500)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary-500)',
                            fontSize: '1.2rem'
                        }}>
                            {event.icon}
                        </div>

                        {/* Content */}
                        <div style={{
                            background: 'var(--bg-card)',
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--border-color)',
                            flex: 1
                        }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '0.25rem 0.75rem',
                                background: 'rgba(99, 102, 241, 0.1)',
                                color: 'var(--primary-500)',
                                borderRadius: '99px',
                                fontSize: '0.85rem',
                                marginBottom: '0.5rem',
                                fontWeight: '600'
                            }}>
                                {event.year} • {event.type}
                            </span>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{event.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{event.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Journey;
