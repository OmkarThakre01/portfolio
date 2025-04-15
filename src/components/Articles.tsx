
import { Calendar } from 'lucide-react';

const articlesData = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    category: 'React/Next',
    description: 'Learn best practices for structuring large React applications',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2',
    date: 'Dec 15, 2023',
    link: '#'
  },
  {
    id: 2,
    title: 'UI/UX Design Principles',
    category: 'Design',
    description: 'Essential principles every designer should know',
    image: 'https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b',
    date: 'Nov 28, 2023',
    link: '#'
  },
  {
    id: 3,
    title: 'Getting Started with React Native',
    category: 'Mobile',
    description: 'A comprehensive guide to mobile development with React Native',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    date: 'Oct 31, 2023',
    link: '#'
  }
];

const Articles = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <div key={article.id} className="article-card">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded text-xs font-medium">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{article.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-foreground/60 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </div>
                  <a href={article.link} className="text-primary hover:underline text-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
