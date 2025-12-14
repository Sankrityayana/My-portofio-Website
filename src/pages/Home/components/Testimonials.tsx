import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionTitle from '../../../components/UI/SectionTitle';
import Card from '../../../components/UI/Card';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CEO at TechStart',
        text: 'Working with this developer was an absolute pleasure. They delivered high-quality code on time and communicated effectively throughout the entire process.',
        avatar: 'https://via.placeholder.com/100?text=SJ'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Product Manager',
        text: 'Exceptional problem-solving skills and attention to detail. The web application they built for us exceeded our expectations in performance and design.',
        avatar: 'https://via.placeholder.com/100?text=MC'
    },
    {
        id: 3,
        name: 'Emily Davis',
        role: 'Creative Director',
        text: 'A true professional who understands both design and development. They were able to bring our complex vision to life with smooth animations and responsive layouts.',
        avatar: 'https://via.placeholder.com/100?text=ED'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(nextTestimonial, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="container" style={{ padding: '4rem 1.5rem 8rem' }}>
            <SectionTitle
                title="Client Testimonials"
                subtitle="What people say about working with me"
            />

            <div className={styles.carouselContainer}>
                <button
                    onClick={prevTestimonial}
                    className={styles.navButton}
                    aria-label="Previous testimonial"
                >
                    <FaChevronLeft />
                </button>

                <div className={styles.carouselContent}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%' }}
                        >
                            <Card glass className={styles.testimonialCard}>
                                <FaQuoteLeft className={styles.quoteIcon} />
                                <p className={styles.text}>{testimonials[currentIndex].text}</p>
                                <div className={styles.author}>
                                    <img
                                        src={testimonials[currentIndex].avatar}
                                        alt={testimonials[currentIndex].name}
                                        className={styles.avatar}
                                    />
                                    <div>
                                        <h4 className={styles.name}>{testimonials[currentIndex].name}</h4>
                                        <p className={styles.role}>{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={nextTestimonial}
                    className={styles.navButton}
                    aria-label="Next testimonial"
                >
                    <FaChevronRight />
                </button>
            </div>

            <div className={styles.dots}>
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
