import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import SectionTitle from '../../components/UI/SectionTitle';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import { fadeIn } from '../../utils/animations';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const Resume = () => {
    return (
        <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
            <SectionTitle
                title="Resume"
                subtitle="My professional qualification"
            />
            <SEO
                title="Resume"
                description="Professional resume of Suraj Laxman Shanbhag - Experience, Education, and Skills."
            />

            <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                style={{ maxWidth: '800px', margin: '0 auto' }}
            >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                    <Button
                        to="/resume.pdf"
                        variant="primary"
                        size="large"
                        // In a real app, this would be an actual link or download handler
                        onClick={(e) => {
                            e.preventDefault();
                            alert('Resume download would start here!');
                        }}
                    >
                        <FaDownload style={{ marginRight: '0.5rem' }} />
                        Download PDF Resume
                    </Button>
                </div>

                <Card glass style={{ padding: '3rem' }}>
                    <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Suraj Laxman Shanbhag</h2>
                        <p style={{ color: 'var(--primary-500)', fontSize: '1.25rem', fontWeight: '500' }}>Aspiring Software Engineer</p>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: '1.6' }}>
                            Aspiring Software Engineer with strong foundations in programming, data structures, and problem-solving. Skilled in Java, Python, SQL, and web technologies with hands-on experience in AI, machine learning, and full-stack development. Proven ability to develop, collaborate, and deliver scalable, business-oriented solutions.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                            <FaBriefcase style={{ color: 'var(--accent-500)' }} /> Leadership
                        </h3>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>NSS Unit Leader</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Presidency University | Present</p>
                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                <li>Coordinated campus-wide initiatives, leading cross-functional student teams for social projects.</li>
                                <li>Enhanced collaboration, adaptability, and communication while managing outreach programs.</li>
                                <li>Recognized for ownership, teamwork, and leadership skills in diverse environments.</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                            <FaGraduationCap style={{ color: 'var(--accent-500)' }} /> Education
                        </h3>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>B.Tech in Computer Science and Technology</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Presidency University, Bangalore | 2022 – Present</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>CGPA: 7.55</p>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                            <FaCode style={{ color: 'var(--accent-500)' }} /> Key Skills
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'PHP', 'React', 'MySQL', 'SQL', 'NumPy', 'Pandas', 'Scikit-learn', 'Git', 'GitHub', 'VS Code'].map(skill => (
                                <span key={skill} style={{
                                    background: 'var(--bg-body)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '4px',
                                    fontSize: '0.9rem',
                                    border: '1px solid var(--border-color)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
};

export default Resume;
