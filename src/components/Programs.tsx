import React from 'react';
import { GraduationCap, Users, Palette, Award, Heart } from 'lucide-react';

interface ProgramsProps {
  language: string;
}

const Programs: React.FC<ProgramsProps> = ({ language }) => {
  const content = {
    fr: {
      title: "Nos programmes",
      description: "Nous offrons une variété de programmes conçus pour aider les jeunes à développer leurs compétences et à réaliser leur potentiel.",
      programs: [
        {
          title: "Formations professionnelles",
          description: "Offrir des formations professionnelles et techniques dans divers secteurs (agriculture, entrepreneuriat, etc.) pour améliorer l'employabilité des jeunes et organiser des ateliers de développement personnel sur le leadership.",
          icon: <GraduationCap className="h-10 w-10 text-blue-600" />,
          color: "blue"
        },
        {
          title: "Engagement citoyen",
          description: "Encourager les jeunes à s'impliquer dans des projets communautaires en tant que bénévoles ou leaders de projets, favorisant ainsi le développement de compétences sociales et organisationnelles.",
          icon: <Users className="h-10 w-10 text-indigo-600" />,
          color: "indigo"
        },
        {
          title: "Culture",
          description: "Valoriser et promouvoir la richesse de la culture congolaise et africaine à travers des événements culturels, des ateliers et des expositions.",
          icon: <Palette className="h-10 w-10 text-purple-600" />,
          color: "purple"
        },
        {
          title: "Leadership",
          description: "Accompagner les individus ayant un potentiel de leadership pour qu'ils développent leurs compétences à travers des mentorés, des formations spécialisées et des opportunités de mise en pratique.",
          icon: <Award className="h-10 w-10 text-green-600" />,
          color: "green"
        },
        {
          title: "Éducation relationnelle",
          description: "Sensibiliser aux questions de sexualité et d'amour pour un meilleur bien-être relationnel, car c'est au centre des préoccupations des jeunes.",
          icon: <Heart className="h-10 w-10 text-red-600" />,
          color: "red"
        }
      ]
    },
    en: {
      title: "Our programs",
      description: "We offer a variety of programs designed to help young people develop their skills and realize their potential.",
      programs: [
        {
          title: "Professional Training",
          description: "Offer professional and technical training in various sectors (agriculture, entrepreneurship, etc.) to improve youth employability and organize personal development workshops on leadership.",
          icon: <GraduationCap className="h-10 w-10 text-blue-600" />,
          color: "blue"
        },
        {
          title: "Civic Engagement",
          description: "Encourage young people to get involved in community projects as volunteers or project leaders, thus promoting the development of social and organizational skills.",
          icon: <Users className="h-10 w-10 text-indigo-600" />,
          color: "indigo"
        },
        {
          title: "Culture",
          description: "Value and promote the richness of Congolese and African culture through cultural events, workshops and exhibitions.",
          icon: <Palette className="h-10 w-10 text-purple-600" />,
          color: "purple"
        },
        {
          title: "Leadership",
          description: "Support individuals with leadership potential to develop their skills through mentoring, specialized training, and practical opportunities.",
          icon: <Award className="h-10 w-10 text-green-600" />,
          color: "green"
        },
        {
          title: "Relationship Education",
          description: "Raise awareness about sexuality and love issues for better relational well-being, as it is at the center of young people's concerns.",
          icon: <Heart className="h-10 w-10 text-red-600" />,
          color: "red"
        }
      ]
    }
  };

  const { title, description, programs } = content[language as keyof typeof content];

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className={`bg-${program.color}-50 p-6 flex justify-center`}>
                {program.icon}
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-700">
                  {program.description}
                </p>
              </div>
              <div className="px-6 pb-6">
                <a 
                  href="#contact" 
                  className={`inline-flex items-center text-${program.color}-600 hover:text-${program.color}-700 font-medium`}
                >
                  {language === 'fr' ? 'En savoir plus' : 'Learn more'} 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;