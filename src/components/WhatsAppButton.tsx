import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  language: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber = '243999462485', 
  message = 'Bonjour, je souhaite plus d\'informations sur INNOV\'ACTION ASBL',
  language 
}) => {
  // Nettoyer le numéro de téléphone (supprimer les espaces et caractères spéciaux)
  const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
  
  // Créer le lien WhatsApp
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;

  const content = {
    fr: {
      ariaLabel: "Contactez-nous sur WhatsApp",
      tooltip: "Discutez avec nous sur WhatsApp"
    },
    en: {
      ariaLabel: "Contact us on WhatsApp",
      tooltip: "Chat with us on WhatsApp"
    }
  };

  const { ariaLabel, tooltip } = content[language as keyof typeof content];

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transform transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </a>
      <div className="absolute right-16 bottom-2 bg-gray-800 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {tooltip}
      </div>
    </div>
  );
};

export default WhatsAppButton;
