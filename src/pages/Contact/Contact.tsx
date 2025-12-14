import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import SectionTitle from '../../components/UI/SectionTitle';
import ContactForm from './components/ContactForm';
import styles from './Contact.module.css';
import { fadeIn } from '../../utils/animations';

const Contact = () => {
    return (
        <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
            <SectionTitle
                title="Get In Touch"
                subtitle="Have a project in mind? Let's talk!"
            />
            <SEO
                title="Contact"
                description="Contact Suraj Laxman Shanbhag for web development projects, freelance opportunities, or collaboration."
            />

            <div className={styles.grid}>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    animate="show"
                >
                    <div className={styles.infoCard}>
                        <div className={styles.iconWrapper}>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Email</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>hello@example.com</p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.iconWrapper}>
                            <FaPhone />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Phone</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.iconWrapper}>
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Location</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>San Francisco, CA</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Connect Socially</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            Follow me on my social media channels for updates and tech content.
                        </p>
                        {/* Social links are in Footer, can be duplicated here or referenced */}
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial="hidden"
                    animate="show"
                >
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
