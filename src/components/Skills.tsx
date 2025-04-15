
import { Palette, Code, Smartphone } from 'lucide-react';

const skillsData = {
  uiUxDesign: {
    icon: <Palette className="w-12 h-12 text-primary mx-auto mb-4" />,
    title: 'UI/UX Design',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
  },
  webDevelopment: {
    icon: <Code className="w-12 h-12 text-primary mx-auto mb-4" />,
    title: 'Web Development',
    skills: ['React.js', 'Next.js', 'javascript', 'TypeScript', 'Tailwind CSS']
  },
  mobileDevelopment: {
    icon: <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />,
    title: 'Mobile Development',
    skills: ['React Native', 'Expo', 'iOS Development', 'Android']
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.values(skillsData).map((category) => (
            <div key={category.title} className="skill-card">
              {category.icon}
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-foreground/70">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
