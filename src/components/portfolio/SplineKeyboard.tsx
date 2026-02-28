import { Component, ReactNode, lazy, Suspense, useState, useEffect, useRef } from 'react';

// ── Lazy-load the heavy Spline runtime (~4 MB) ──────────────
const Spline = lazy(() => import('@splinetool/react-spline'));

// ── Error Boundary to catch crashes ──────────────────────────
class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.error('Spline crashed:', error);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// ── Fallback: CSS keyboard if Spline fails ───────────────────
const KeyboardFallback = () => (
  <div className="hero__spline-fallback">
    <div className="hero__spline-fallback-keys">
      {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(k => (
        <span key={k} className="hero__key">{k}</span>
      ))}
    </div>
    <div className="hero__spline-fallback-keys">
      {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(k => (
        <span key={k} className="hero__key">{k}</span>
      ))}
    </div>
    <div className="hero__spline-fallback-keys">
      {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map(k => (
        <span key={k} className="hero__key">{k}</span>
      ))}
    </div>
    <div className="hero__spline-fallback-keys">
      <span className="hero__key hero__key--space">&nbsp;</span>
    </div>
  </div>
);

// ── Main export ──────────────────────────────────────────────
export default function SplineKeyboard() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Only start loading Spline when the wrapper scrolls into view
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // start loading a bit before it's visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero__spline-wrapper" ref={wrapperRef}>
      <div className="hero__spline-inner">
        {isVisible ? (
          <SplineErrorBoundary fallback={<KeyboardFallback />}>
            <Suspense fallback={<KeyboardFallback />}>
              <Spline scene="https://prod.spline.design/4SD84TGKL4AcBD3V/scene.splinecode" />
            </Suspense>
          </SplineErrorBoundary>
        ) : (
          <KeyboardFallback />
        )}
      </div>
    </div>
  );
}