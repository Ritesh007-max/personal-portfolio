import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECEIVER_EMAIL = 'riteshworking247@gmail.com';

const Contact = () => {
    const formRef = useRef(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            setStatus({
                type: 'error',
                message: 'Email service is not configured yet. Add your EmailJS keys to the Vite environment variables.'
            });
            return;
        }

        setIsSending(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: EMAILJS_PUBLIC_KEY
                }
            );

            formRef.current.reset();
            setStatus({
                type: 'success',
                message: 'Message sent successfully. You should receive it at riteshworking247@gmail.com.'
            });
        } catch {
            setStatus({
                type: 'error',
                message: 'Message could not be sent. Check your EmailJS template configuration and try again.'
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="section container contact-section">
            <h2 className="section-title">Connect With Me</h2>
            <div className="contact-wrapper">
                <form ref={formRef} className="contact-form glass" onSubmit={handleSubmit}>
                    <input type="hidden" name="to_email" value={RECEIVER_EMAIL} />
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        required
                        className="form-input"
                        minLength="2"
                    />
                    <input
                        type="email"
                        name="reply_to"
                        placeholder="Your Email"
                        required
                        className="form-input"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="form-textarea"
                        rows="5"
                        minLength="10"
                    ></textarea>
                    <button type="submit" className="glow-btn submit-btn" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                    {status.message ? (
                        <p className={`form-status ${status.type === 'success' ? 'success' : 'error'}`}>
                            {status.message}
                        </p>
                    ) : null}
                </form>
                <div className="contact-illustration">
                    <img
                        src="https://ritesh-portfoliov04.netlify.app/undraw_personal-text_090t.svg"
                        alt="Contact Illustration"
                        className="illustration-img shadow-neon"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
