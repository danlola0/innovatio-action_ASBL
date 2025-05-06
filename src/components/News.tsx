import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsProps {
  language: string;
}

const News: React.FC<NewsProps> = ({ language }) => {
  const content = {
    fr: {
      title: "Actualités",
      description: "Découvrez les dernières nouvelles et événements d'Innov'Action.",
      viewAll: "Voir toutes les actualités",
      news: [
        {
          title: "Lancement du programme de formation en entrepreneuriat",
          excerpt: "Nous lançons un nouveau programme de formation en entrepreneuriat pour aider les jeunes à développer leurs compétences en affaires.",
          date: "15 juin 2024",
          image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "Atelier sur la culture congolaise",
          excerpt: "Rejoignez-nous pour un atelier sur la culture congolaise, où nous explorerons l'art, la musique et les traditions.",
          date: "22 juillet 2024",
          image: "/images/gallery/WhatsApp Image 2025-04-30 à 19.25.35_0495e4f5.jpg"
        },
        {
          title: "Projet communautaire de nettoyage",
          excerpt: "Participez à notre projet communautaire de nettoyage et contribuez à rendre notre quartier plus propre et plus beau.",
          date: "5 août 2024",
          image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ]
    },
    en: {
      title: "News",
      description: "Discover the latest news and events from Innov'Action.",
      viewAll: "View all news",
      news: [
        {
          title: "Launch of Entrepreneurship Training Program",
          excerpt: "We are launching a new entrepreneurship training program to help young people develop their business skills.",
          date: "June 15, 2024",
          image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "Workshop on Congolese Culture",
          excerpt: "Join us for a workshop on Congolese culture, where we will explore art, music, and traditions.",
          date: "July 22, 2024",
          image: "/images/gallery/WhatsApp Image 2025-04-30 à 19.25.35_0495e4f5.jpg"
        },
        {
          title: "Community Cleanup Project",
          excerpt: "Participate in our community cleanup project and help make our neighborhood cleaner and more beautiful.",
          date: "August 5, 2024",
          image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ]
    }
  };

  const { title, description, viewAll, news } = content[language as keyof typeof content];

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">
                  {item.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  {language === 'fr' ? 'Lire la suite' : 'Read more'} 
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-blue-600 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            {viewAll}
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;