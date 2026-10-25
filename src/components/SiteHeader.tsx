"use client";
import { useEffect, useRef, useState } from "react";
import { achievements, navLinks, profile } from "@/lib/content";
const links = [
  ...navLinks.slice(0, -1),
  ...(achievements.length
    ? [{ label: "Achievements", href: "#achievements" }]
    : []),
  navLinks[navLinks.length - 1],
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#profile");
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);
      let current = "#profile";
      for (const link of links) {
        const section = document.querySelector(link.href);
        if (section && section.getBoundingClientRect().top <= 160)
          current = link.href;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      )
        current = "#contact";
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    const resize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
      update();
    };
    window.addEventListener("resize", resize);
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        if (header.current?.contains(document.activeElement))
          toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", resize);
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);
  const navItem = (link: (typeof links)[number], mobile = false) => (
    <a
      key={link.href}
      href={link.href}
      aria-current={active === link.href ? "location" : undefined}
      onClick={() => {
        setOpen(false);
        if (mobile)
          document
            .querySelector<HTMLElement>(link.href)
            ?.focus({ preventScroll: true });
      }}
      className={`relative flex min-h-11 items-center text-xs transition-colors ${mobile ? "border-b border-border py-2" : "after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:bg-foreground after:transition-transform"} ${active === link.href ? "font-semibold after:scale-x-100" : "text-muted after:scale-x-0 hover:text-foreground hover:after:scale-x-100"}`}
    >
      {link.label}
    </a>
  );
  return (
    <header
      ref={header}
      className={`site-header sticky top-0 z-40 border-b border-border bg-background transition-shadow ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="wrap flex min-h-20 items-center justify-between gap-6">
        <a
          href="#profile"
          aria-label={`${profile.firstName} ${profile.lastName}, home`}
          className="brand-link"
        >
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-copy">
            <strong>
              {profile.firstName} {profile.lastName}
            </strong>
            <small>Design & development</small>
          </span>
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 lg:flex"
        >
          {links.map((link) => navItem(link))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="header-contact hidden min-h-11 items-center gap-3 text-xs sm:inline-flex"
        >
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
        <button
          ref={toggle}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
          className="relative flex h-11 w-11 items-center justify-center border border-border lg:hidden"
        >
          <span
            aria-hidden="true"
            className={`absolute h-px w-4 bg-foreground transition-transform ${open ? "rotate-45" : "-translate-y-1"}`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-px w-4 bg-foreground transition-transform ${open ? "-rotate-45" : "translate-y-1"}`}
          />
        </button>
      </div>
      <div
        id="mobile-navigation"
        className="mobile-menu"
        data-open={open}
        inert={!open}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile navigation" className="wrap pb-6">
            {links.map((link) => navItem(link, true))}
          </nav>
        </div>
      </div>
    </header>
  );
}
