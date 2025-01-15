import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer>
            <div className="container1">
                {/* Copyright Information */}
                <p>&copy; {new Date().getFullYear()} Shreyas Mehta | All Rights Reserved.</p>
                
                {/* Social Media Icons */}
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/shreyas-mehta-7018552b2" className="text-primary mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/shreyasmehta05" className="text-light mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:shreyasmehta05@gmail.com" className="text-danger mx-2">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                
                {/* Quick Links */}
                <div className="quick-links">
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
