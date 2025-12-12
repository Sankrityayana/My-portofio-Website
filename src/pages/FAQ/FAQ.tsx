import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../../components/UI/SectionTitle';
import Card from '../../components/UI/Card';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../../utils/animations';

const faqs = [
    {
        question: "Do you take on freelance projects?",
        answer: "Yes, I am currently available for freelance work. I generally take on 1-2 concurrent projects to ensure high quality and attention to detail."
    },
    {
        question: "What is your hourly rate?",
        answer: "My rates vary depending on the project scope, complexity, and timeline. I offer both hourly and fixed-price project quotes. Please contact me for a custom estimate."
    },
    {
        question: "What technologies do you use?",
        answer: "I specialize in the React ecosystem (React, Next.js, React Native) and use TypeScript for robustness. For styling, I prefer CSS Modules, Tailwind CSS, or Styled Components. Backend work is typically done with Node.js or serverless solutions."
    },
    {
        question: "Do you provide design services?",
        answer: "Yes! I can handle the entire product lifecycle from UI/UX design in Figma to full-stack implementation. I believe in designing with development in mind."
    },
    {
        question: "What is your typical turnaround time?",
        answer: "Small websites typically take 2-3 weeks, while more complex web applications can take 2-3 months. I will provide a detailed timeline during our initial consultation."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
            <SectionTitle
                title="Frequently Asked Questions"
                subtitle="Common questions about working with me"
            />

            <motion.div
                variants={staggerContainer(0.1)}
                initial="hidden"
                animate="show"
                style={{ maxWidth: '800px', margin: '0 auto' }}
            >
                {faqs.map((faq, index) => (
                    <motion.div key={index} variants={fadeIn('up', 0)} style={{ marginBottom: '1rem' }}>
                        <Card
                            glass
                            style={{
                                padding: 0,
                                cursor: 'pointer',
                                overflow: 'hidden'
                            }}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div style={{
                                padding: '1.5rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: activeIndex === index ? 'rgba(255,255,255,0.05)' : 'transparent'
                            }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>{faq.question}</h3>
                                <span style={{ color: 'var(--primary-500)' }}>
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </div>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default FAQ;
