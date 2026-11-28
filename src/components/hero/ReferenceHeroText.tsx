import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import SocialButtons from "../../social-buttons";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { siteConfig } from "../../config/site";
import "./ReferenceHeroText.css";

// Register the SplitText plugin
gsap.registerPlugin(SplitText);

export interface ReferenceHeroTextProps {
  greeting?: string;
  name?: string;
  subtitle?: string;
  titles?: string[];
}

export const ReferenceHeroText = ({
  greeting = "Hello! I'm",
  name = "YASH KSHATRIYA",
  subtitle = "Ahmedabad-based",
  titles = ["FULL-STACK DEVELOPER", "REACT · NODE · AWS · AI/ML"],
}: ReferenceHeroTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // Use gsap.context to ensure scoping and cleanup
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(containerRef.current);

      const landingText = new SplitText(
        [
          ...q(".landing-info .landing-subtitle"),
          ...q(".landing-intro .landing-greeting"),
          ...q(".landing-intro h1"),
        ] as any,
        {
          type: "chars,lines",
          linesClass: "split-line",
        }
      );

      gsap.fromTo(
        landingText.chars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );

      const TextProps = { type: "chars,lines", linesClass: "split-h2" };

      const landingText2 = new SplitText(q(".landing-h2-info") as any, TextProps);
      gsap.fromTo(
        landingText2.chars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );

      gsap.fromTo(
        q(".landing-info-h2") as any,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power1.inOut",
          y: 0,
          delay: 0.8,
        }
      );

      gsap.fromTo(
        q(".landing-socials-wrapper") as any,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          delay: 1.2,
        }
      );

      gsap.fromTo(
        q(".landing-resume-wrapper") as any,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          delay: 1.4,
        }
      );

      const landingText3 = new SplitText(q(".landing-h2-info-1") as any, TextProps);
      const landingText4 = new SplitText(q(".landing-h2-1") as any, TextProps);
      const landingText5 = new SplitText(q(".landing-h2-2") as any, TextProps);

      const LoopText = (Text1: any, Text2: any) => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        const delay = 4;
        const delay2 = delay * 2 + 1; // 9

        tl.fromTo(
          Text2.chars,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            duration: 1.2,
            ease: "power3.inOut",
            y: 0,
            stagger: 0.1,
            delay: delay,
          },
          0
        )
          .fromTo(
            Text1.chars,
            { y: 80 },
            {
              duration: 1.2,
              ease: "power3.inOut",
              y: 0,
              stagger: 0.1,
              delay: delay2,
            },
            1
          )
          .fromTo(
            Text1.chars,
            { y: 0 },
            {
              y: -80,
              duration: 1.2,
              ease: "power3.inOut",
              stagger: 0.1,
              delay: delay,
            },
            0
          )
          .to(
            Text2.chars,
            {
              y: -80,
              duration: 1.2,
              ease: "power3.inOut",
              stagger: 0.1,
              delay: delay2,
            },
            1
          );
      };

      LoopText(landingText2, landingText3);
      LoopText(landingText4, landingText5);
    }, containerRef);

    return () => ctx.revert();
  }, [greeting, name, subtitle, titles]);

  // Split name by space.
  const nameParts = name.trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <div ref={containerRef} className="landing-section-new">
      <div className="landing-container-new">
        <div className="landing-intro">
          <p className="landing-greeting">{greeting}</p>
          <h1>
            {firstName}
            <br />
            <span>{lastName}</span>
          </h1>
          <div className="landing-socials-wrapper" style={{ marginTop: "20px" }}>
            <SocialButtons />
          </div>
        </div>
        <div className="landing-info">
          <p className="landing-subtitle">{subtitle}</p>
          {/* Rotating titles: rendered twice for the loop animation; the second copy is hidden
              from assistive tech so each title is announced once. Spans (not divs) keep the
              markup valid inside <p>; they are flex items / absolutely positioned, so they lay
              out exactly like the previous divs. */}
          <p className="landing-titles landing-info-h2">
            <span className="landing-h2-1">{titles[0]}</span>
            <span className="landing-h2-2">{titles[1]}</span>
          </p>
          <p className="landing-titles" aria-hidden="true">
            <span className="landing-h2-info">{titles[1]}</span>
            <span className="landing-h2-info-1">{titles[0]}</span>
          </p>
          <div className="landing-resume-wrapper" style={{ marginTop: "16px", pointerEvents: "auto" }}>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <InteractiveHoverButton>
                Resume
              </InteractiveHoverButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
