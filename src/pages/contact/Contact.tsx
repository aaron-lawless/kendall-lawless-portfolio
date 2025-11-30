import { useState, type FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '../shared/components/navigation/Navigation';
import './Contact.scss';

export const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => {
                setStatus('idle');
                setErrorMessage('');
            }, 5000); // Hide after 5 seconds

            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            // Replace these with your actual EmailJS credentials
            const serviceId = 'YOUR_SERVICE_ID';
            const templateId = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            await emailjs.send(
                serviceId,
                templateId,
                {
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'your-email@example.com',
                },
                publicKey
            );

            setStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="contact-page">
            <Navigation />
            <div className="contact-container">
                <div className="contact-header">
                    <h1>
                        Have goals?<br />
                        Let's go after them.
                    </h1>
                </div>

                <div className="contact-content">
                    <div className="inquiries-section">
                        <h2>INQUIRIES</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <input
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Tell Us About Your Inquiry"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={8}
                            />

                            {status === 'success' && (
                                <div className="alert alert-success">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="alert alert-error">
                                    ✗ {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="submit-button"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'SENDING...' : "LET'S TALK →"}
                            </button>
                        </form>
                    </div>

                    <div className="contact-info-section">
                        <h2>CONTACT</h2>
                        <div className="contact-details">
                            <a href="tel:+17633003283" className="phone">(651) 300-3283</a>
                            <div className="social-links">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                                <a href="https://www.linkedin.com/in/kendall-lawless/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;