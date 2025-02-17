import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './img/AxoPunk_TintaBlanca.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const eventImages = require.context('./img/events', false, /\.(png|jpe?g|svg)$/).keys().map((path) => require(`./img/events/${path.replace('./', '')}`));

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const EventCarousel = () => {
  return (
    <Carousel responsive={responsive}>
      {eventImages.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image} alt={`Event ${index}`} className="carousel-image" />
        </div>
      ))}
    </Carousel>
  );
};

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
        <div className="section section-1" id="inicio">
          <p><h1>Enseñar, Aprender y Difundir...</h1>
          <h2>AxoPunk</h2></p>
        </div>
        <div className="section section-2" id="eventos">
          <h1>Eventos</h1>
          <EventCarousel />
        </div>
        <div className="section section-3" id="contacto">
          <h1>Contacto</h1>
        </div>
      </div>
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
