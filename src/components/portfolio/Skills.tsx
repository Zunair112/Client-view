import { useScrollReveal } from '../../hooks/useScrollReveal';
import './skills.css';

const techSkills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Flutter', icon: '📱' },
  { name: 'JavaScript', icon: '✨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Python', icon: '🐍' },
  { name: 'HTML/CSS', icon: '🎨' },
  { name: 'Git', icon: '🔀' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Dart', icon: '🎯' },
  { name: 'REST APIs', icon: '🔌' },
  { name: 'Figma', icon: '🖼️' },
];

const softSkills = [
  { name: 'Problem Solving', color: '#4361ee' },
  { name: 'Team Collaboration', color: '#4cc9f0' },
  { name: 'Communication', color: '#7b2ff7' },
  { name: 'Time Management', color: '#f72585' },
  { name: 'Adaptability', color: '#00e87b' },
];

const Skills = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-heading reveal">
          What I <span className="gradient-text">Work With</span>
        </h2>

        <div className="skills__grid">
          {techSkills.map((skill, i) => (
            <div
              key={skill.name}
              className={`skills__card reveal reveal-delay-${Math.min(i % 4 + 1, 5)}`}
            >
              <span className="skills__icon">{skill.icon}</span>
              <span className="skills__name">{skill.name}</span>
              <div className="skills__card-border" />
            </div>
          ))}
        </div>

        <div className="skills__soft reveal reveal-delay-3">
          <h3 className="skills__soft-title">Soft Skills</h3>
          <div className="skills__soft-row">
            {softSkills.map((skill) => (
              <span
                key={skill.name}
                className="skills__soft-chip"
                style={{ '--chip-color': skill.color } as React.CSSProperties}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
