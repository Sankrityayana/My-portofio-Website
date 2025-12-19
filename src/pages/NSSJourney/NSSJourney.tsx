import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import SectionTitle from '../../components/UI/SectionTitle';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { FaHeart, FaCampground, FaHandsHelping, FaQuoteLeft } from 'react-icons/fa';

const nssStories = [
    {
        title: "The Beginning of Service",
        date: "2022",
        category: "NSS Journey",
        icon: <FaHandsHelping />,
        content: "Joining the National Service Scheme (NSS) was a turning point. It wasn't just about wearing the badge, but understanding the responsibility that came with it. I learned that true leadership serves the community first."
    },
    {
        title: "Village Adoption Camp",
        date: "2023",
        category: "Volunteering",
        icon: <FaCampground />,
        content: "We spent 7 days in a remote village, helping renovate the local school and organizing health awareness camps. Living with the villagers taught me simplicity, gratitude, and the power of collective effort."
    },
    {
        title: "Family: My Pillars",
        date: "Values",
        category: "Life & Family",
        icon: <FaHeart />,
        content: "Behind every achievement is the silent support of my family. They taught me that success isn't just about career growth, but about staying grounded and kind. Their resilience is my daily inspiration."
    },
    {
        title: "Life Lessons",
        date: "Ongoing",
        category: "Reflections",
        icon: <FaQuoteLeft />,
        content: "Life is a continuous journey of learning. Every failure has been a lesson, and every success a shared victory. I strive to carry the spirit of service (Seva) in every aspect of my life."
    }
];

const NSSJourney = () => {
    return (
        <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
            <SectionTitle
                title="NSS & Life Journey"
                subtitle="Service, Family, and the Values that define me"
            />
            <SEO
                title="NSS Journey & Life"
                description="My experiences with the National Service Scheme, volunteering, and the personal values shaped by my family and life."
            />

            <motion.div
                className="nss-journey-grid"
                variants={staggerContainer(0.2)}
                initial="hidden"
                animate="show"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                {nssStories.map((story, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn('up', 0.1 * index)}
                        style={{
                            background: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--border-color)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            background: 'linear-gradient(to bottom, var(--primary-500), var(--secondary-500))'
                        }} />
                        
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start'
                        }}>
                             <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: 'rgba(99, 102, 241, 0.1)', // Light indigo background
                                color: 'var(--primary-500)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem'
                            }}>
                                {story.icon}
                            </div>
                            <span style={{
                                fontSize: '0.85rem',
                                color: 'var(--text-secondary)',
                                fontWeight: '500',
                                background: 'var(--bg-body)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '99px',
                                border: '1px solid var(--border-color)'
                            }}>
                                {story.date}
                            </span>
                        </div>

                        <div>
                            <span style={{
                                display: 'block',
                                color: 'var(--primary-500)',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                marginBottom: '0.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {story.category}
                            </span>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{story.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
                                {story.content}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default NSSJourney;
