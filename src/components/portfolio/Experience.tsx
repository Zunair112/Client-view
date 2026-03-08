import { useRef, useEffect } from 'react';
import certImg from '../../assets/certificate.png';
import './experience.css';

const experiences = [
  {
    id: 1,
    type: 'freelance',
    title: 'Freelance Frontend Developer',
    org: 'Self-Employed · Fiverr & Local Clients',
    period: '2019 – Present',
    badge: 'Freelance',
    badgeColor: 'badge--green',
    bullets: [
      'Delivered custom React & JavaScript web solutions for clients across various industries.',
      'Built responsive, performance-optimized UIs with a focus on modern design standards.',
      'Managed full project lifecycle — from requirement gathering to deployment.',
      'Maintained ongoing client relationships with a strong repeat-client rate.',
    ],
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Vite'],
    icon: '💼',
  },
  {
    id: 2,
    type: 'Industrial experience',
    title: 'Front-End Developer',
    org: 'DevelopersHub Corporation©',
    period: 'July 2023 – September 2025',
    badge: 'Senior dev',
    badgeColor: 'badge--blue',
    bullets: [
      'Built Nexus — a full-stack investor-entrepreneur matchmaking platform using React & TypeScript.',
      'Worked on real-world projects applying HTML, CSS, JavaScript, and React.js.',
      'Implemented industry best practices in responsive web design and component architecture.',
      'Earned a certificate of achievement for outstanding performance throughout the programme.',
    ],
    skills: ['React', 'TypeScript', 'CSS3', 'JavaScript', 'Responsive Design', 'UI Development'],
    icon: '🚀',
    hasCert: true,
  },
  ,
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-exp');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="exp-section" id="experience" ref={sectionRef}>
      <div className="exp-container">
        <div className="exp-header reveal-exp">
          <span className="exp-eyebrow">Background</span>
          <h2 className="exp-heading">Experience</h2>
          <p className="exp-subtext">
            A track record of building real products, solving real problems.
          </p>
        </div>

        <div className="exp-timeline">
          {/* Vertical line */}
          <div className="exp-line" />

          {experiences.map((exp, i) => (
            <div
              className={`exp-entry reveal-exp reveal-exp--delay-${i}`}
              key={exp.id}
            >
              {/* Timeline node */}
              <div className="exp-node">
                <span className="exp-node-icon">{exp.icon}</span>
              </div>

              <div className={`exp-card ${exp.type === 'internship' ? 'exp-card--featured' : ''}`}>
                <div className="exp-card-inner">
                  {/* Left */}
                  <div className="exp-left">
                    <div className="exp-top-row">
                      <div>
                        <h3 className="exp-title">{exp.title}</h3>
                        <p className="exp-org">{exp.org}</p>
                      </div>
                      <span className={`exp-badge ${exp.badgeColor}`}>{exp.badge}</span>
                    </div>

                    <p className="exp-period">
                      <span className="exp-period-dot" />
                      {exp.period}
                    </p>

                    <ul className="exp-bullets">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>

                    <div className="exp-skills-wrap">
                      <span className="exp-skills-label">Stack &amp; Skills</span>
                      <div className="exp-tags">
                        {exp.skills.map((s) => (
                          <span className="exp-tag" key={s}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right — cert panel only for internship */}
                  {exp.hasCert && (
                    <div className="exp-cert">
                      <p className="exp-cert-label">Certificate</p>
                      <div className="exp-cert-frame">
                        <img src={certImg} alt="Certificate of Achievement" />
                        <div className="exp-cert-shine" />
                      </div>
                      
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;