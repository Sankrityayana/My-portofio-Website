import { motion } from 'framer-motion';
import Button from '../../../components/UI/Button';
import SectionTitle from '../../../components/UI/SectionTitle';
import Card from '../../../components/UI/Card';
import { fadeIn } from '../../../utils/animations';

const AboutSection = () => {
    return (
        <section className="container" style={{ padding: '4rem 1.5rem' }}>
            <SectionTitle
                title="About Me"
                subtitle="Get to know me better"
            />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <Card glass hoverable style={{ padding: '0', overflow: 'hidden', aspectRatio: '1/1', maxWidth: '400px', margin: '0 auto' }}>
                        <img src="/images/profile.jpg" alt="Suraj Laxman Shanbhag" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        {/* If you don't have a profile photo yet, the placeholder will show */}
                    </Card>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        Aspiring Software Engineer with a passion for innovation
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                        I am an aspiring software engineer with strong foundations in programming, data structures, and problem-solving. Skilled in Java, Python, SQL, and web technologies with hands-on experience in AI, machine learning, and full-stack development.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        I have a proven ability to develop, collaborate, and deliver scalable, business-oriented solutions. Recognized for teaching, leadership, adaptability, and initiative through academic and extracurricular roles.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div>
                            <h4 className="text-gradient" style={{ fontSize: '2rem', fontWeight: '800' }}>Final Year</h4>
                            <p style={{ color: 'var(--text-muted)' }}>B.Tech Student</p>
                        </div>
                        <div>
                            <h4 className="text-gradient" style={{ fontSize: '2rem', fontWeight: '800' }}>3+</h4>
                            <p style={{ color: 'var(--text-muted)' }}>Key Projects</p>
                        </div>
                        <div>
                            <h4 className="text-gradient" style={{ fontSize: '2rem', fontWeight: '800' }}>NSS</h4>
                            <p style={{ color: 'var(--text-muted)' }}>Unit Leader</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <Button variant="accent" href="/resume.pdf" target="_blank" download>
                            Download Resume
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
