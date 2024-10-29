import Navigation from "@/components/navigation";
import SkillsSection from "@/components/skillsSection";
import ProjectsSection from "@/components/projectsSection";
import ExperienceSection from "@/components/experienceSection";
import ContactForm from "@/components/contactForm";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
