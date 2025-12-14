import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import SectionTitle from '../../components/UI/SectionTitle';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    credentialUrl: string;
    image: string;
}

const certificates: Certificate[] = [
    {
        id: '1',
        title: 'Meta Front-End Developer Professional Certificate',
        issuer: 'Meta',
        date: '2024',
        description: 'Advanced proficiency in React, JavaScript, and modern UI/UX design principles.',
        credentialUrl: '#',
        image: 'https://via.placeholder.com/600x400/1e293b/6366f1?text=Meta+Certificate'
    },
    {
        id: '2',
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: '2023',
        description: 'Foundational understanding of AWS Cloud concepts, security, and technology.',
        credentialUrl: '#',
        image: 'https://via.placeholder.com/600x400/1e293b/f59e0b?text=AWS+CCP'
    },
    {
        id: '3',
        title: 'Full Stack Web Development',
        issuer: 'Udemy',
        date: '2023',
        description: 'Comprehensive bootcamp covering Node.js, Express, MongoDB, and React.',
        credentialUrl: '#',
        image: 'https://via.placeholder.com/600x400/1e293b/10b981?text=Full+Stack'
    }
];

const Certificates = () => {
    return (
        <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
            <SectionTitle
                title="Certifications"
                subtitle="Professional credentials and achievements"
            />
            <SEO
                title="Certificates"
                description="Professional certifications and awards earned by Suraj Laxman Shanbhag."
            />

            <motion.div
                variants={staggerContainer(0.2)}
                initial="hidden"
                animate="show"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}
            >
                {certificates.map((cert) => (
                    <motion.div key={cert.id} variants={fadeIn('up', 0)}>
                        <Card hoverable glass style={{ height: '100%', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <div
                                style={{
                                    height: '200px',
                                    backgroundImage: `url(${cert.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    position: 'relative'
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'rgba(0,0,0,0.7)',
                                    color: 'white',
                                    padding: '0.5rem',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <FaAward size={20} color="#fbbf24" />
                                </div>
                            </div>
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    <span>{cert.issuer}</span>
                                    <span>{cert.date}</span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 'bold', lineHeight: 1.3 }}>{cert.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, fontSize: '0.95rem' }}>{cert.description}</p>
                                <Button
                                    variant="secondary"
                                    size="small"
                                    fullWidth
                                    href={cert.credentialUrl}
                                    target="_blank"
                                >
                                    <FaExternalLinkAlt style={{ marginRight: '0.5rem', fontSize: '0.8rem' }} />
                                    View Credential
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Certificates;
