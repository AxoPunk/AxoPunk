import React from 'react';
import './Footer.css'; // Asegúrate de que el archivo Footer.css exista en esta ruta

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                    X
                </a>
                <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
                    Discord
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                </a>
            </div>
        </footer>
    );
};

export default Footer;