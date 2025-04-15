
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Product Manager, Topforge',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'John\'s attention to detail and technical expertise made our project a huge success.'
  },
  {
    id: 2,
    name: 'Michael Davis',
    position: 'CEO, Circleit',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with John was a pleasure. He delivered our website way ahead of schedule.'
  },
  {
    id: 3,
    name: 'Emily Brown',
    position: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    text: 'The UI/UX design exceeded our expectations. Highly recommended!'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-foreground/60 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
