import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3>Portfolio</h3>
                        <p className={styles.description}>
                            Building amazing digital experiences with modern technologies and creative solutions.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <FaTwitter />
                            </a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <FaDribbble />
                            </a>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>Quick Links</h3>
                        <ul className={styles.links}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/experience">Experience</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Contact Info</h3>
                        <ul className={styles.links}>
                            <li>
                                <span style={{ marginRight: '10px' }}><FaEnvelope /></span>
                                your.email@example.com
                            </li>
                            <li>
                                <span style={{ marginRight: '10px' }}><FaPhone /></span>
                                +1 (555) 123-4567
                            </li>
                            <li>
                                <span style={{ marginRight: '10px' }}><FaMapMarkerAlt /></span>
                                San Francisco, CA
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
