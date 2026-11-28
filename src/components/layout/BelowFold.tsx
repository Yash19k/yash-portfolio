import React, { useEffect } from 'react';
import { About } from '../about/About';
import CareerTimeline from '../../career-timeline';
import MyWork from '../../portfolio2/MyWork/MyWork';
import { TechStack } from '../../tech-stack';
import { Contact } from '../contact/Contact';
import { smoothScrollTo } from '../../lib/smoothScroll';

/**
 * Everything below the hero, loaded as one lazy chunk so the first screen renders with less
 * JavaScript. The sections still mount right away (not on scroll), so crawlers see them, and
 * they mount together so the GSAP scroll animations measure the final layout.
 */
const BelowFold: React.FC = () => {
  // The sections arrive after the initial render, so the browser's own jump to a #fragment
  // can miss them. Scroll to the target once they exist.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) smoothScrollTo(el);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <About />
      <CareerTimeline />
      <MyWork />
      <TechStack />
      <Contact />
    </>
  );
};

export default BelowFold;
export { Footer } from './Footer';
