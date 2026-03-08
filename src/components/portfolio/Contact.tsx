import { useState, useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './contact.css';


const contactLinks = [
  { label: 'zunairali7282@email.com', href: 'mailto:zunairali@email.com', 
    icon: <img src="/gmail.png" alt="Email" width="16" height="16"/> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zunair-ali-188097369/', 
    icon: <img src="/linkedin.png" alt="LinkedIn" width="16" height="16"/> },
  { label: 'GitHub', href: 'https://github.com/Zunair112', 
    icon: <img src="/github.png" alt="GitHub" width="16" height="16"/> },
  { label: '+92 321 4427 458', href: 'tel:+923214427458', icon: '☎' },
];

const Contact = () => {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.open(`mailto:zunairali@email.com?subject=${subject}&body=${body}`, '_blank');

    setTimeout(() => {
      setSending(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'contact__ripple';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__grid-bg" />
      <div className="container">
        <h2 className="section-heading reveal" style={{ textAlign: 'center' }}>
          Let's Build Something<br />
          <span className="gradient-text">Together.</span>
        </h2>

        <div className="contact__grid reveal reveal-delay-1">
          <div className="contact__info">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} className="contact__info-row" target="_blank" rel="noreferrer">
                <span className="contact__info-icon">{link.icon}</span>
                <span className="contact__info-label">{link.label}</span>
                <span className="contact__info-arrow">→</span>
              </a>
            ))}
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <input
                type="text"
                id="name"
                placeholder=" "
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="contact__field">
              <input
                type="email"
                id="email"
                placeholder=" "
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="contact__field">
              <textarea
                id="message"
                placeholder=" "
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <label htmlFor="message">Message</label>
            </div>
            <button
              ref={buttonRef}
              type="submit"
              className={`contact__submit ${sending ? 'contact__submit--sending' : ''}`}
              onClick={handleRipple}
            >
              {sending ? 'Opening Gmail...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;