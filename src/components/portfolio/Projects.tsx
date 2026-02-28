import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useState } from 'react';
import './projects.css';

const projects = [
  {
    title: 'Lumiskin',
    description: 'Modern skincare e-commerce experience with smooth UI and product showcase.',
    tech: ['React.js', 'Vite'],
    github: '#',
    live: 'https://www.lumiskinonline.store/',
    image: '/projects/lumiskin.png',
  },
  {
    title: 'Free Flow Venture',
    description: 'Professional business website offering digital services including web development and graphic design.',
    tech: ['React.js', 'Vite'],
    github: '#',
    live: 'https://free-flow-venture-cfwl.vercel.app/',
    image: '/projects/freeflow.png',
  },
  {
    title: 'WildPk',
    description: 'Wildlife exploration platform for Pakistan with real-time data from Firebase.',
    tech: ['React.js', 'Vite', 'Firebase'],
    github: '#',
    live: '#',
    image: '',
  },
  {
    title: 'MedCare App',
    description: 'A smart healthcare mobile application designed to assist users with health monitoring and guidance, integrating AI-based features for enhanced medical support.',
    tech: ['Flutter', 'Firebase', 'AI'],
    github: '#',
    live: '#',
    image: '',
  },
  {
    title: 'Pic2Calorie',
    description: 'Snap a photo of your food and get instant calorie estimates using computer vision.',
    tech: ['Flutter', 'Firebase', 'Python AI'],
    github: '#',
    live: '#',
    image: '',
  },
  {
    title: 'Endless Runner Game',
    description: 'Fast-paced browser game with dynamic obstacles and score tracking.',
    tech: ['Team Project', 'Game Mechanics'],
    github: '#',
    live: '#',
    image: '',
  },
];

// Separate component so each card has its own error state
const ProjectImage = ({ image, title }: { image: string; title: string }) => {
  const [imgFailed, setImgFailed] = useState(false);

  if (image && !imgFailed) {
    return (
      <div className="projects__screenshot-wrap">
        <img
          src={image}
          alt={`${title} preview`}
          className="projects__screenshot"
          loading="lazy"
          decoding="async"
          onError={() => setImgFailed(true)}  // ← falls back to mockup on error
        />
        <div className="projects__screenshot-overlay" />
      </div>
    );
  }

  // Fallback mockup
  return (
    <div className="projects__mockup">
      <div className="projects__mockup-inner">
        <span className="projects__mockup-label">{title}</span>
      </div>
    </div>
  );
};

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
                <ProjectImage image={project.image} title={project.title} />
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
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="projects__link" title="GitHub">
                      &lt;/&gt;
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="projects__link" title="Live Demo">
                      ↗
                    </a>
                  )}
                  {project.github === '#' && project.live === '#' && (
                    <span className="projects__coming-soon">Coming Soon</span>
                  )}
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