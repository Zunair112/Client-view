import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import profileImg from '../../assets/profile.jpg';
import './about.css';

const stats = [
  { value: 6, suffix: '+', label: 'Projects' },
  { value: 1, suffix: '', label: 'Internship' },
  { value: 4, suffix: '', label: 'Years Learning' },
];

const education = [
  { year: '2021 – 2025', title: 'BS Computer Science', institution: 'University' },
  { year: '2019 – 2021', title: 'Intermediate (Pre-Engineering)', institution: 'College' },
  { year: '2017 – 2019', title: 'Matriculation (Science)', institution: 'High School' },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const step = () => {
            start += 1;
            setCount(start);
            if (start < target) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrapper reveal">
            <div className="about__image-border">
              <div className="about__image-placeholder">
  <img src={profileImg} alt="Profile" className="about__profile-img" />
</div>
            </div>
          </div>

          <div className="about__content reveal reveal-delay-1">
            <h2 className="section-heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="about__text">
              I'm a frontend developer focused on crafting elegant interfaces with robust
              engineering under the hood. I care about performance, accessibility, and delightful
              motion — the little details that elevate experiences.
            </p>

            <div className="about__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about__stat">
                  <span className="about__stat-value">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about__timeline reveal reveal-delay-2">
          <h3 className="about__timeline-title">Education</h3>
          <div className="about__timeline-line">
            {education.map((item, i) => (
              <div
                key={i}
                className={`about__timeline-item reveal reveal-delay-${i + 2}`}
              >
                <div className="about__timeline-dot" />
                <div className="about__timeline-card">
                  <span className="about__timeline-year">{item.year}</span>
                  <h4 className="about__timeline-heading">{item.title}</h4>
                  <p className="about__timeline-institution">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
