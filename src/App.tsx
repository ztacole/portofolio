import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Smartphone,
  Monitor,
  GraduationCap,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Star,
  Award,
  Calendar,
  Download,
  Eye,
  Coffee,
  Zap,
  Target,
  BookOpen,
  Users,
  Lightbulb,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    "Android Developer",
    "Desktop Developer",
    "Kotlin Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let currentIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(
      () => {
        if (!isDeleting && currentIndex <= currentWord.length) {
          setTypedText(currentWord.slice(0, currentIndex));
          currentIndex++;
        } else if (isDeleting && currentIndex >= 0) {
          setTypedText(currentWord.slice(0, currentIndex));
          currentIndex--;
        }

        if (currentIndex === currentWord.length + 1) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }

        if (isDeleting && currentIndex === 0) {
          isDeleting = false;
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearInterval(typeInterval);
  }, [currentWordIndex]);

  const stats = [
    {
      number: "2+",
      label: "Years Learning",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Projects Built",
      icon: <Code className="w-6 h-6" />,
    },
    { number: "5+", label: "Technologies", icon: <Zap className="w-6 h-6" /> },
    {
      number: "100%",
      label: "Dedication",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  const experiences = [
    {
      title: "Student Developer",
      company: "SMKN 24 Jakarta",
      period: "2023 - Present",
      description:
        "Focusing on Android development with Kotlin and desktop applications with C#. Building various projects to enhance practical skills.",
      technologies: ["Kotlin", "Android SDK", "C#", ".NET"],
    },
    {
      title: "Self-taught Programmer",
      company: "Personal Projects",
      period: "2023 - Present",
      description:
        "Started learning programming through online resources and building personal projects. Developed strong foundation in mobile and desktop development.",
      technologies: ["Java", "Kotlin", "C#", "SQL"],
    },
  ];

  const achievements = [
    {
      title: "Android Development Focus",
      description:
        "Specialized in modern Android development using Kotlin and Jetpack Compose",
      icon: <Award className="w-6 h-6 text-[#A80038]" />,
    },
    {
      title: "Multi-Platform Skills",
      description:
        "Proficient in both mobile (Android) and desktop (C#/.NET) development",
      icon: <Star className="w-6 h-6 text-[#A80038]" />,
    },
    {
      title: "Continuous Learning",
      description:
        "Always staying updated with latest development practices and technologies",
      icon: <BookOpen className="w-6 h-6 text-[#A80038]" />,
    },
    {
      title: "Problem Solving",
      description:
        "Strong analytical skills for solving complex programming challenges",
      icon: <Lightbulb className="w-6 h-6 text-[#A80038]" />,
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Enrolled at SMKN 24 Jakarta",
      description:
        "Started formal education in Software Engineering, focusing on practical development skills",
      type: "education",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Desktop Development",
      description:
        "Mastered skills to C# and .NET for desktop application development",
      type: "expansion",
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Mastered Kotlin",
      description:
        "Expanded skills to Kotlin for Android development, embracing modern language features",
      type: "skill",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "First Android Project",
      description:
        "Built first complete Android application using Kotlin, marking entry into mobile development",
      type: "project",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "1st Place in Student Competency Competition East Jakarta 2 2024 - IT Software Solution for Business",
      description:
        "Received first place in a student competency competition regional level, showcasing expertise in desktop development, Android development and problem-solving skills",
      type: "achievement",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "1st Place in Student Competency Competition Jakarta 2024 - IT Software Solution for Business",
      description:
        "Received first place in a student competency competition regional level, showcasing expertise in desktop development, Android development and problem-solving skills",
      type: "achievement",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "2nd Place in Student Competency Competition Indonesia 2024 - IT Software Solution for Business",
      description:
        "Received second place in a student competency competition national level, showcasing expertise in Android development and problem-solving skills",
      type: "achievement",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Jetpack Compose Adoption",
      description:
        "Started learning modern UI development with Jetpack Compose for Android",
      type: "skill",
      icon: <Star className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "3rd Place in Indonesia Regional Selection for Worldskills ASEAN Philippines 2025 - IT Software Solution for Business",
      description:
        "Received third place in a Indonesia regional selection for Worldskills ASEAN Philippines 2025, showcasing expertise in Android development and problem-solving skills",
      type: "achievement",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "6th Place in Indonesia National Selection for Worldskills ASEAN Philippines 2025 - IT Software Solution for Business",
      description:
        "Received sixth place in a Indonesia national selection for Worldskills ASEAN Philippines 2025, showcasing expertise in Android development and problem-solving skills",
      type: "achievement",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Multiple Projects Completed",
      description:
        "Successfully delivered several Android and desktop applications",
      type: "achievement",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Continuous Growth",
      description:
        "Actively learning advanced concepts and building portfolio projects",
      type: "current",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "Kotlin", level: 90, icon: <Smartphone className="w-5 h-5" /> },
    {
      name: "Android Development",
      level: 85,
      icon: <Smartphone className="w-5 h-5" />,
    },
    { name: "Jetpack Compose", level: 80, icon: <Code className="w-5 h-5" /> },
    { name: "C#", level: 85, icon: <Monitor className="w-5 h-5" /> },
    {
      name: "Desktop Development",
      level: 80,
      icon: <Monitor className="w-5 h-5" />,
    },
    { name: "Git/GitHub", level: 75, icon: <Github className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: "Android E-Commerce App",
      description:
        "Modern e-commerce application built with Kotlin and Jetpack Compose, featuring clean architecture and MVVM pattern.",
      tech: ["Kotlin", "Jetpack Compose", "Room Database", "Retrofit"],
      github: "#",
      demo: "#",
    },
    {
      title: "Desktop Inventory System",
      description:
        "Comprehensive inventory management system for small businesses built with C# and Windows Forms.",
      tech: ["C#", "Windows Forms", "SQL Server", ".NET Framework"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Manager Android App",
      description:
        "Productivity app for managing daily tasks with local storage and notification features.",
      tech: ["Kotlin", "SQLite", "Material Design", "Notifications API"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#A80038]">AZ</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  "home",
                  "about",
                  "experience",
                  "achievements",
                  "skills",
                  "projects",
                  "contact",
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 capitalize ${
                      activeSection === section
                        ? "text-[#A80038] bg-slate-800/50"
                        : "text-slate-300 hover:text-[#A80038] hover:bg-slate-800/30"
                    }`}
                  >
                    {section === "achievements" ? "milestones" : section}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-[#A80038] p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                "home",
                "about",
                "experience",
                "achievements",
                "skills",
                "projects",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-[#A80038] hover:bg-slate-800/50 rounded-md w-full text-left capitalize"
                >
                  {section === "achievements" ? "milestones" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#A80038] p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <img
                    src="/images/profile.jpg"
                    alt="Ahmad Zaqi"
                    className="w-full h-full object-cover rounded-full border-4 border-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Ahmad Zaqi
              </h1>
              <div className="h-8 mb-6">
                <p className="text-xl md:text-2xl text-[#f40051] font-semibold">
                  {typedText}
                  <span className="animate-pulse text-slate-400">|</span>
                </p>
              </div>
              <p className="text-lg text-slate-400 max-w-2xl mb-8">
                Second grade student at SMKN 24 Jakarta passionate about Android
                development with Kotlin and desktop applications with C#.
                Currently focusing on Jetpack Compose.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <a
                  href="https://github.com/ztacole"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/ahmadzaqi"
                  className="flex items-center gap-2 px-6 py-3 bg-[#A80038] hover:bg-[#8B0030] text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#A80038] text-[#f40051] hover:bg-[#A80038] hover:text-white rounded-lg transition-all duration-200 hover:scale-105">
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-[#A80038] hover:text-[#8B0030] transition-colors"
            >
              <ChevronDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <div className="text-[#A80038] mb-3 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get to know me!
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I'm a passionate student developer at SMKN 24 Jakarta with a
                strong focus on mobile and desktop application development. My
                primary expertise lies in Android development using Kotlin,
                particularly with modern frameworks like Jetpack Compose.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I also have solid experience in desktop application development
                using C# and the .NET framework. I believe in writing clean,
                efficient code and staying up-to-date with the latest
                development practices.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Currently, I'm deepening my knowledge in Jetpack Compose and
                exploring advanced Android development concepts to build better
                mobile experiences.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-[#A80038]/20 text-[#f40051] rounded-full text-sm border border-[#A80038]/30">
                  <Coffee className="w-4 h-4 inline mr-2" />
                  Coffee Lover
                </span>
                <span className="px-4 py-2 bg-[#A80038]/20 text-[#f40051] rounded-full text-sm border border-[#A80038]/30">
                  <Users className="w-4 h-4 inline mr-2" />
                  Team Player
                </span>
                <span className="px-4 py-2 bg-[#A80038]/20 text-[#f40051] rounded-full text-sm border border-[#A80038]/30">
                  <Eye className="w-4 h-4 inline mr-2" />
                  Detail Oriented
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-[#A80038]" />
                  <h4 className="text-xl font-semibold text-white">
                    Education
                  </h4>
                </div>
                <p className="text-slate-300">Student at SMKN 24 Jakarta</p>
                <p className="text-slate-400 text-sm">
                  Second Grade - Software Engineering
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-[#A80038]" />
                  <h4 className="text-xl font-semibold text-white">Location</h4>
                </div>
                <p className="text-slate-300">Jakarta, Indonesia</p>
                <p className="text-slate-400 text-sm">
                  Available for remote work
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-6 h-6 text-[#A80038]" />
                  <h4 className="text-xl font-semibold text-white">
                    Focus Areas
                  </h4>
                </div>
                <p className="text-slate-300">Android Development</p>
                <p className="text-slate-300">Desktop Applications</p>
                <p className="text-slate-400 text-sm">Mobile-first approach</p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 border-l-4 border-[#A80038]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-[#f40051] font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-3 py-1 bg-[#A80038]/20 text-[#f40051] rounded-full text-sm border border-[#A80038]/30">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements/Milestones Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            My Journey & Milestones
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Follow my development journey from the beginning to where I am today
          </p>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-slate-700"></div>

            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === milestones.length - 1;

              return (
                <div key={index} className="relative mb-12">
                  {/* Connector Line - Zigzag Effect */}
                  {!isLast && (
                    <div
                      className={`absolute top-24 ${
                        isEven ? "left-1/2" : "right-1/2"
                      } w-32 h-8`}
                    >
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 128 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d={
                            isEven
                              ? "M0 0 L64 16 L128 32"
                              : "M128 0 L64 16 L0 32"
                          }
                          stroke="#374151"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#A80038] rounded-full flex items-center justify-center z-10 shadow-lg">
                    <div className="text-white">{milestone.icon}</div>
                    {milestone.type === "current" && (
                      <div className="absolute -inset-1 bg-[#A80038] rounded-full animate-ping opacity-30"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex ${
                      isEven ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className={`w-5/12 ${isEven ? "mr-8" : "ml-8"}`}>
                      <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group border border-slate-700/50">
                        {/* Year Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-[#A80038] text-white text-sm rounded-full font-semibold">
                            {milestone.year}
                          </span>
                          <div
                            className={`px-3 py-1 rounded-full text-xs ${
                              milestone.type === "start"
                                ? "bg-green-500/20 text-green-400"
                                : milestone.type === "education"
                                ? "bg-blue-500/20 text-blue-400"
                                : milestone.type === "project"
                                ? "bg-purple-500/20 text-purple-400"
                                : milestone.type === "skill"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : milestone.type === "expansion"
                                ? "bg-cyan-500/20 text-cyan-400"
                                : milestone.type === "achievement"
                                ? "bg-orange-500/20 text-orange-400"
                                : "bg-[#A80038]/20 text-[#f40051]"
                            }`}
                          >
                            {milestone.type}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#A80038] transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative">
              <div className="absolute left-6 top-0 w-0.5 h-full bg-slate-700"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className="relative mb-8 ml-16">
                  {/* Timeline Node */}
                  <div className="absolute -left-12 w-8 h-8 bg-[#A80038] rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-white text-sm">{milestone.icon}</div>
                    {milestone.type === "current" && (
                      <div className="absolute -inset-1 bg-[#A80038] rounded-full animate-ping opacity-30"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="bg-slate-800/50 p-4 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-[#A80038] text-white text-xs rounded-full font-semibold">
                        {milestone.year}
                      </span>
                      <div
                        className={`px-2 py-1 rounded-full text-xs ${
                          milestone.type === "start"
                            ? "bg-green-500/20 text-green-400"
                            : milestone.type === "education"
                            ? "bg-blue-500/20 text-blue-400"
                            : milestone.type === "project"
                            ? "bg-purple-500/20 text-purple-400"
                            : milestone.type === "skill"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : milestone.type === "expansion"
                            ? "bg-cyan-500/20 text-cyan-400"
                            : milestone.type === "achievement"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-[#A80038]/20 text-[#f40051]"
                        }`}
                      >
                        {milestone.type}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#A80038] group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 mb-2 overflow-hidden">
                  <div
                    className="bg-[#A80038] h-3 rounded-full transition-all duration-1000 relative overflow-hidden"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-slate-400 text-sm">
                    {skill.level}% Proficiency
                  </p>
                  <p className="text-slate-500 text-xs">
                    {skill.level >= 85
                      ? "Expert"
                      : skill.level >= 70
                      ? "Advanced"
                      : "Intermediate"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
                <Smartphone className="w-12 h-12 text-[#A80038] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Mobile Development
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Native Android development with modern practices
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-[#A80038]/20 text-[#f40051] rounded-full text-xs">
                    Kotlin
                  </span>
                  <span className="px-3 py-1 bg-[#A80038]/20 text-[#f40051] rounded-full text-xs">
                    Jetpack Compose
                  </span>
                  <span className="px-3 py-1 bg-[#A80038]/20 text-[#f40051] rounded-full text-xs">
                    Android SDK
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
                <Monitor className="w-12 h-12 text-[#A80038] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Desktop Development
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Cross-platform desktop applications
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-[#A80038]/20 text-[#f40051] rounded-full text-xs">
                    C#
                  </span>
                  <span className="px-3 py-1 bg-[#A80038]/20 text-[#f40051] rounded-full text-xs">
                    .NET
                  </span>
                  <span className="px-3 py-1 bg-[#A80038]/20 text-[#f40051] rounded-full text-xs">
                    WinForms
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
                <Code className="w-12 h-12 text-[#A80038] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Development Tools
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Version control and development environment
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-[#A80038]/20 text-[#f40051] rounded-full text-xs">
                    Git
                  </span>
                  <span className="px-3 py-1 bg-[#A80038]/20 text-[#f40051] rounded-full text-xs">
                    GitHub
                  </span>
                  <span className="px-3 py-1 bg-[#A80038]/20 text-[#f40051] rounded-full text-xs">
                    Android Studio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in Android and desktop
            development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group border border-slate-700/50 hover:border-[#A80038]/50"
              >
                <div className="h-48 bg-slate-700/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#A80038]/10 group-hover:bg-[#A80038]/20 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-16 h-16 text-[#A80038] opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#A80038] text-white text-xs rounded-full">
                      Project {index + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#A80038] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#A80038]/20 text-[#f40051] rounded-full text-xs border border-[#A80038]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-slate-300 hover:text-[#A80038] transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-slate-300 hover:text-[#A80038] transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Categories */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Project Categories
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-[#A80038] text-white rounded-lg hover:bg-[#8B0030] transition-colors">
                All Projects
              </button>
              <button className="px-6 py-3 bg-slate-800/50 text-slate-300 rounded-lg hover:bg-slate-800/70 hover:text-[#A80038] transition-colors">
                Android Apps
              </button>
              <button className="px-6 py-3 bg-slate-800/50 text-slate-300 rounded-lg hover:bg-slate-800/70 hover:text-[#A80038] transition-colors">
                Desktop Apps
              </button>
              <button className="px-6 py-3 bg-slate-800/50 text-slate-300 rounded-lg hover:bg-slate-800/70 hover:text-[#A80038] transition-colors">
                Learning Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
              <Mail className="w-8 h-8 text-[#A80038] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a
                href="mailto:ahmadzaqi490@gmail.com"
                className="text-slate-300 hover:text-[#f40051] transition-colors"
              >
                ahmadzaqi490@gmail.com
              </a>
              <p className="text-slate-500 text-xs mt-2">
                Response within 24 hours
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
              <Github className="w-8 h-8 text-[#A80038] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <a
                href="https://github.com/ztacole"
                className="text-slate-300 hover:text-[#f40051] transition-colors"
              >
                @ztacole
              </a>
              <p className="text-slate-500 text-xs mt-2">
                Check out my repositories
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
              <Linkedin className="w-8 h-8 text-[#A80038] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">
                LinkedIn
              </h3>
              <a
                href="https://linkedin.com/in/ahmadzaqi"
                className="text-slate-300 hover:text-[#f40051] transition-colors"
              >
                @ahmadzaqi
              </a>
              <p className="text-slate-500 text-xs mt-2">
                Let's connect professionally
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send me a message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#A80038] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#A80038] focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#A80038] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#A80038] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#A80038] hover:bg-[#8B0030] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-slate-400 mb-6">
              Prefer direct contact? Let's build something amazing together!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:ahmadzaqi490@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#A80038] text-white rounded-lg hover:bg-[#8B0030] transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/ahmadzaqi"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#A80038] text-[#f40051] hover:bg-[#A80038] hover:text-white rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-[#A80038]">AZ</span>
                <span className="text-white font-medium">Ahmad Zaqi</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Passionate student developer specializing in Android and desktop
                applications. Always learning, always building.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ztacole"
                  className="w-10 h-10 bg-slate-700 hover:bg-[#a80038] rounded-lg flex items-center justify-center text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/ahmadzaqi"
                  className="w-10 h-10 bg-slate-700 hover:bg-[#a80038] rounded-lg flex items-center justify-center text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ahmadzaqi490@gmail.com"
                  className="w-10 h-10 bg-slate-700 hover:bg-[#a80038] rounded-lg flex items-center justify-center text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "home",
                  "about",
                  "experience",
                  "achievements",
                  "skills",
                  "projects",
                  "contact",
                ].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-slate-400 hover:text-[#f40051] transition-colors capitalize"
                    >
                      {section === "achievements" ? "milestones" : section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-white font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Android Development</li>
                <li>Kotlin Programming</li>
                <li>Jetpack Compose</li>
                <li>C# Development</li>
                <li>Desktop Applications</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 Ahmad Zaqi. Built with React, Tailwind CSS, and Lucide
              icons.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for opportunities
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
