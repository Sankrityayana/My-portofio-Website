import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import Card from './Card';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "TechFlow",
        text: "An exceptional developer who delivered our project ahead of schedule. The attention to detail and code quality was outstanding.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "CTO",
        company: "StartUp Inc",
        text: "Brilliant problem solver. They transformed our legacy codebase into a modern, performant application.",
        rating: 5
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Marketing Director",
        company: "Creative Agency",
        text: "Great communication skills and technical expertise. A true partner in our digital transformation journey.",
        rating: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ margin: '6rem 0' }}>
            <SectionTitle
                title="Testimonials"
                subtitle="What clients and colleagues say"
            />

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card hoverable glass style={{ padding: '3rem', textAlign: 'center' }}>
                            <FaQuoteLeft style={{ fontSize: '2rem', color: 'var(--primary-500)', marginBottom: '1.5rem' }} />

                            <p style={{
                                fontSize: '1.25rem',
                                fontStyle: 'italic',
                                marginBottom: '2rem',
                                lineHeight: '1.6'
                            }}>
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1rem', color: '#fbbf24' }}>
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{testimonials[currentIndex].name}</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                </AnimatePresence>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                    <button
                        onClick={prevTestimonial}
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            color: 'var(--text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <FaChevronLeft />
                    </button>

                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                    backgroundColor: currentIndex === idx ? 'var(--primary-500)' : 'var(--text-muted)',
                                    transition: 'background-color 0.3s'
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextTestimonial}
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            color: 'var(--text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
