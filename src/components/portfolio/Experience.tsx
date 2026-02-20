import { useScrollReveal } from '../../hooks/useScrollReveal';
import './experience.css';


import certImg from '../../assets/certificate.png';

const Experience = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="container">
        <h2 className="section-heading reveal">
          Experience &amp; Certifications
        </h2>

        <div className="experience__card reveal reveal-delay-1">
          {/* Left Content */}
          <div className="experience__left">
            <div className="experience__top-row">
              <div>
                <h3 className="experience__company">Front-End Development Internship</h3>
                <p className="experience__org">DevelopersHub Corporation©</p>
              </div>
              <span className="experience__badge">Internship</span>
            </div>

            <p className="experience__date">
              <span className="experience__date-icon">📅</span>
              22 July 2025 – 5 September 2025
            </p>

            <ul className="experience__list">
              <li>Completed a six-week virtual internship focused on Front-End Development.</li>
              <li>Worked on real-world projects, applying HTML, CSS, JavaScript, and React.js.</li>
              <li>Learned and implemented industry best practices in responsive web design and UI development.</li>
              <li>Successfully earned a certificate of completion for the internship.</li>
            </ul>

            <div className="experience__skills">
              <p className="experience__skills-label">Skills Learned:</p>
              <div className="experience__skills-tags">
                {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design', 'UI Development'].map(skill => (
                  <span className="experience__skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel — Certificate */}
          <div className="experience__right">
            <p className="experience__cert-title">Certificate</p>
            <div className="experience__cert-preview">
              <img
                src={certImg} alt="Certificate of Achievement" className="experience__cert-img" 
              />
            </div>
           <a href="/certificate.pdf" download className="experience__download-btn">
  🏅 Download
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;