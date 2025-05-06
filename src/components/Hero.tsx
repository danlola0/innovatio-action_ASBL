import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    fr: {
      title: "Agir ensemble, changer le monde en innovant au service de tous !",
      subtitle: "Innov'Action accompagne et encourage les jeunes dans leur développement personnel, éducatif et professionnel.",
      cta: "Découvrir nos programmes",
      yearFounded: "Fondée en 2024"
    },
    en: {
      title: "Act together, change the world by innovating in service of all!",
      subtitle: "Innov'Action supports and encourages young people in their personal, educational and professional development.",
      cta: "Discover our programs",
      yearFounded: "Founded in 2024"
    }
  };

  const { title, subtitle, cta, yearFounded } = content[language as keyof typeof content];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background with gradient overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 animate-zoom-in-out"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg")',
            animation: 'zoomInOut 30s ease-in-out infinite alternate'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-blue-900/90"></div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(30px)',
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto md:ml-0">
          <div className="glass-effect p-8 rounded-2xl backdrop-blur-lg border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-[1.01]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img 
                  src="/images/logo.jpg"
                  alt="INNOV'ACTION ASBL" 
                  className="relative w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover animate-slide-up"
                  style={{ animationDelay: '0.2s' }}
                />
              </div>
              
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white/90">{yearFounded}</span>
              </div>
            </div>
          
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white opacity-0 animate-fadeUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto md:mx-0 opacity-0 animate-fadeUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start opacity-0 animate-fadeUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <a 
                href="#programs" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
              >
                {cta}
                <ArrowRight size={16} className="ml-2" />
              </a>
              
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
              >
                {language === 'fr' ? 'En savoir plus' : 'Learn more'}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about"
          className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200"
        >
          <ArrowRight size={20} className="text-white transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;