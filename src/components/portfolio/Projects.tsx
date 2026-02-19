import { useScrollReveal } from '../../hooks/useScrollReveal';
import './projects.css';

const projects = [
  {
    title: 'Lumiskin',
    description: 'Modern skincare e-commerce experience with smooth UI and product showcase.',
    tech: ['React.js', 'Vite'],
    github: '#',
    live: 'https://www.lumiskinonline.store/',
  },
  {
    title: 'WildPk',
    description: 'Wildlife exploration platform for Pakistan with real-time data from Firebase.',
    tech: ['React.js', 'Vite', 'Firebase'],
    github: '#',
    live: '#',
  },
  {
    title: 'MedCare App',
    description: 'Healthcare management app with AI-powered symptom analysis and doctor matching.',
    tech: ['Flutter', 'Firebase', 'Python AI'],
    github: '#',
    live: '#',
  },
  {
    title: 'Student Course Allocation',
    description: 'Intelligent course allocation system for universities with constraint satisfaction.',
    tech: ['React.js', 'JavaScript'],
    github: '#',
    live: '#',
  },
  {
    title: 'Pic2Calorie',
    description: 'Snap a photo of your food and get instant calorie estimates using computer vision.',
    tech: ['Flutter', 'Firebase', 'Python AI'],
    github: '#',
    live: '#',
  },
  {
    title: 'Endless Runner Game',
    description: 'Fast-paced browser game with dynamic obstacles and score tracking.',
    tech: ['Team Project', 'Game Mechanics'],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-heading reveal">
          Selected <span className="gradient-text">Work</span>
        </h2>
        <div className="projects__rule reveal" />

        <div className="projects__list">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`projects__row reveal ${i % 2 === 1 ? 'projects__row--reverse' : ''}`}
            >
              <div className="projects__number">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="projects__image-side">
                <div className="projects__mockup">
                  <div className="projects__mockup-inner">
                    <span className="projects__mockup-label">{project.title}</span>
                  </div>
                </div>
              </div>

              <div className="projects__text-side">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>
                <div className="projects__tech-row">
                  {project.tech.map((t) => (
                    <span key={t} className="projects__tech-tag">{t}</span>
                  ))}
                </div>
                <div className="projects__links">
                  <a href={project.github} className="projects__link" title="GitHub">
                    &lt;/&gt;
                  </a>
                  <a href={project.live} className="projects__link" title="Live Demo">
                    ↗
                  </a>
                </div>
              </div>

              <div className="projects__row-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
