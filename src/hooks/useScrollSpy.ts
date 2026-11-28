import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Trigger when the section occupies the middle part of the screen
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const observed = new Set<string>();

    const observeAvailable = () => {
      sectionIds.forEach((id) => {
        if (observed.has(id)) return;
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
          observed.add(id);
        }
      });
      return observed.size === sectionIds.length;
    };

    // Sections below the hero are lazy-loaded, so some ids may not exist yet on mount.
    // Watch the DOM until every section has appeared, then stop watching.
    let mutationObserver: MutationObserver | null = null;
    if (!observeAvailable()) {
      mutationObserver = new MutationObserver(() => {
        if (observeAvailable()) {
          mutationObserver?.disconnect();
          mutationObserver = null;
        }
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      mutationObserver?.disconnect();
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection || sectionIds[0] || '';
};
