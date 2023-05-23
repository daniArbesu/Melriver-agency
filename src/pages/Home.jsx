import { useEffect, useState } from 'react';
import Cases from '../components/Cases';
import Hero from '../components/Hero';
import IntroOverlay from '../components/IntroOverlay';
import { gsap } from 'gsap';

// GSAP timeline
const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  // show title with animation
  tl.from('.line span', {
    y: 100,
    ease: 'power4.out',
    duration: 1.8,
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  }) // move down the title black boxes
    .to('.overlay-top', {
      duration: 1.6,
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4,
    }) // make disappear boxes from right to left
    .to('.overlay-bottom', {
      duration: 1.6,
      width: 0,
      ease: 'expo.inOut',
      stagger: 0.4,
      delay: -0.8,
    }) // disable intro-overlay to be able to select things
    .to('.intro-overlay', {
      duration: 0,
      css: { display: 'none' },
    })
    .from('.case-image img', {
      duration: 1.6,
      scale: 1.4,
      ease: 'expo.inOut',
      stagger: 0.4,
      delay: -2,
      onComplete: completeAnimation,
    });
};

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    // solution to avoid double render in React Strictmode
    const ctx = gsap.context(() => {
      homeAnimation(completeAnimation);
    });
    return () => ctx.revert(); // <- cleanup!
  });

  return (
    <>
      {animationComplete ? null : <IntroOverlay />}
      <Hero />
      <Cases />
    </>
  );
};

export default Home;
