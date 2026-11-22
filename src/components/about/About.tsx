import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../ui/SectionHeading';
import { aboutContent } from '../../config/site';
import { InvertedCursor } from '../ui/inverted-cursor';

gsap.registerPlugin(ScrollTrigger);

const highlightedWords = new Set(aboutContent.highlightedWords.map((w) => w.toLowerCase()));

const fadeRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  const paragraph1Words = aboutContent.fullText.split(' ');
  const paragraph2Words = aboutContent.secondParagraph.split(' ');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wordEls = wordsRef.current?.querySelectorAll('.about-word');
      if (!wordEls || wordEls.length === 0) return;

      gsap.set(wordEls, { opacity: 0.15 });

      gsap.to(wordEls, {
        opacity: 1,
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: true,
          id: 'about-text-reveal',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Scoped inverted cursor — only active inside About */}
      <InvertedCursor containerRef={sectionRef} />

      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <SectionHeading
        number="01"
        title="About Me"
        subtitle={aboutContent.subtitle}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Scroll-Revealed Statement */}
        <div className="lg:col-span-8 space-y-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-surface/70 border border-white/[0.08] backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Ambient corner highlight */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Scroll-Scrubbed Word Reveal */}
            <div ref={wordsRef}>
              {/* Paragraph 1 — Main statement */}
              <h3 className="font-normal leading-[1.35] tracking-tight font-display" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3rem)' }}>
                {paragraph1Words.map((word, i) => {
                  const isHighlight = highlightedWords.has(word.toLowerCase());

                  return (
                    <span
                      key={`p1-${i}`}
                      className={`about-word inline-block mr-[0.28em] mb-1.5 ${
                        isHighlight
                          ? 'text-violet-300'
                          : 'text-slate-50'
                      }`}
                    >
                      {word}
                    </span>
                  );
                })}
              </h3>

              {/* Paragraph 2 — Supporting statement (new line, smaller) */}
              <p className="mt-5 leading-[1.6] text-slate-300" style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)' }}>
                {paragraph2Words.map((word, i) => (
                  <span
                    key={`p2-${i}`}
                    className="about-word inline-block mr-[0.25em] mb-1"
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>

            {/* Sub-Bio */}
            <p className="mt-8 pt-6 border-t border-white/[0.06] text-slate-400 text-[15px] leading-relaxed">
              {aboutContent.subBio}
            </p>
          </div>
        </div>

        {/* Right: what I work on, each backed by a project */}
        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="lg:col-span-4"
        >
          <h3 className="text-sm text-slate-400 mb-2">What I work on</h3>
          <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {aboutContent.focusAreas.map((area) => (
              <motion.li key={area.title} variants={fadeRight} className="py-5">
                <h4 className="text-[17px] font-medium text-white">{area.title}</h4>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{area.body}</p>
                <p className="mt-2.5 font-mono text-xs text-slate-500">
                  Built into <span className="text-violet-300">{area.seenIn}</span>
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
