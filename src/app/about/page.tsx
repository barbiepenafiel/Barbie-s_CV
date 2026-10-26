import Link from "next/link";
import type { Metadata } from "next";
import { profile } from "@/lib/content";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { GitHubActivity } from "@/components/GitHubActivity";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveals } from "@/components/ScrollReveals";

export const metadata: Metadata = {
  title: "About Barbie Peñafiel | Design & Development",
  description: profile.about,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader innerPage />
      <main id="main" tabIndex={-1}>
        <div className="wrap about-page-intro">
          <Link href="/" className="text-link">
            ← Back to home
          </Link>
          <p className="eyebrow">A little more about me</p>
          <h1 className="display">
            Designing with care.
            <br />
            <em>Growing with purpose.</em>
          </h1>
          <p>{profile.introduction}</p>
        </div>
        <AboutSection standalone />
        <div className="wrap">
          <GitHubActivity />
        </div>
        <EducationSection />
        <ExperienceSection />
        <AchievementsSection />
        <div className="wrap about-page-actions">
          <Link href="/#contact" className="button button-primary">
            Let’s create something ↗
          </Link>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="button button-outline"
          >
            View my CV (PDF) ↗
          </a>
        </div>
      </main>
      <SiteFooter />
      <ScrollReveals />
    </div>
  );
}
