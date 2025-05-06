import React from 'react';

interface GalleryProps {
  language: string;
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  // Tableau des images de la galerie
  const images = [
    { id: 1, src: "/images/gallery/WhatsApp Image 2025-04-30 à 19.25.29_08f948f1.jpg", alt: "Activité INNOV'ACTION 1" },
    { id: 2, src: "/images/gallery/WhatsApp Image 2025-04-30 à 19.25.30_d7dcd2e5.jpg", alt: "Activité INNOV'ACTION 2" },
    { id: 3, src: "/images/gallery/WhatsApp Image 2025-04-30 à 19.25.32_7177b7f3.jpg", alt: "Activité INNOV'ACTION 3" },
    { id: 4, src: "/images/gallery/WhatsApp Image 2025-04-30 à 19.25.33_1834d7c6.jpg", alt: "Activité INNOV'ACTION 4" },
    { id: 5, src: "/images/gallery/WhatsApp Image 2025-04-30 à 19.25.34_bbf8337a.jpg", alt: "Activité INNOV'ACTION 5" },
    { id: 6, src: "/images/gallery/WhatsApp Image 2025-04-30 à 19.25.35_0495e4f5.jpg", alt: "Activité INNOV'ACTION 6" },
  ];

  const content = {
    fr: {
      title: "Galerie d'INNOV'ACTION",
      subtitle: "Découvrez nos activités et événements en images",
      description: "INNOV'ACTION s'engage à travers diverses activités pour le développement de la communauté. Notre galerie témoigne de notre engagement et de notre passion pour l'innovation et le changement social.",
    },
    en: {
      title: "INNOV'ACTION Gallery",
      subtitle: "Discover our activities and events in pictures",
      description: "INNOV'ACTION is committed to various activities for community development. Our gallery showcases our commitment and passion for innovation and social change.",
    },
  };

  const { title, subtitle, description } = content[language as keyof typeof content];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-4">{subtitle}</p>
          <p className="max-w-3xl mx-auto text-gray-600">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
