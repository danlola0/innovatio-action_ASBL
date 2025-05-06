import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('fr');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/images/logo.jpg" 
              alt="Logo INNOV'ACTION ASBL" 
              className="h-10 w-auto object-contain"
            />
            <h1 className={`text-xl font-bold transform hover:scale-105 transition-all duration-300 ${
              scrolled ? 'text-blue-600' : 'text-white'
            }`}>
              INNOV'ACTION ASBL
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks language={language} scrolled={scrolled} activeSection={activeSection} />
            <button 
              onClick={toggleLanguage}
              className={`flex items-center text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              <Globe size={16} className="mr-1" />
              {language === 'fr' ? 'FR' : 'EN'}
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              {isMenuOpen ? (
                <X size={24} className="transform rotate-0 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="transform hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-lg transform transition-all duration-300 ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLinks language={language} mobile scrolled={true} activeSection={activeSection} />
          <button 
            onClick={toggleLanguage}
            className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
          >
            <Globe size={16} className="mr-2" />
            {language === 'fr' ? 'Français' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  language: string;
  mobile?: boolean;
  scrolled?: boolean;
  activeSection: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ language, mobile, scrolled, activeSection }) => {
  const links = language === 'fr' 
    ? [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Programmes', href: '#programs' },
        { name: 'Activités', href: '#activities' },
        { name: 'Actualités', href: '#news' },
        { name: 'Contact', href: '#contact' },
        { name: 'Admin', href: '/admin', protected: true }
      ]
    : [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Programs', href: '#programs' },
        { name: 'Activities', href: '#activities' },
        { name: 'News', href: '#news' },
        { name: 'Contact', href: '#contact' },
        { name: 'Admin', href: '/admin', protected: true }
      ];
      
  return (
    <>
      {links.map((link) => {
        if (link.protected) {
          return null;
        }
        
        const isActive = activeSection === link.href.slice(1);
        
        return (
          <a
            key={link.name}
            href={link.href}
            className={`
              ${mobile 
                ? 'block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50' 
                : 'text-sm font-medium'
              } 
              transition-all duration-300
              ${mobile || scrolled
                ? `text-gray-700 hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`
                : `text-white hover:text-blue-200 ${isActive ? 'text-blue-200' : ''}`
              }
              relative group transform hover:scale-105
            `}
          >
            {link.name}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${
              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}></span>
          </a>
        );
      })}
    </>
  );
};

export default Navbar;