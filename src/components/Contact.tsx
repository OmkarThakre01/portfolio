
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-foreground text-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Let's Work Together</h2>
        
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-foreground/80 border-foreground/30 text-white placeholder:text-white/60"
              />
              
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-foreground/80 border-foreground/30 text-white placeholder:text-white/60"
              />
              
              <Textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-foreground/80 border-foreground/30 text-white placeholder:text-white/60 min-h-[150px]"
              />
              
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white w-full flex items-center justify-center gap-2"
              >
                Send Message <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
