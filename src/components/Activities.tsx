import React, { useState } from 'react';
import { Calendar, Users, Award, Heart, BookOpen, ArrowRight } from 'lucide-react';

interface ActivitiesProps {
  language: string;
}

const Activities: React.FC<ActivitiesProps> = ({ language }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const content = {
    fr: {
      title: "Nos Activités",
      description: "Découvrez nos activités régulières et événements spéciaux qui contribuent au développement de notre communauté.",
      learnMore: "En savoir plus",
      activities: [
        {
          title: "Ateliers de Formation",
          date: "Tous les samedis",
          description: "Sessions de formation pratique sur divers sujets professionnels et personnels.",
          icon: <BookOpen className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
          image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Projets Communautaires",
          date: "Mensuel",
          description: "Initiatives locales pour améliorer notre communauté et développer le leadership.",
          icon: <Users className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
          image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Séminaires de Leadership",
          date: "Trimestriel",
          description: "Programmes intensifs de développement des compétences en leadership.",
          icon: <Award className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
          image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Groupes de Discussion",
          date: "Bimensuel",
          description: "Échanges sur des sujets d'actualité et de développement personnel.",
          icon: <Heart className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
          image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ]
    },
    en: {
      title: "Our Activities",
      description: "Discover our regular activities and special events that contribute to our community's development.",
      learnMore: "Learn more",
      activities: [
        {
          title: "Training Workshops",
          date: "Every Saturday",
          description: "Practical training sessions on various professional and personal topics.",
          icon: <BookOpen className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
          image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Community Projects",
          date: "Monthly",
          description: "Local initiatives to improve our community and develop leadership.",
          icon: <Users className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
          image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Leadership Seminars",
          date: "Quarterly",
          description: "Intensive leadership skills development programs.",
          icon: <Award className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
          image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Discussion Groups",
          date: "Bi-monthly",
          description: "Exchanges on current topics and personal development.",
          icon: <Heart className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
          image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ]
    }
  };

  const { title, description, activities, learnMore } = content[language as keyof typeof content];

  return (
    <section id="activities" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 transform hover:scale-x-150 transition-transform duration-300"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-cover bg-center z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                   style={{ backgroundImage: `url(${activity.image})` }}>
              </div>
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  {activity.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3 group-hover:text-blue-600 transition-colors duration-300">
                    {activity.title}
                  </h3>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2 group-hover:text-blue-600 transition-colors duration-300" />
                  {activity.date}
                </div>
                <p className="text-gray-700 mb-4">{activity.description}</p>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                  {learnMore}
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;