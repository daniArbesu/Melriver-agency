import { useEffect } from 'react';
import Cases from './components/Cases';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroOverlay from './components/IntroOverlay';
import { gsap } from 'gsap';

function App() {
  useEffect(() => {
    // to avoid flashing
    gsap.to('body', { css: { visibility: 'visible' }, duration: 0 });

    // GSAP timeline
    const tl = gsap.timeline();

    tl.from('.line span', {
      y: 100,
      ease: 'power4.out',
      duration: 1.8,
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
  });

  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Hero />
      <Cases />
    </div>
  );
}

export default App;
