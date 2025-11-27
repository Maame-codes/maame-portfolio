import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Layout,
  Server,
  Gauge,
  Download,
  ChevronRight,
  Send,
  Menu,
  X,
  Briefcase,
} from "lucide-react";

// --- DATA SECTION ---
const data = {
  name: "Maame Afua Fordjour",
  role: "Junior Software Engineer",
  aboutHeadline: "Building digital experiences that matter.",
  aboutSummary:
    "I am a Junior Software Engineer driven by a strong sense of tech enthusiasm and a passion for creating. I specialize in developing functional, scalable systems and constantly seek out new methodologies and emergent practices to engineer robust, user-centric solutions to real-world challenges.",
  linkedin: "https://www.linkedin.com/in/maame-afua-a-p-fordjour-100585171",
  email: "maameafia272@gmail.com",
  phone: "+447720186199",

  services: [
    {
      icon: <Code2 />,
      title: "Frontend Development",
      desc: "Building responsive, accessible, and performant interfaces using React, Vite, and Tailwind CSS.",
    },
    {
      icon: <Layout />,
      title: "UI/UX Implementation",
      desc: "Translating designs into pixel-perfect, intuitive user experiences with a focus on usability.",
    },
    {
      icon: <Server />,
      title: "Backend Integration",
      desc: "Connecting frontends to robust backends using Node.js and managing APIs efficiently.",
    },
    {
      icon: <Gauge />,
      title: "Web Performance",
      desc: "Optimizing applications for speed, SEO, and accessibility to ensure a broad reach.",
    },
  ],

  projects: [
    {
      title: "WastePlate",
      description:
        "A profitability & waste tracker for restaurants. Allows kitchen staff to instantly log wasted ingredients via a search-and-autofill interface, calculating real-time financial loss.",
      tech: ["React", "Vite", "Node.js", "Netlify"],
      liveLink: "https://wasteplate.netlify.app/",
      image: "wasteplate.png",
    },
    {
      title: "Chicken Intruder Game Engine",
      description:
        "Engineered a high-performance, cross-platform 2D game engine capable of running 60 FPS on mobile and desktop using a single unified codebase with custom physics.",
      tech: ["JavaScript", "HTML5 Canvas", "Pointer Events API"],
      liveLink: "https://chickenintruder.netlify.app/",
      image: "chicken intruder.png",
    },
    {
      title: "M.Brands Official Site",
      description:
        "A modern, fully responsive creative agency website acting as the digital storefront showing portfolio items and services with a sleek design.",
      tech: ["React", "Tailwind CSS", "Vite"],
      liveLink: "https://mbrandsltd.netlify.app/",
      image: "mbrandltd.png",
    },
  ],

  experience: [
    {
      date: "Sep 2025 - Present",
      role: "Junior Software Engineer",
      company: "M.brands Ltd",
      desc: "Collaborating in an Agile environment, utilizing Git for version control, configuring CI/CD pipelines, and refactoring legacy codebases for maintainability.",
    },
    {
      date: "Nov 2022 - Jun 2025",
      role: "IT Support Administrator",
      company: "M.brands Ltd",
      desc: "Diagnosed resolved hardware/software issues, managed security protocols, provided staff training, and collaborated with vendors on upgrades.",
    },
    {
      date: "Jul 2021 - Aug 2022",
      role: "IT Assistant",
      company: "IDL- KNUST",
      desc: "Handled customer queries, database maintenance, setup hardware/software, and provided general IT support.",
    },
  ],

  education: [
    {
      date: "2025 - 2027",
      degree: "MSc Computer Science",
      school: "Queen Mary University of London",
      desc: "Activities: Computer Science Club, Women in STEM",
    },
    {
      date: "2017 - 2021",
      degree: "BSc Development Planning",
      school: "KNUST, Ghana",
      desc: "Grade: 2:1. Activities: Robotics & Computer Science Club alumni support.",
    },
  ],
};

// --- REUSABLE COMPONENTS ---

// A reusable button component to ensure consistent animations across the site
const Button = ({ children, primary, href, icon }) => {
  const baseClasses =
    "px-6 py-3 font-medium rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center transform active:scale-95";
  const primaryClasses =
    "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5";
  const secondaryClasses =
    "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:shadow-md";

  const classes = `${baseClasses} ${
    primary ? primaryClasses : secondaryClasses
  }`;

  return (
    <a href={href} className={classes}>
      {children}{" "}
      {icon && (
        <span className="ml-2 group-hover:translate-x-1 transition-transform">
          {icon}
        </span>
      )}
    </a>
  );
};

// --- MAIN SECTIONS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClasses =
    "hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100/50 support-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        <a
          href="#"
          className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-dark to-primary transition-all duration-300 hover:opacity-80"
        >
          {data.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#about" className={navLinkClasses}>
            About
          </a>
          <a href="#projects" className={navLinkClasses}>
            Projects
          </a>
          <a href="#resume" className={navLinkClasses}>
            Resume
          </a>
          <a href="#contact" className={navLinkClasses}>
            Contact
          </a>
          <div className="h-6 w-px bg-gray-200 mx-2"></div>
          <div className="flex items-center space-x-4">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 hover:text-primary transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 shadow-sm animate-fade-in-up">
          <div className="flex flex-col space-y-4 text-sm font-medium text-gray-600">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition"
            >
              Projects
            </a>
            <a
              href="#resume"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  // Hero section with subtle background movement
  <section className="relative pt-36 md:pt-44 pb-24 px-6 md:px-12 max-w-6xl mx-auto overflow-hidden">
    {/* NEW BACKGROUND LAYER: Subtle movement and texture */}
    <div className="absolute inset-0 bg-primary-light/50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] opacity-30 pointer-events-none"></div>

    {/* Animated Background Globs with 'animate-pulse-slow' */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-light/40 rounded-full blur-[120px] -z-10 opacity-60 mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
    <div
      className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-light/30 rounded-full blur-[100px] -z-10 opacity-50 mix-blend-multiply pointer-events-none animate-pulse-slow"
      style={{ animationDelay: "2s" }}
    ></div>

    <div className="relative z-10">
      <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-light/50 text-primary-dark text-sm font-medium px-3 py-1 rounded-full mb-8 shadow-sm animate-fade-in-up">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span>Available for work</span>
      </div>

      {/* Requested Bounce Animation on Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-dark mb-6 leading-tight animate-bounce-in">
        Building digital <br className="hidden md:block" />
        <span className="text-primary">experiences</span> that matter.
      </h1>

      {/* Staggered fade-ins for content below */}
      <p
        className="text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed animate-fade-in-up opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        I'm a {data.role} & Master's Student focused on crafting clean,
        user-centric web interfaces. I blend technical expertise with design
        principles to solve complex problems.
      </p>

      <div
        className="flex flex-wrap gap-4 animate-fade-in-up opacity-0"
        style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
      >
        <Button primary href="#projects" icon={<ChevronRight size={20} />}>
          View Projects
        </Button>
        <Button href="#resume" icon={<Briefcase size={20} />}>
          See Experience
        </Button>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Text Section with subtle hover effect */}
      <div className="group transition-all duration-300 hover:translate-x-2">
        <h2 className="text-3xl font-bold text-dark mb-6 relative inline-block after:absolute after:bottom-1 after:left-0 after:bg-primary/30 after:h-3 after:w-full after:-z-10 after:transition-all group-hover:after:h-4">
          About Me
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
          {data.aboutSummary}
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          Driven by curiosity for how things work on the internet, what began as
          a hobby blossomed into a fulfilling career. I thrive on transforming
          ideas into tangible digital solutions that enhance user experiences.
          When I'm not coding, you will honestly find me catching some zzz's
          (sleep is important!), playing games, watching anime or indulging in
          my love for travel.
        </p>
      </div>

      {/* IMAGE SECTION with hover zoom and tilt hint */}
      <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white transform transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20 hover:-rotate-1 group">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img
          src="/image_0.png"
          alt="Maame Afua Fordjour"
          className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.services.map((service, index) => (
        // Card with lift effect and icon wiggle on hover
        <div
          key={index}
          className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 group"
        >
          <div className="w-14 h-14 bg-primary-light/40 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section
    id="projects"
    className="py-24 px-6 md:px-12 max-w-6xl mx-auto bg-gray-50/60 rounded-[3rem] my-20 relative overflow-hidden"
  >
    {/* Subtle background decoration */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-light/30 rounded-full blur-[100px] -z-10 opacity-50 pointer-events-none"></div>

    <h2 className="text-4xl font-bold text-dark mb-4 text-center">
      Selected Projects
    </h2>
    <p className="text-gray-600 mb-16 text-center max-w-2xl mx-auto text-lg">
      A collection of work that demonstrates my technical capabilities.
    </p>

    <div className="space-y-16">
      {data.projects.map((project, index) => (
        // Project Card with hover lift and image zoom
        <div
          key={index}
          className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 md:grid md:grid-cols-5 group shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-in-out"
        >
          {/* UPDATED: Image Display Block */}
          <div className="md:col-span-3 bg-primary-light/20 h-72 md:h-auto flex items-center justify-center p-10 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            {/* Image container for zoom effect */}
            <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1">
              <img
                src={`/${project.image}`} // References image from public folder
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="md:col-span-2 p-10 flex flex-col justify-center relative">
            <h3 className="text-3xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <Button
                primary
                href={project.liveLink}
                icon={<ExternalLink size={18} />}
              >
                View Live
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Added hover effect to timeline items
const TimelineItem = ({ date, title, subtitle, desc }) => (
  <div className="relative pl-10 pb-12 border-l-2 border-primary/20 last:pb-0 group transition-all duration-300 hover:border-primary">
    <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-primary shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:bg-primary-light"></div>
    <span className="text-primary font-semibold text-sm mb-2 block tracking-wider uppercase">
      {date}
    </span>
    <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
      {title}
    </h3>
    <h4 className="text-gray-500 font-medium mb-4 text-lg">{subtitle}</h4>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const ResumeTimeline = () => (
  <section id="resume" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-dark mb-4 text-center">
      Experience & Education
    </h2>
    <p className="text-gray-600 mb-16 text-center max-w-xl mx-auto text-lg">
      My professional journey so far.
    </p>

    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <h3 className="text-2xl font-bold text-dark mb-10 flex items-center">
          <div className="w-12 h-12 bg-primary-light/40 text-primary rounded-xl flex items-center justify-center mr-4 shadow-sm">
            <Briefcase size={24} />
          </div>
          Work Experience
        </h3>
        <div className="ml-2">
          {data.experience.map((exp, index) => (
            <TimelineItem
              key={index}
              date={exp.date}
              title={exp.role}
              subtitle={exp.company}
              desc={exp.desc}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-dark mb-10 flex items-center">
          <div className="w-12 h-12 bg-primary-light/40 text-primary rounded-xl flex items-center justify-center mr-4 shadow-sm">
            <Download size={24} />
          </div>
          Education
        </h3>
        <div className="ml-2">
          {data.education.map((edu, index) => (
            <TimelineItem
              key={index}
              date={edu.date}
              title={edu.degree}
              subtitle={edu.school}
              desc={edu.desc}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section
    id="contact"
    className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center relative overflow-hidden rounded-[3rem] bg-dark my-20 text-white"
  >
    {/* Background effects for contact section */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"></div>

    <div className="relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Let's Work Together
      </h2>
      <p className="text-gray-300 mb-12 text-lg max-w-xl mx-auto leading-relaxed">
        Have a project in mind or just want to say hi? Feel free to reach out
        via email or text.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href={`mailto:${data.email}`}
          className="group px-8 py-5 bg-white text-dark font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-3 active:scale-95"
        >
          <Mail size={22} className="group-hover:animate-bounce" /> Send Email
        </a>
        <a
          href={`sms:${data.phone}`}
          className="group px-8 py-5 bg-transparent text-white font-bold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 active:scale-95"
        >
          <Send
            size={22}
            className="group-hover:translate-x-1 transition-transform"
          />{" "}
          Send Text
        </a>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 {data.name}. All rights reserved.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Maame-codes"
            className="hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="bg-white min-h-screen font-sans text-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <ResumeTimeline />
        <Contact />
      </main>
    </div>
  );
}

export default App;
