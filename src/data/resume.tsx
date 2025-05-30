import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akash Kumar Sah",
  initials: "AKS",
  url: "https://localhost:3000",
  location: "Kolkata, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/Kolkata,+West+Bengal",
  description:
    "I'm a passionate full-stack developer with expertise in HTML, CSS, JavaScript, React, and MongoDB. I love building responsive, user-friendly websites and applications that solve real-world problems. My work focuses on clean code, modern design, and efficient performance.",
  summary:
    "Passionate about building dynamic, user-friendly web applications with HTML, CSS, JavaScript, React, and MongoDB. I focus on clean code, modern UI/UX, and efficient performance to create seamless digital experiences.",
  avatarUrl: "/me.jpg",
  skills: [
    "Html",
    "Css",
    "JavaScript",
    "React",
    "Node.js",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "akash284374@gmail.com",
    tel: "7050471987",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akash284374",
        icon: Icons.github, // Make sure Icons.github is defined
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akash-kumar-sah-3217842a9",
        icon: Icons.linkedin, // Make sure Icons.linkedin is defined
        navbar: true,
      },
      Codolio: {
        name: "Codolio",
        url: "https://codolio.com/akash284374",
        icon: Icons.globe, // Replaced with github icon (since codolio icon is missing)
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Institute of Engineering And Management, Kolkata",
      href: "#",
      degree: "B.Tech 9.1 CGPA",
      logoUrl: "",
      start: "2022",
      end: "2026",
    },
    {
      school: "New Horizon School SH.Tamauni Simaria Bhagalpur, Br",
      href: "",
      degree: "Senior School Certificate Examination (Class XII)",
      logoUrl: "",
      start: "2020",
      end: "2021",
    },
    {
      school: "Mohini Devi Memorial School Araria Rs, Br",
      href: "https://wlu.ca",
      degree: "Secondary School Examination Certificate (Class X)",
      logoUrl: "",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Task Manager",
      href: "https://chatcollect.com",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "Task Manager is a productivity app designed to help users organize, track, and prioritize their daily tasks efficiently. With an intuitive interface and features like task deadlines, reminders, and categorization, it helps users stay focused and manage their time effectively.",
      technologies: [
        "JavaScript",
        "TailwindCSS",
        "React",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://raw.githubusercontent.com/akash284374/Portfolio/master/public/viidiid.mp4",
    },
  ],
  hackathons: [
    {
      title: "Iem Hacks",
      dates: "27 August 2023",
      location: "Kolkata",
      description:
        "A central hub for farmers, researchers, and green tech enthusiasts, this platform provides reliable, up-to-date insights into sustainable agriculture and emerging green technologies. Discover best practices, innovative solutions, and the latest trends — all in one place.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
