import React, { useState, useEffect } from 'react';
import './styles/animations.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [language, setLanguage] = useState('fr');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    // Set page title
    document.title = 'INNOV\'ACTION ASBL';
    
    // Add animations CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fadeUp {
        animation: fadeUp 0.8s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    
    // Handle navigation
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePathChange);
    
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  if (currentPath === '/admin') {
    return (
      <>
        <Navbar />
        <Admin language={language} />
        <Footer language={language} />
        <WhatsAppButton phoneNumber="243999462485" language={language} />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero language={language} />
      <About language={language} />
      <Programs language={language} />
      <Activities language={language} />
      <Gallery language={language} />
      <Testimonials language={language} />
      <News language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <WhatsAppButton phoneNumber="243999462485" language={language} />
    </div>
  );
};

export default App;