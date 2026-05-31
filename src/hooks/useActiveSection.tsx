import { useEffect, useState } from "react";

interface UseActiveSectionProps {
  sections: string[];
}

export default function useActiveSection({ sections }: UseActiveSectionProps) {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      return window.location.hash.replace("#", "");
    }
    return sections[0] || "";
  });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    if (!sections || sections.length === 0) return;

    sections.forEach((sectionId) => {
      const interSectedElement = document.getElementById(sectionId);
      const scrollContainer = document.querySelector("main") || null;

      if (!interSectedElement) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          root: scrollContainer,
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        },
      );
      observer.observe(interSectedElement);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [sections]);

  return activeSection;
}
