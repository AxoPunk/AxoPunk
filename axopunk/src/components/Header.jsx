import React, { useState } from 'react';
import logo from '../img/AxoPunk_TintaBlanca.png'; // Update the path to your logo

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed-header">
            <img src={logo} alt="AxoPunk Logo" />
            <nav className="nav-links">
                <a href="#inicio">Inicio</a>
                <a href="#eventos">Eventos</a>
                <a href="#contacto">Contacto</a>
            </nav>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            {menuOpen && (
                <div className="menu">
                    <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
                    <a href="#eventos" onClick={() => setMenuOpen(false)}>Eventos</a>
                    <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
                </div>
            )}
        </header>
    );
};

export default Header;