import React from 'react';
import { Users, Globe, Brain, Target } from 'lucide-react';

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    fr: {
      title: "Qui sommes-nous ?",
      description: "Nous sommes Innov'Action, une ASBL née d'un souci de permettre aux jeunes d'avancer devant leur défi à leur apportant un soutien adapté à chaque aspect de la vie concernée. Créée en 2024, nous nous donnons pour mission d'accompagner et d'encourager les jeunes dans leur développement personnel, éducatif et professionnel. En leur offrant un soutien diversifié.",
      visionTitle: "Notre vision",
      vision: "Nous visionnons un monde où la complémentarité fait la force, où l'altruisme pousse à utiliser son expérience pour offrir le meilleur aux autres. À travers Innov'Action, nous aspirons à cultiver une génération de leaders autonomes, créatifs et engagés, prêts à faire une différence positive dans leur communauté et dans le monde.",
      valuesTitle: "Nos valeurs",
      values: [
        {
          title: "Complémentarité",
          description: "Entre jeunes, nous n'avons pas besoin d'être hyper bon ou callé dans un certain domaine pour faire son apport à la communauté, mais avec ce que l'on a, nous pouvons aider l'autre à s'améliorer.",
          icon: <Users className="h-6 w-6 text-blue-600" />
        },
        {
          title: "Altruisme",
          description: "Nous pensons que toute expérience, positive ou négative, peut être canalisée et débouchée au service de la communauté.",
          icon: <Globe className="h-6 w-6 text-blue-600" />
        },
        {
          title: "Innovation",
          description: "Nous encourageons de nouvelles approches et solutions créatives pour résoudre les défis des jeunes.",
          icon: <Brain className="h-6 w-6 text-blue-600" />
        },
        {
          title: "Excellence",
          description: "Nous nous efforçons d'atteindre les plus hauts standards dans tous nos programmes et services.",
          icon: <Target className="h-6 w-6 text-blue-600" />
        }
      ]
    },
    en: {
      title: "Who are we?",
      description: "We are Innov'Action, an NPO born from a concern to help young people move forward in the face of their challenges by providing support adapted to every aspect of life concerned. Created in 2024, our mission is to accompany and encourage young people in their personal, educational and professional development by offering diversified support.",
      visionTitle: "Our vision",
      vision: "We envision a world where complementarity is a strength, where altruism pushes people to use their experience to offer the best to others. Through Innov'Action, we aspire to cultivate a generation of autonomous, creative and committed leaders, ready to make a positive difference in their community and in the world.",
      valuesTitle: "Our values",
      values: [
        {
          title: "Complementarity",
          description: "Among young people, we don't need to be excellent in a specific field to contribute to the community, but with what we have, we can help others improve.",
          icon: <Users className="h-6 w-6 text-blue-600" />
        },
        {
          title: "Altruism",
          description: "We believe that any experience, positive or negative, can be channeled and flow into the service of the community.",
          icon: <Globe className="h-6 w-6 text-blue-600" />
        },
        {
          title: "Innovation",
          description: "We encourage new approaches and creative solutions to solve youth challenges.",
          icon: <Brain className="h-6 w-6 text-blue-600" />
        },
        {
          title: "Excellence",
          description: "We strive to achieve the highest standards in all our programs and services.",
          icon: <Target className="h-6 w-6 text-blue-600" />
        }
      ]
    }
  };

  const { title, description, visionTitle, vision, valuesTitle, values } = content[language as keyof typeof content];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            {description}
          </p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{visionTitle}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {vision}
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{valuesTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    {value.icon}
                    <h4 className="text-xl font-semibold text-gray-900 ml-3">{value.title}</h4>
                  </div>
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;