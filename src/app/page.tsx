import { AboutSection } from "@/components/AboutSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ScrollReveals } from "@/components/ScrollReveals";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/SkillsSection";
import { ProcessSection } from "@/components/ProcessSection";
export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <ProfileSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProcessSection />
        <EducationSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ScrollReveals />
    </div>
  );
}
