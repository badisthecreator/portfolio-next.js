import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { introData, aboutData, contactData } from "@/lib/data";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro pictures={introData.pictures} cvUrl={introData.cvUrl} githubUrl={introData.githubUrl} introText={introData.introText} linkedinUrl={introData.linkedinUrl}/>
      <SectionDivider />
      <About aboutText={aboutData.aboutText} />
      <Projects />
      <Skills />
      <Experience />
      <Contact email={contactData.email}/>
    </main>
  );
}
