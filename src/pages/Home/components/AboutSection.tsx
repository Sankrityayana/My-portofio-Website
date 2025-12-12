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
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, var(--primary-600), var(--accent-600))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '2rem',
                            fontWeight: 'bold'
                        }}>
                            Profile Img
                        </div>
                        {/* Replace with actual image: <img src="/images/profile.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                    </Card>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        Passionate about creating modern web solutions
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                        I am a dedicated developer with a strong passion for building web applications that are not only functional but also visually appealing and user-friendly. With years of experience in full-stack development, I enjoy solving complex problems and turning ideas into reality.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div>
                            <h4 className="text-gradient" style={{ fontSize: '2rem', fontWeight: '800' }}>3+</h4>
                            <p style={{ color: 'var(--text-muted)' }}>Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-gradient" style={{ fontSize: '2rem', fontWeight: '800' }}>50+</h4>
                            <p style={{ color: 'var(--text-muted)' }}>Projects Completed</p>
                        </div>
                        <div>
                            <h4 className="text-gradient" style={{ fontSize: '2rem', fontWeight: '800' }}>20+</h4>
                            <p style={{ color: 'var(--text-muted)' }}>Happy Clients</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <Button variant="accent" href="/resume.pdf">
                            Download Resume
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
