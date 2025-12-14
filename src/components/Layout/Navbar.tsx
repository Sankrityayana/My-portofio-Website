import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import SearchModal from '../UI/SearchModal';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
                <div className={styles.container}>
                    <Link to="/" className={styles.logo} onClick={closeMenu}>
                        Portfolio
                    </Link>

                    <div className={styles.desktopMenu}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/experience"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                        >
                            Experience
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/resume"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                        >
                            Resume
                        </NavLink>
                        <button onClick={() => setIsSearchOpen(true)} className={styles.themeToggle} aria-label="Search">
                            <FaSearch />
                        </button>
                        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>
                    </div>

                    <div className={styles.mobileControls}>
                        <button onClick={() => setIsSearchOpen(true)} className={styles.themeToggleMobile} aria-label="Search">
                            <FaSearch />
                        </button>
                        <button onClick={toggleTheme} className={styles.themeToggleMobile} aria-label="Toggle Theme">
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>
                        <button className={styles.mobileToggle} onClick={toggleMenu}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
                        <NavLink to="/" onClick={closeMenu} className={styles.navLink}>Home</NavLink>
                        <NavLink to="/projects" onClick={closeMenu} className={styles.navLink}>Projects</NavLink>
                        <NavLink to="/services" onClick={closeMenu} className={styles.navLink}>Services</NavLink>
                        <NavLink to="/blog" onClick={closeMenu} className={styles.navLink}>Blog</NavLink>
                        <NavLink to="/experience" onClick={closeMenu} className={styles.navLink}>Experience</NavLink>
                        <NavLink to="/contact" onClick={closeMenu} className={styles.navLink}>Contact</NavLink>
                        <NavLink to="/resume" onClick={closeMenu} className={styles.navLink}>Resume</NavLink>
                    </div>
                </div>
            </nav>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Navbar;
