import { useEffect, useRef, useState } from "react";
import "./MyWork.css";
import WorkImage from "./WorkImage";
import { referenceProjects, projectDetails } from "../data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowBack, MdArrowOutward, MdInfoOutline } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const MyWork = () => {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const sectionRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const flex = flexRef.current;
    if (!section || !flex) return;

    const mm = gsap.matchMedia();

    // Horizontal scroll only on desktop; mobile stacks the cards vertically.
    mm.add("(min-width: 769px)", () => {
      // How far the card row must slide so the last card's right edge meets the viewport edge.
      // Measured from the last card (not scrollWidth: the row's decorative ::before/::after
      // lines are 50000vw wide). The current x offset is subtracted so it works mid-scroll.
      const distance = () => {
        const last = flex.lastElementChild as HTMLElement | null;
        if (!last) return 0;
        const currentX = Number(gsap.getProperty(flex, "x")) || 0;
        const right = last.getBoundingClientRect().right - currentX;
        return Math.max(0, Math.round(right - document.documentElement.clientWidth));
      };
      // Scroll length spent sliding (longer than the slide itself so it feels unhurried),
      // then a short pause after the last card arrives, before the page moves on.
      const SLIDE_PACE = 1.6;
      const slideScroll = () => Math.round(distance() * SLIDE_PACE);
      const hold = () => Math.round(window.innerHeight * 0.25);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${slideScroll() + hold()}`,
          scrub: 1, // eases toward the scroll position instead of snapping 1:1
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(flex, { x: () => -distance(), ease: "none", duration: () => slideScroll() })
        .to({}, { duration: () => hold() });
    });

    // Content above (hero, timeline, images, web fonts) can change height after mount,
    // which would leave the pin start/end stale. Re-measure whenever the page resizes.
    let raf = 0;
    let lastHeight = document.body.offsetHeight;
    const refresh = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        lastHeight = document.body.offsetHeight;
      });
    };
    const ro = new ResizeObserver(() => {
      // Ignore the height change caused by our own refresh (pin spacing).
      if (Math.abs(document.body.offsetHeight - lastHeight) > 1) refresh();
    });
    ro.observe(document.body);
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("load", refresh);
      // revert() removes the pin-spacer wrapper and inline styles, so a re-run
      // (e.g. React StrictMode in dev) starts from a clean DOM.
      mm.revert();
    };
  }, []);

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2 className="cursor-target">
          My <span>Work</span>
        </h2>
        <div className="work-flex" ref={flexRef}>
          {referenceProjects.map((project, index) => {
            const isFlipped = !!flippedCards[index];
            const details = projectDetails[project.detailKey];

            return (
              <div className="work-box" key={index}>
                <div className={`work-card-inner ${isFlipped ? "is-flipped" : ""}`}>
                  
                  {/* FRONT FACE */}
                  <div className="work-card-front">
                    <div className="work-info">
                      <div className="work-title">
                        <h3>0{index + 1}</h3>
                        <div>
                          <h4>{project.title}</h4>
                          <p>{project.category}</p>
                        </div>
                      </div>
                    </div>
                    <WorkImage image={project.image} alt={`${project.title}: ${project.category} (screenshot)`} link={project.link} video={project.video} />
                    
                    <div className="work-tools">
                      <h4>Tools and features</h4>
                      <p>{project.tools}</p>
                    </div>
                    
                    {/* Action links row */}
                    <div className="work-links">
                      {/* GitHub button (left) */}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-action-btn github-btn"
                        >
                          <FaGithub style={{ marginRight: '6px', fontSize: '16px' }} />
                          GitHub
                        </a>
                      ) : (
                        <span className="work-action-btn disabled-btn">
                          <FaGithub style={{ marginRight: '6px', fontSize: '16px' }} />
                          GitHub
                        </span>
                      )}

                      {/* Live Demo button (center - only when deployed) */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-action-btn live-btn"
                        >
                          <MdArrowOutward style={{ marginRight: '6px', fontSize: '16px' }} />
                          Live Demo
                        </a>
                      )}

                      {/* Know More button (right) */}
                      <button
                        type="button"
                        onClick={() => setFlippedCards(prev => ({ ...prev, [index]: true }))}
                        className="work-action-btn know-more-btn"
                      >
                        <MdInfoOutline style={{ marginRight: '6px', fontSize: '16px' }} />
                        Know More
                      </button>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="work-card-back" data-lenis-prevent>
                    <div className="work-back-header">
                      <div className="work-back-title">
                        <span>0{index + 1}</span>
                        <h4>{project.title}</h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFlippedCards(prev => ({ ...prev, [index]: false }))}
                        className="work-back-close"
                        aria-label={`Back to ${project.title} overview`}
                      >
                        <MdArrowBack />
                        Back
                      </button>
                    </div>

                    <p className="work-back-lead">{details.overview}</p>

                    <ul className="work-back-list">
                      {details.features.map((feature, fIdx) => (
                        <li key={fIdx}>{feature}</li>
                      ))}
                    </ul>

                    <dl className="work-back-meta">
                      <div>
                        <dt>Built with</dt>
                        <dd>{details.technologies}</dd>
                      </div>
                      <div>
                        <dt>My role</dt>
                        <dd>{details.contribution}</dd>
                      </div>
                    </dl>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
