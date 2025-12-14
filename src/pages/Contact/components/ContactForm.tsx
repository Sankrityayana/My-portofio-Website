import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../../../components/UI/Button';
import styles from '../Contact.module.css';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        const SERVICE_ID = 'service_id_placeholder';
        const TEMPLATE_ID = 'template_id_placeholder';
        const PUBLIC_KEY = 'public_key_placeholder';

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setStatus('success');
                    if (form.current) form.current.reset();
                    setTimeout(() => setStatus('idle'), 5000);
                }, (error) => {
                    console.log(error.text);
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 5000);
                });
        }
    };

    return (
        <div className={styles.formContainer}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send me a message</h3>

            <form ref={form} onSubmit={sendEmail}>
                <div className={styles.inputGroup}>
                    <label htmlFor="user_name" className={styles.label}>Name</label>
                    <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        required
                        className={styles.input}
                        placeholder="Your Name"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="user_email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
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
                    {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed, Try Again' : 'Send Message'}
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
