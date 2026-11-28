import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

/** Starts Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync. */
export function startSmoothScroll(): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);

  const tick = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis?.destroy();
    lenis = null;
  };
}

/** Smoothly scrolls to an element or Y offset; falls back to native scrolling if Lenis is off. */
export function smoothScrollTo(target: HTMLElement | number) {
  if (lenis) {
    // Lenis caches the scroll limit and refreshes it on a debounced resize; if content was just
    // added (e.g. the lazy sections), refresh it first or the target is clamped to the old limit.
    lenis.resize();
    lenis.scrollTo(target, { duration: 1.4 });
  } else if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
