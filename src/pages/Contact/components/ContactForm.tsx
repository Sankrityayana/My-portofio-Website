import { useState, type FormEvent } from 'react';
import Button from '../../../components/UI/Button';
import styles from '../Contact.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div className={styles.formContainer}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send me a message</h3>

            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="Your Name"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="your.email@example.com"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="subject" className={styles.label}>Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="Project Inquiry"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={styles.textarea}
                        placeholder="Tell me about your project..."
                    />
                </div>

                <Button
                    type="submit"
                    fullWidth
                    disabled={status === 'submitting' || status === 'success'}
                >
                    {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
