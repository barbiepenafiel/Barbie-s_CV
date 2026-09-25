import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ProfileSection } from "@/components/ProfileSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsExperienceSection } from "@/components/SkillsExperienceSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <ProfileSection />
        <EducationSection />
        <SkillsExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
