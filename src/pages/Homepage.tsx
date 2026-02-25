import { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const texts = [
  "Web Developer.",
  "Mobile App Developer.",
  "Linux Enthusiast.",
  "Full Stack Developer.",
  "Writer ✍.",
  "Rugby Player 🏉.",
];

type WorkPreview = {
  company: string;
  role: string;
  techStack: string;
  period: string;
  location: string;
  highlight: string;
};

const workPreview: WorkPreview[] = [
  {
    company: "Cerpio",
    role: "Full Stack Developer",
    techStack: "GraphQL, Postgres, React, Contember",
    period: "Feb 2024 – Oct 2025",
    location: "Remote",
    highlight:
      "Built production-grade UI components and GraphQL-powered interfaces; implemented RBAC in admin panels.",
  },
  {
    company: "Kyra Works",
    role: "Full Stack Developer",
    techStack: "Next.js, PostgreSQL, FastAPI",
    period: "Oct 2025 – Jan 2026",
    location: "Onsite",
    highlight:
      "Managed CI/CD, Dockerised backend, Nginx reverse proxy, and server-level access control.",
  },
];

const HomePage = () => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isDeleting) {
          setDisplayedText((prev) => prev.slice(0, -1));
          if (displayedText === "") {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setCurrentText(texts[(index + 1) % texts.length]);
          }
        } else {
          setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
          if (displayedText === currentText) {
            setIsDeleting(true);
          }
        }
      },
      isDeleting ? 50 : 120,
    );

    return () => clearInterval(interval);
  }, [displayedText, isDeleting, currentText, index]);

  return (
    <>
      <Helmet>
        <title>Portfolio | Kausik</title>
      </Helmet>
      <div className="h-full w-full bg-dark_bg">
        {/* ─── Hero ─── */}
        <section className="mx-auto flex w-11/12 max-w-[1280px] flex-col items-center justify-start gap-8 pb-8 text-light_text md:w-9/12 lg:flex-row lg:justify-between lg:gap-16 xl:h-screen">
          <div className="mt-6 flex transform items-center justify-center pt-24 transition-transform duration-300 hover:cursor-pointer lg:p-0 lg:hover:scale-110">
            <img
              src="kausik_paudel.png"
              alt="Kausik Paudel"
              className="rounded-full border border-4 border-primary_border object-cover shadow-2xl lg:h-80 lg:w-80 xl:h-96 xl:w-96"
            />
          </div>
          <div className="flex flex-col items-start justify-between text-center md:text-left">
            <p className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              Bonjour, J'mapelle
            </p>
            <p className="mt-2 text-5xl font-bold text-light_text md:text-6xl lg:text-8xl">
              Kausik Paudel
            </p>
            <p className="mt-4 text-xl font-medium lg:text-3xl ">
              I am a{" "}
              <span className="relative inline-block text-primary_border">
                {displayedText}
                <span className="animate-blink absolute bottom-0 ml-2 h-8 w-1 bg-primary_border"></span>
              </span>
            </p>
            <span className="mt-8 flex flex-row gap-4 text-3xl md:gap-8 md:text-5xl lg:text-6xl">
              <FaReact />
              <SiExpress />
              <FaNodeJs />
              <GrGraphQl />
              <FaGolang />
              <FaRust />
            </span>
          </div>
        </section>

        {/* ─── About Me ─── */}
        <div className="w-full bg-dark_bg_secondary">
          <section className="mx-auto flex w-11/12 max-w-[1280px] flex-col items-center justify-start gap-8 pb-4 text-center md:w-9/12 md:justify-center md:pt-8 md:text-left xl:h-screen">
            <h2 className="mb-4 pt-8  text-5xl font-bold md:hidden lg:pt-24">
              <span className="text-light_text">About </span> Me
            </h2>
            <div className="flex w-full flex-col items-center justify-start md:flex-row md:justify-between">
              <span className="flex flex-col items-start justify-between text-justify text-lg tracking-wide lg:w-1/2 lg:text-xl">
                <p className="mb-4 text-start">
                  Hello beautiful people! I am <strong>Kausik Paudel</strong>
                </p>
                <p className="mb-4 text-start">I am a tech enthusiast</p>
                <p className="mb-4 text-start">
                  I am a full-stack developer with a passion for building web
                  and mobile applications.
                </p>
                <p className="mb-4 text-start">
                  Linux is my second home! Of course, my chair and desk are my
                  first home.
                </p>
                <p className="mb-4 text-start">
                  I am a huge fan of open-source software and I love to
                  contribute to the community.
                </p>
                <p className="mb-4 text-start">
                  I am currently learning AI, ML, ReactNative and Golang.
                </p>
                <p className="mb-4 text-start">
                  I am a writer and I love to write about tech, life, and
                  everything in between.
                </p>
                <p className="mb-4 text-start">
                  I am a rugby player and I love to play rugby. I am a huge fan
                  of Beauden Barrett.
                </p>
              </span>
              <div className="mt-6 hidden items-center justify-center pt-24 hover:cursor-pointer md:flex lg:w-1/2 lg:p-0">
                <img
                  src="about_me.png"
                  alt="About Me"
                  className="h-auto max-h-[400px] w-full max-w-[400px]  object-cover"
                />
              </div>
            </div>

            <Link
              to="/about"
              className="rounded bg-primary_btn px-4 py-2 text-light_text hover:bg-secondary_btn hover:text-dark_text"
            >
              Read More
            </Link>
          </section>
        </div>

        {/* ─── Work Experience Preview ─── */}
        <div className="w-full bg-dark_bg">
          <section className="mx-auto flex w-11/12 max-w-[1280px] flex-col gap-10 py-20 text-light_text md:w-9/12 lg:py-28">
            {/* Section header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                Work <span className="text-primary_border">Experience</span>
              </h2>
              <Link
                to="/work"
                className="whitespace-nowrap text-sm font-semibold text-primary_border underline underline-offset-4 transition-colors duration-200 hover:text-light_text"
              >
                View all →
              </Link>
            </div>

            {/* Work cards */}
            <div className="flex flex-col gap-6">
              {workPreview.map((job, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-800 bg-dark_bg_secondary p-6 shadow-dark-shadow transition-all duration-300 hover:border-primary_border/50 md:p-8"
                >
                  <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-xl font-bold text-light_text md:text-2xl">
                      {job.company}
                    </h3>
                    <span className="text-sm text-secondary_btn">
                      {job.location}
                    </span>
                  </div>
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-semibold text-primary_border md:text-base">
                      {job.role}{" "}
                      <span className="text-xs font-normal text-secondary_btn md:text-sm">
                        — {job.techStack}
                      </span>
                    </p>
                    <span className="whitespace-nowrap text-xs text-secondary_btn md:text-sm">
                      {job.period}
                    </span>
                  </div>
                  <div className="mb-3 h-px w-full bg-gray-700" />
                  <p className="text-sm leading-relaxed text-light_text/75 md:text-base">
                    {job.highlight}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default HomePage;
