import { Helmet } from "react-helmet-async";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type Project = {
  name: string;
  techStack: string;
  description: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    name: "Revamp",
    techStack: "Typescript, Next.js, Node.js, PostgreSQL, GraphQL",
    description: [
      "Web app for goal-setting, task management, and journaling with automated reflections for progress tracking.",
      "Social features include groups, friend invites, and progress sharing.",
    ],
    live: "https://revampgoal.co",
    github: "https://github.com/kausik10",
  },
  {
    name: "AI Lawyer",
    techStack:
      "Python, NextJS, OpenAI GPT 4o, OpenAI text-embedding-ada-002, RAG, Fast API",
    description: [
      "AI-powered legal assistant tailored to Nepalese law, providing precise query-based answers.",
      "Implements semantic search with GPT-4o and RAG architecture for accurate document retrieval.",
      "User-friendly chat interface built with Next.js frontend and Python backend.",
    ],
    github: "https://github.com/kausik10",
  },
  {
    name: "rssAggregator",
    techStack: "Go, SQL",
    description: [
      "RSS feed aggregator, built entirely in Go, fetches feeds from websites and allows only authenticated users to access them.",
      "A complete Backend setup.",
    ],
    github: "https://github.com/kausik10/rssaggregator",
  },
  {
    name: "NEPSE Stock Data Visualizer",
    techStack: "Python, Streamlit, Pandas, Scikit-Learn",
    description: [
      "Developed an interactive dashboard to visualise 490 days of NEPSE stock data with candlestick charts, trend lines, and sector heatmaps.",
      "Implemented data preprocessing, volatility analysis, PCA + K-Means clustering, and short-term price prediction using polynomial regression.",
    ],
    github: "https://github.com/kausik10",
  },
  {
    name: "KE-Commerce",
    techStack: "React, Express, MongoDB, Node.js, PayPal",
    description: [
      "Full-stack e-commerce platform with product listings, cart management, and PayPal payment integration.",
      "UI components from ShadCN; JWT-based authentication and protected routes.",
    ],
    github: "https://github.com/kausik10/e-commerce",
  },
  {
    name: "GovernIT",
    techStack: "Next.js, TypeScript",
    description: [
      "Centralised platform concept to make government agency meetings accessible to all citizens.",
      "Clean civic UI with accessible navigation and public meeting schedules.",
    ],
    live: "https://govern-it.vercel.app/#home",
    github: "https://github.com/kausik10",
  },
  {
    name: "Flutter Cart",
    techStack: "Flutter, SQLite",
    description: [
      "Mobile application demonstrating state management and SQLite in Flutter.",
      "Items can be added and removed from cart while the total price is calculated and stored in a local database.",
    ],
    github: "https://github.com/kausik10/flutter_cart",
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Kausik</title>
        <meta
          name="description"
          content="Projects built by Kausik Paudel — full-stack, AI, mobile, and backend projects."
        />
      </Helmet>
      <div className="min-h-screen w-full bg-dark_bg">
        <section className="mx-auto flex w-11/12 max-w-[1280px] flex-col gap-12 pb-24 pt-32 text-light_text md:w-9/12">
          {/* Title */}
          <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-primary_border">Projects</span>
          </h1>

          {/* Project list */}
          <div className="flex flex-col gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-gray-800 bg-dark_bg_secondary p-6 shadow-dark-shadow transition-all duration-300 hover:border-primary_border/50 md:p-8"
              >
                {/* Name + links */}
                <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-bold text-light_text transition-colors duration-200 group-hover:text-primary_border md:text-2xl">
                    {project.name}
                  </h2>
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} GitHub`}
                        className="flex items-center gap-1.5 text-sm font-medium text-secondary_btn transition-colors duration-200 hover:text-primary_border"
                      >
                        <FiGithub className="text-lg" />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} Live Demo`}
                        className="flex items-center gap-1.5 text-sm font-medium text-secondary_btn transition-colors duration-200 hover:text-primary_border"
                      >
                        <FiExternalLink className="text-lg" />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech stack */}
                <p className="mb-4 text-sm font-medium italic text-primary_border/80 md:text-base">
                  {project.techStack}
                </p>

                {/* Divider */}
                <div className="mb-4 h-px w-full bg-gray-700" />

                {/* Bullets */}
                <ul className="flex flex-col gap-2">
                  {project.description.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-sm leading-relaxed text-light_text/80 md:text-base"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] flex-shrink-0 rounded-full bg-primary_border" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
