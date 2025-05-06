import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialsProps {
  language: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const content = {
    fr: {
      title: "Témoignages",
      description: "Découvrez ce que nos participants ont à dire sur leur expérience avec Innov'Action.",
      testimonials: [
        {
          quote: "Grâce à Innov'Action, j'ai pu développer mes compétences en leadership et trouver un emploi dans le domaine que j'aime. Leur programme de formation a changé ma vie.",
          author: "Marie K.",
          role: "Participante au programme de leadership"
        },
        {
          quote: "J'ai participé à un projet communautaire organisé par Innov'Action et cela m'a permis de mieux comprendre les besoins de ma communauté et comment je peux contribuer positivement.",
          author: "Jean-Paul M.",
          role: "Bénévole"
        },
        {
          quote: "Les ateliers sur la culture congolaise m'ont aidé à renouer avec mes racines et à être fier de mon héritage. Je recommande vivement les programmes d'Innov'Action.",
          author: "Clara N.",
          role: "Participante aux ateliers culturels"
        }
      ]
    },
    en: {
      title: "Testimonials",
      description: "Discover what our participants have to say about their experience with Innov'Action.",
      testimonials: [
        {
          quote: "Thanks to Innov'Action, I was able to develop my leadership skills and find a job in the field I love. Their training program changed my life.",
          author: "Marie K.",
          role: "Leadership program participant"
        },
        {
          quote: "I participated in a community project organized by Innov'Action and it allowed me to better understand the needs of my community and how I can contribute positively.",
          author: "Jean-Paul M.",
          role: "Volunteer"
        },
        {
          quote: "The workshops on Congolese culture helped me reconnect with my roots and be proud of my heritage. I highly recommend Innov'Action's programs.",
          author: "Clara N.",
          role: "Cultural workshop participant"
        }
      ]
    }
  };

  const { title, description, testimonials } = content[language as keyof typeof content];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-blue-800 rounded-lg p-8 md:p-12 shadow-lg">
            <Quote className="absolute text-blue-700 h-16 w-16 opacity-20 top-6 left-6" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-light italic mb-8 text-blue-50">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">{testimonials[activeIndex].author.charAt(0)}</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{testimonials[activeIndex].author}</p>
                  <p className="text-blue-300 text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-400' : 'bg-blue-700'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6 hidden md:block">
            <button
              onClick={prevTestimonial}
              className="bg-blue-800 p-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6 hidden md:block">
            <button
              onClick={nextTestimonial}
              className="bg-blue-800 p-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;