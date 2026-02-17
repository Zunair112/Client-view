import { useScrollReveal } from '../../hooks/useScrollReveal';
import './experience.css';

const Experience = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="container">
        <h2 className="section-heading reveal">
          Experience
        </h2>

        <div className="experience__card reveal">
          <div className="experience__verified">Verified ✓</div>
          <div className="experience__header">
            <div>
              <h3 className="experience__company">Company Name</h3>
              <p className="experience__role">Frontend Developer Intern</p>
            </div>
            <span className="experience__date">2024</span>
          </div>
          <ul className="experience__list">
            <li>— Built responsive UI components using React and modern CSS</li>
            <li>— Collaborated with design team to implement pixel-perfect interfaces</li>
            <li>— Optimized application performance and loading times</li>
            <li>— Participated in code reviews and agile development workflows</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
