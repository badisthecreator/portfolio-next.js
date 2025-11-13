import React from "react";

import { 
  LuBriefcase,         // Generic job or role icon
  LuGraduationCap,     // Education or certification icon
  LuLaptop2,           // Internship or training icon
  LuCode2,             // Freelance or side project icon
  LuRocket,            // Startup or launch icon
  LuUsers,             // Team collaboration or leadership icon
  LuGlobe,             // Remote or global work icon
  LuLightbulb,         // Innovation or hackathon icon
  LuWrench,            // Technical or hands-on work icon
  LuBookOpen,          // Learning or bootcamp icon
} from "react-icons/lu";


import p_1 from "@/public/p_1.png";
import p_2 from "@/public/p_2.png";
import p_3 from "@/public/p_3.png";

const aboutText = (
  <><p className="mb-3">
        After graduating with a&nbsp;
        <span className="font-medium">Baccalaureate in technical technology</span>, I decided to pursue my
        passion for ******. I enrolled in the Higher Institute 
      of ****** and learned&nbsp;
        <span className="font-medium">******</span>.&nbsp;
        <span className="italic">My favorite part of ******</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is&nbsp;
        <span className="font-medium">
          ******, ******, ******, and ******
        </span>
        . I am also familiar with ****** and ******. I am always looking to
        learn new technologies. I am currently looking for a&nbsp;
        <span className="font-medium">full-time position</span> as a ******.
      </p>
      <p>
        <span className="italic">When I'm not ******</span>, I enjoy building ******, walking in nature, and playing sports with my friends. I also enjoy&nbsp;
        <span className="font-medium">learning new things</span>. I am currently
        learning about&nbsp;
        <span className="font-medium">human development</span>. I'm also
        learning how to grow a garden.
      </p>
    </>
)
const introText = (
  <>
    <span className="font-bold">Hello, I'm Ricardo.</span> I'm a&nbsp;
    <span className="font-bold">Full-Stack Developer</span> with&nbsp;
    <span className="font-bold">4-years</span> of experience. I enjoy building&nbsp;
    <span className="italic">solutions</span>. My focus is&nbsp;
    <span className="underline">scalable web apps</span>.
  </>
);
export const aboutData = {
  aboutText,
};
export const contactData = {
  email: "xxxx@gmail.com",
};

export const introData = {
  pictures: ["/me_1.png", "/me_2.png"],
  introText,
  cvUrl: "/cv.pdf",
  linkedinUrl: "https://www.linkedin.com/in/ricardo/",
  githubUrl: "https://github.com/ricardo",
};

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Job Title or Role",
    location: "Company or Location",
    description: "Brief summary of responsibilities, achievements, or focus areas.",
    icon: React.createElement(LuBriefcase),
    date: "Start Year - End Year",
  },
  {
    title: "Education or Certification",
    location: "Institution or School Name",
    description: "Overview of what was studied or accomplished.",
    icon: React.createElement(LuGraduationCap),
    date: "Year or Range",
  },
  {
    title: "Internship or Training",
    location: "Organization or Department",
    description: "Key contributions or skills developed during the experience.",
    icon: React.createElement(LuLaptop2),
    date: "Year",
  },
  {
    title: "Freelance or Side Project",
    location: "Remote or City",
    description: "Short description of the work, tools used, and outcomes.",
    icon: React.createElement(LuCode2),
    date: "Year or Range",
  },
] as const;

export const copyrightData = {
  year: 2030,
  name: "Ricardo",
};

export const projectsData = [
  {
  title: "Feedback Pulse",
  description: "User feedback platform with sentiment tracking.",
  tags: ["Next.js", "Tailwind", "MongoDB"],
  imageUrl: p_1,
  url: "https://feedback-pulse.vercel.app/",
},
{
  title: "Freelance Hub",
  description: "Connects freelancers with clients.",
  tags: ["Next.js", "TypeScript", "Clerk"],
  imageUrl: p_2,
  url: "https://freelance-hub.vercel.app/",
},
{
  title: "WordAlytics",
  description: "Text analytics dashboard.",
  tags: ["React", "Chart.js", "Node.js"],
  imageUrl: p_3,
  url: "https://wordlytics.vercel.app/",
}
] as const;

export const skillsData = [
  "Arduino",
  "Tinkercad",
  "Proteus",
  "Fritzing",
  "PlatformIO",
  "Serial Monitor",
  "want something else ? , don't worry i'm a fast learner",
] as const;
