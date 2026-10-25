"use client";
import { useEffect } from "react";
export function ScrollReveals() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>(
      "main section:not(#profile), [data-reveal]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -30px 0px" },
    );
    elements.forEach((element, index) => {
      element.classList.add("reveal");
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-pending");
        if (element.hasAttribute("data-reveal"))
          element.style.transitionDelay = `${(index % 3) * 65}ms`;
        observer.observe(element);
      }
    });
    const revealAll = () =>
      elements.forEach((element) => element.classList.remove("reveal-pending"));
    reduced.addEventListener("change", revealAll);
    return () => {
      observer.disconnect();
      revealAll();
      reduced.removeEventListener("change", revealAll);
    };
  }, []);
  return null;
}
