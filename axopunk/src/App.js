import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './img/AxoPunk_TintaBlanca.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          document.body.style.backgroundColor = getComputedStyle(section).backgroundColor;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
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
      <div className="App-content">
        <header className="App-header">
          <p>Scroll down to see the effect</p>
        </header>
        <div className="section section-1" id="inicio">
          <h1>Section 1</h1>
        </div>
        <div className="section section-2" id="eventos">
          <h1>Section 2</h1>
        </div>
        <div className="section section-3" id="contacto">
          <h1>Section 3</h1>
        </div>
      </div>
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
