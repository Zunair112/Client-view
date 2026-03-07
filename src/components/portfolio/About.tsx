import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import profileImg from '../../assets/profile.jpg';
import './about.css';

const stats = [
  { value: 600, suffix: '+', label: 'Projects' },
  { value: 7, suffix: '', label: 'Years Experience' },
  { value: 4, suffix: '', label: 'Years Learning' },
];

//const education = [
// { year: '2021 – 2025', title: 'BS Computer Science', institution: 'University' },
//{ year: '2019 – 2021', title: 'Intermediate (Pre-Engineering)', institution: 'College' },
//{ year: '2017 – 2019', title: 'Matriculation (Science)', institution: 'High School' },
//];

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
      { threshold: 1 }
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
              A seasoned frontend developer with a track record of building elegant,
              high-performance interfaces that are as solid under the hood as they look on the surface.
              Across web and mobile — from React and TypeScript to Flutter — I've shipped products that balance pixel-perfect design with real-world scalability.
              I've developed a deep appreciation for the details most overlook: accessibility,
              motion design, and the micro-interactions that make users feel something.
              I don't just write code; I craft experiences that are fast, inclusive, and built to last.
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


      </div>
    </section>
  );
};

export default About;
