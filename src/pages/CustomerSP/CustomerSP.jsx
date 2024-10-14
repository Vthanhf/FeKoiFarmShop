// pages/CustomerSP/CustomerSP.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './styles.css';

const CustomerSP = () => {
    return (
        <section className="contact-page">
            <div className="section-header">
                <h2>Contact Us</h2>
                <p className='ABC'>Have a question or need assistance? Reach out to us via email, phone, or the contact form below.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Address</h4>
                                <p>2068 Boulevard Henri - Bourassa Est</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Email</h4>
                                <p>sybexdesigns@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h2>Send Message</h2>
                        <form>
                            <div className="input-box">
                                <input type="text" required />
                                <span>Full Name</span>
                            </div>
                            <div className="input-box">
                                <input type="email" required />
                                <span>Email</span>
                            </div>
                            <div className="input-box">
                                <textarea required></textarea>
                                <span>Type your Message...</span>
                            </div>
                            <div className="input-box">
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerSP;