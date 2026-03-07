import { useEffect, useRef } from 'react';
import SplineKeyboard from './SplineKeyboard';
import './hero.css';

const Hero = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const onMouseLeave = () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const subtitle = "Web and Mobile apps that look sharp, run fast, and feel right.";

  return (
    <section className="hero" id="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="hero__inner container">
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for work ✦
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">Frontend</span>
            <span className="hero__title-line">
              Developer<span className="hero__cursor">_</span>
            </span>
          </h1>

          <p className="hero__subtitle">
            {subtitle.split('').map((char, i) => (
              <span
                key={i}
                className="hero__letter"
                style={{ animationDelay: `${1.2 + i * 0.02}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>

          <div className="hero__pills">
            {['React', 'Javascript', 'Flutter', 'Firebase',].map((tech, i) => (
              <span key={tech} className="hero__pill" style={{ animationDelay: `${1.8 + i * 0.1}s` }}>
                {tech}
              </span>
            ))}
          </div>

          <div className="hero__ctas">
            <a href="#projects" className="hero__cta hero__cta--primary">
              See My Work →
            </a>
            {/* <a href="/cv.pdf" download="cv.pdf"
              className="hero__cta hero__cta--ghost">
              Download CV
            </a> */}
          </div>
        </div>

        <div className="hero__right">
          {/* Code card */}
          <div ref={cardRef} className="hero__code-card">
            <div className="hero__code-dots">
              <span style={{ background: '#ff5f57' }} />
              <span style={{ background: '#ffbd2e' }} />
              <span style={{ background: '#28c840' }} />
            </div>
            <pre className="hero__code">
              <code>
                <span className="code-keyword">const</span>{' '}
                <span className="code-var">portfolio</span>{' '}
                <span className="code-op">=</span> {'{\n'}
                {'  '}<span className="code-key">name</span>:{' '}
                <span className="code-string">"Muhammad Zunair Ali"</span>,{'\n'}
                {'  '}<span className="code-key">role</span>:{' '}
                <span className="code-string">"Frontend Developer"</span>,{'\n'}
                {'  '}<span className="code-key">stack</span>:{' '}
                [<span className="code-string">"React"</span>,{' '}
                <span className="code-string">"Flutter"</span>,{' '}
                <span className="code-string">"Firebase"</span>]{'\n'}
                {'};'}
              </code>
            </pre>
          </div>

          {/* Spline 3D Keyboard */}
          <SplineKeyboard />
        </div>
      </div>

      <a href="#about" className="hero__scroll-hint">
        <span className="hero__scroll-arrow">↓</span>
      </a>
    </section>
  );
};

export default Hero;