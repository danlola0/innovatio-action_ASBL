import React, { useState } from 'react';
import { Send, Image } from 'lucide-react';
import toast from 'react-hot-toast';

interface AdminProps {
  language: string;
}

const Admin: React.FC<AdminProps> = ({ language }) => {
  const [newsData, setNewsData] = useState({
    title: '',
    content: '',
    image_url: '',
    published_at: new Date().toISOString().split('T')[0]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    fr: {
      title: "Administration",
      newsSection: "Publier une actualité",
      form: {
        title: "Titre",
        content: "Contenu",
        image: "Image URL",
        date: "Date de publication",
        publish: "Publier",
        success: "Actualité publiée avec succès",
        error: "Erreur lors de la publication"
      }
    },
    en: {
      title: "Administration",
      newsSection: "Publish News",
      form: {
        title: "Title",
        content: "Content",
        image: "Image URL",
        date: "Publication Date",
        publish: "Publish",
        success: "News published successfully",
        error: "Error publishing news"
      }
    }
  };

  const { title, newsSection, form } = content[language as keyof typeof content];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('News data:', newsData);
      toast.success(form.success);
      
      setNewsData({
        title: '',
        content: '',
        image_url: '',
        published_at: new Date().toISOString().split('T')[0]
      });
    } catch (error) {
      console.error('Error publishing news:', error);
      toast.error(form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewsData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{newsSection}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  {form.title}
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newsData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  {form.content}
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={newsData.content}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 mb-1">
                  {form.image}
                </label>
                <div className="flex gap-4">
                  <input
                    type="url"
                    id="image_url"
                    name="image_url"
                    value={newsData.image_url}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="published_at" className="block text-sm font-medium text-gray-700 mb-1">
                  {form.date}
                </label>
                <input
                  type="date"
                  id="published_at"
                  name="published_at"
                  value={newsData.published_at}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Publishing...' : form.publish}
                  <Send size={16} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;