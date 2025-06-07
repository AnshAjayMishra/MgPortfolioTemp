import { Icons } from "@/components/icons";
import { HomeIcon, Link, NotebookIcon, File} from "lucide-react";

export const DATA = {
  name: "Ansh Ajay Mishra",
  initials: "DV",
  url: "https://anshajaymishra.me",
  location: "Indore, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "20 Y/O Dev Who Loves to build and love to explore new technologies.",
 summary: "I wrote my first 'Hello, World!' program in C when I was in 9th grade. I'm passionate about application development (both web and mobile) and have a strong interest in technology and gadgets. Learn more at: https://anshajaymishra.live/about",

    // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Express.js",
    "Node.js",
    "MongoDB",
    "Postgres",
    "Docker",
    "Java",
    "Dart",
    "Flutter",
    "C",
    "C++",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://anshajaymishra.live/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://links.anshajaymishra.live", icon: Link, label: "Links" },
  ],
  contact: {
    email: "ajayanshmishra00@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anshajaymishra",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/anshajaymishra",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/anshajaymishra",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@anshajaymishraa",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ajayanshmishra00@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
       Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1_StLZXgSPh-kGW0GsnUPpP2uWA29U5U7/view?usp=drive_link",
        

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CodeClause",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/cc.png",
      start: "Oct 2023",
      end: "Dec 2023",
      description:
        "Worked as a frontend engineer ",
    },
    
    
  ],
  education: [
    {
      school: "Acropolis Institute of Technology And Research",
      href: "https://aitr.ac.in",
        degree: "Bachelor's of Technology (BTech) in Computer Science ",
      logoUrl: "/aitr.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Rajiv Gandhi Technical University",
      href: "https://rgpv.ac.in",
      degree: "Bachelor's of Technology (BTech) in Computer Science ",
      logoUrl: "/rgpv.png",
      start: "2022",
      end: "2026",
    },
    
  ],
  projects: [
   {
  title: "Mock Vault",
  href: "https://mockvault.vercel.app",
  dates: "Sept 2024 - Present",
  active: true,
  description:
    "Mock Vault is a MERN stack platform designed for students to prepare for technical interviews. It includes a question bank, previous year papers, DSA practice, and a 1:1 interview session module with an integrated compiler. It was presented at two national and international conferences.",
  technologies: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "TailwindCSS",
    "Shadcn UI",
    "Topmate.io Integration",
  ],
  links: [
    {
      type: "Website",
      href: "https://mockvault.vercel.app",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/AnshAjayMishra/mockvault-n",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/4.png",
  video: "", // Add a demo video URL here if available
},
{
  title: "Personal Portfolio",
  href: "https://anshajaymishra.vercel.app",
  dates: "Feb 2024 - Present",
  active: true,
  description:
    "My portfolio showcases my projects, blog, and experience. Designed and built using modern web technologies with a focus on performance, responsiveness, and accessibility. Includes an integrated spotify api.",
  technologies: [
    "Next.js",
    "React",
    "TailwindCSS",
    "TypeScript",
    "Shadcn UI",
    "Framer Motion",
  ],
  links: [
    {
      type: "Website",
      href: "https://anshajaymishra.vercel.app",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/AnshAjayMishra/itsprivatebuddy",
      icon: <Icons.github className="size-3" />,
    },
   
  ],
  image: "/9.png",
  video: "", // Add a screen recording or walkthrough if you'd like
},
  ],
  hackathons: [
    {
      title: "Code Urja 1.0",
      dates: "March 23rd - 25th, 2025",
      location: "Indore, India",
      description:
        "Developed a web application which store record of land.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "#",
      links: [],
    }, 
  
  ],
  Resume:[
    {
      title: "Resume",
      url: "https://drive.google.com/file/d/1_StLZXgSPh-kGW0GsnUPpP2uWA29U5U7/view?usp=drive_link",
    }
  ]
} as const;
