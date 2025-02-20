import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Events from './components/Events';
import About from './components/About';
import Footer from './components/Footer';

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
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="App-content">
        <Home />
        <Events />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;