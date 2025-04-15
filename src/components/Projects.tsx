
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    categories: ['All', 'Web'],
    link: '#'
  },
  {
    id: 2,
    title: 'Fitness App',
    description: 'Mobile app for tracking workouts and nutrition',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d',
    categories: ['All', 'Mobile'],
    link: '#'
  },
  {
    id: 3,
    title: 'Dashboard Design',
    description: 'Analytics dashboard with data visualization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    categories: ['All', 'UI/UX'],
    link: '#'
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Feature-rich social networking application',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
    categories: ['All', 'Mobile'],
    link: '#'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Responsive portfolio with dark mode support',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    categories: ['All', 'Web', 'UI/UX'],
    link: '#'
  },
  {
    id: 6,
    title: 'Task Management',
    description: 'Project management app with team collaboration',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
    categories: ['All', 'Web'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>
        
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <Badge variant="outline" className="bg-primary text-white hover:bg-primary/90">All</Badge>
          <Badge variant="outline" className="hover:bg-secondary">Web</Badge>
          <Badge variant="outline" className="hover:bg-secondary">Mobile</Badge>
          <Badge variant="outline" className="hover:bg-secondary">UI/UX</Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">React</Badge>
                    <Badge variant="secondary" className="text-xs">Node</Badge>
                  </div>
                  <a href={project.link} className="text-primary hover:underline flex items-center text-sm">
                    View <ExternalLink className="h-3 w-3 ml-1" />
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

export default Projects;
