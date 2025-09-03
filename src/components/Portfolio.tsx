import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, Github, Mail, Linkedin, Download, Code, Brain, Zap } from 'lucide-react';
import underwaterBg from '@/assets/underwater-bg.jpg';
import jellyfishAmbient from '@/assets/jellyfish-ambient.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Java', icon: '☕', isEmoji: true },
    { name: 'Python', icon: '🐍', isEmoji: true },
    { name: 'C++', icon: Code, isEmoji: false },
    { name: 'HTML', icon: Code, isEmoji: false },
    { name: 'CSS', icon: Code, isEmoji: false },
    { name: 'JavaScript', icon: Code, isEmoji: false },
    { name: 'React', icon: Code, isEmoji: false },
    { name: 'GitHub', icon: Code, isEmoji: false },
    { name: 'Problem-Solving', icon: Brain, isEmoji: false },
    { name: 'Debugging', icon: Zap, isEmoji: false },
  ];

  const projects = [
    {
      title: 'Virtual EEE Lab',
      description: 'A web-based simulation platform for Electrical and Electronics Engineering experiments, allowing students to perform virtual lab experiments safely and interactively.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Shambhavi0509/vrlabeee',
      demo: 'https://srmvlabs.vercel.app/'
    },
    {
      title: 'Book Haven',
      description: 'A web app for book lovers to browse, review, and share books. Includes a searchable catalog and interactive user interface.',
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/Shambhavi0509/Book-Haven-website',
      demo: 'https://book-haven-online-10.vercel.app/'
    },
    {
      title: 'Sakhi Pay',
      description: 'A modern digital payment solution designed to simplify financial transactions with a user-friendly interface and secure payment processing.',
      technologies: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/Shambhavi0509/sakhipay-web',
      demo: null,
      demoMessage: 'Sorry, this web app was not deployed yet'
    },
    {
      title: 'Hate Speech App',
      description: 'An AI-powered app that detects and classifies hate speech in text, designed to make online platforms safer.',
      technologies: ['Python', 'AI/ML', 'NLP'],
      github: 'https://github.com/Shambhavi0509/HateSpeechApp',
      demo: 'https://github.com/Shambhavi0509/HateSpeechApp'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen underwater-bg relative overflow-x-hidden">
      {/* Ambient underwater background */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${underwaterBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="neon-text text-2xl font-bold tracking-wider">
              Tech by Shambhavi
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section 
                      ? 'neon-text text-lg' 
                      : 'text-muted-foreground hover:neon-text'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Glass panel with "room" style text */}
          <div className="glass-card mb-8 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url(${jellyfishAmbient})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10">
              <h1 className="text-6xl md:text-8xl font-thin neon-text mb-4 tracking-widest">
                MY PORTFOLIO
              </h1>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-6" />
            </div>
          </div>

          <div className="glass-card max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Hi, I'm <span className="neon-text-accent">Shambhavi 👋</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A curious Computer Science student who loves turning ideas into code. I'm passionate about building smart, impactful projects that solve real problems. From Java and Python to full-stack web technologies, I enjoy exploring the world of software and constantly challenging myself to learn more. My journey is all about creating solutions that make life simpler and smarter.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="holographic interactive-glow text-lg px-8 py-3"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="glass-panel border-neon-cyan/30 hover:border-neon-cyan/60 text-lg px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-neon-cyan/30 floating" />
        <div className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-neon-teal/40 floating-delayed" />
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 rounded-full bg-neon-blue/20 floating" />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light neon-text mb-4">SKILLS</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-teal to-transparent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {/* Technical Skills Card */}
                <CarouselItem>
                  <Card className="glass-card interactive-glow p-8">
                    <div className="text-center">
                      <div className="text-4xl mb-6">⚙️</div>
                      <h3 className="text-2xl font-semibold neon-text-accent mb-8">Technical Skills</h3>
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { name: 'C++', icon: '🖥️' },
                          { name: 'Java', icon: '☕' },
                          { name: 'Python', icon: '🐍' },
                          { name: 'HTML', icon: '🌐' },
                          { name: 'CSS', icon: '🎨' },
                          { name: 'JavaScript', icon: '✨' },
                          { name: 'Problem Solving', icon: '🧩' },
                          { name: 'Debugging', icon: '🐞🔍' }
                        ].map((skill) => (
                          <div key={skill.name} className="flex items-center gap-3 p-3 rounded-lg glass-panel">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="text-muted-foreground">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Non-Technical Skills Card */}
                <CarouselItem>
                  <Card className="glass-card interactive-glow p-8">
                    <div className="text-center">
                      <div className="text-4xl mb-6">🌟</div>
                      <h3 className="text-2xl font-semibold neon-text-accent mb-8">Non-Technical Skills</h3>
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { name: 'Communication', icon: '🗣️' },
                          { name: 'Teamwork', icon: '🤝' },
                          { name: 'Time Management', icon: '⏳' },
                          { name: 'Creativity', icon: '💡🎨' },
                          { name: 'Adaptability', icon: '🔄' },
                          { name: 'Leadership', icon: '🧭' }
                        ].map((skill) => (
                          <div key={skill.name} className="flex items-center gap-3 p-3 rounded-lg glass-panel">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="text-muted-foreground">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="glass-panel border-neon-cyan/30 hover:border-neon-cyan/60" />
              <CarouselNext className="glass-panel border-neon-cyan/30 hover:border-neon-cyan/60" />
            </Carousel>
          </div>

          {/* Tools Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light neon-text-accent mb-4">TOOLS</h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                         {[
                           { name: 'Git', icon: '🐙' },
                           { name: 'VS Code', icon: '💻' },
                           { name: 'AutoCAD', icon: '📐' },
                           { name: 'Canva', icon: '🎨' }
                         ].map((tool) => (
                <Card key={tool.name} className="glass-card interactive-glow p-6 text-center group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{tool.icon}</div>
                  <h4 className="font-medium text-sm text-muted-foreground">{tool.name}</h4>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light neon-text mb-4">PROJECTS</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-teal to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="glass-card interactive-glow group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-semibold neon-text-accent mb-4 group-hover:neon-text transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                   <div className="flex gap-4">
                     <Button 
                       variant="outline" 
                       size="sm" 
                       className="glass-panel border-neon-cyan/30 hover:border-neon-cyan/60"
                       asChild
                     >
                       <a href={project.github} target="_blank" rel="noopener noreferrer">
                         <Github className="w-4 h-4 mr-2" />
                         GitHub
                       </a>
                     </Button>
                     {project.demo && (
                       <Button 
                         size="sm" 
                         className="holographic"
                         asChild
                       >
                         <a href={project.demo} target="_blank" rel="noopener noreferrer">
                           <ExternalLink className="w-4 h-4 mr-2" />
                           Live Demo
                         </a>
                       </Button>
                     )}
                     {project.demoMessage && (
                       <div className="text-sm text-muted-foreground mt-2 italic">
                         {project.demoMessage}
                       </div>
                     )}
                   </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts About Myself Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light neon-text mb-4">Beyond Tech</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-teal to-transparent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {/* Hobbies Card */}
                <CarouselItem>
                  <Card className="glass-card interactive-glow p-8">
                    <div className="text-center">
                      <div className="text-4xl mb-6">🎶</div>
                      <h3 className="text-2xl font-semibold neon-text-accent mb-8">Hobbies</h3>
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { name: 'Listening to Music', icon: '🎧' },
                          { name: 'Playing Football', icon: '⚽' },
                          { name: 'Photography', icon: '📸' },
                          { name: 'Reading Books', icon: '📚' },
                          { name: 'Travelling', icon: '✈️' }
                        ].map((hobby) => (
                          <div key={hobby.name} className="flex items-center gap-3 p-3 rounded-lg glass-panel">
                            <span className="text-2xl">{hobby.icon}</span>
                            <span className="text-muted-foreground">{hobby.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Languages Spoken Card */}
                <CarouselItem>
                  <Card className="glass-card interactive-glow p-8">
                    <div className="text-center">
                      <div className="text-4xl mb-6">🌍</div>
                      <h3 className="text-2xl font-semibold neon-text-accent mb-8">Languages Spoken</h3>
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { name: 'English', icon: '🇬🇧' },
                          { name: 'Hindi', icon: '🇮🇳' },
                          { name: 'Bengali', icon: '🇧🇩' },
                          { name: 'Japanese', icon: '🇯🇵' },
                          { name: 'Marathi', icon: '🇮🇳' }
                        ].map((language) => (
                          <div key={language.name} className="flex items-center gap-3 p-3 rounded-lg glass-panel">
                            <span className="text-2xl">{language.icon}</span>
                            <span className="text-muted-foreground">{language.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Strengths Card */}
                <CarouselItem>
                  <Card className="glass-card interactive-glow p-8">
                    <div className="text-center">
                      <div className="text-4xl mb-6">💪</div>
                      <h3 className="text-2xl font-semibold neon-text-accent mb-8">Strengths</h3>
                      <div className="space-y-4">
                        {[
                          'Fast learner',
                          'Good communication',
                          'Problem-solving mindset'
                        ].map((strength) => (
                          <div key={strength} className="p-4 rounded-lg glass-panel">
                            <span className="text-muted-foreground text-lg">{strength}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Weaknesses Card */}
                <CarouselItem>
                  <Card className="glass-card interactive-glow p-8">
                    <div className="text-center">
                      <div className="text-4xl mb-6">⚡</div>
                      <h3 className="text-2xl font-semibold neon-text-accent mb-8">Weaknesses</h3>
                      <div className="space-y-4">
                        {[
                          'Sometimes overthinks',
                          'Perfectionist tendency'
                        ].map((weakness) => (
                          <div key={weakness} className="p-4 rounded-lg glass-panel">
                            <span className="text-muted-foreground text-lg">{weakness}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="glass-panel border-neon-cyan/30 hover:border-neon-cyan/60" />
              <CarouselNext className="glass-panel border-neon-cyan/30 hover:border-neon-cyan/60" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Experiences + Achievements Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light neon-text mb-4">EXPERIENCES + ACHIEVEMENTS</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-teal to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card interactive-glow p-8 text-center">
              <div className="text-4xl mb-6">🎓</div>
              <h3 className="text-xl font-semibold neon-text-accent mb-4">Academic Excellence</h3>
              <p className="text-muted-foreground text-lg">
                Scored 10 CGPA in both 1st and 2nd semester
              </p>
            </Card>

            <Card className="glass-card interactive-glow p-8 text-center">
              <div className="text-4xl mb-6">🏆</div>
              <h3 className="text-xl font-semibold neon-text-accent mb-4">Competition Success</h3>
              <p className="text-muted-foreground text-lg">
                Secured 1st position in EGD
              </p>
            </Card>

            <Card className="glass-card interactive-glow p-8 text-center">
              <div className="text-4xl mb-6">🖥️</div>
              <h3 className="text-xl font-semibold neon-text-accent mb-4">Coding Practice</h3>
              <p className="text-muted-foreground text-lg">
                Solved LeetCode questions and appeared in coding contests
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-card">
            <h2 className="text-3xl md:text-4xl font-light neon-text mb-6">RESUME</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Explore my professional resume to learn more about myself.
            </p>
            <Button className="holographic interactive-glow text-lg px-8 py-3" asChild>
              <a href="https://drive.google.com/file/d/1hoy-fxyIDj-ydrTu_3eEdBzZ1e1--TId/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                My Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light neon-text mb-4">CONTACT ME</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-teal to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/Shambhavi0509/Book-Haven-website?tab=readme-ov-file&utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="glass-card interactive-glow p-6 text-center cursor-pointer group-hover:scale-105 transition-transform">
                <Github className="w-8 h-8 mx-auto mb-4 text-neon-cyan group-hover:text-neon-teal transition-colors" />
                <h3 className="text-lg font-semibold neon-text-accent mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground">@Shambhavi0509</p>
              </Card>
            </a>

            {/* Email */}
            <Card className="glass-card interactive-glow p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-neon-cyan" />
              <h3 className="text-lg font-semibold neon-text-accent mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">shampri596@gmail.com</p>
            </Card>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shambhavi-mishra-2b513a31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="glass-card interactive-glow p-6 text-center cursor-pointer group-hover:scale-105 transition-transform">
                <Linkedin className="w-8 h-8 mx-auto mb-4 text-neon-cyan group-hover:text-neon-teal transition-colors" />
                <h3 className="text-lg font-semibold neon-text-accent mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Professional profile</p>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Shambhavi Mishra. Crafted with futuristic precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;