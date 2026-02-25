import { Helmet } from "react-helmet-async";

type WorkExperience = {
  company: string;
  location: string;
  role: string;
  techStack: string;
  period: string;
  bullets: string[];
};

const workData: WorkExperience[] = [
  {
    company: "Cerpio",
    location: "Remote",
    role: "Full Stack Developer",
    techStack: "GraphQL, Postgres, React, Contember",
    period: "February 2024 – October 2025",
    bullets: [
      "Built reusable, responsive, and scalable UI components using Next.js for multiple production-grade web applications.",
      "Translated Figma designs into modular, component-based interfaces using Next.js, integrating Contember as the backend (admin panel) and consuming dynamic content through GraphQL APIs.",
      "Designed and implemented database schemas, created new models, optimised existing ones, and managed migration-based model updates to ensure data integrity and maintainability.",
      "Implemented role-based access control (ACL) within admin panels, defining custom user roles, permission groups, and access rules for secure and context-aware operations.",
      "Contributed briefly (10–15 days) to a framework-less React Native application, implementing core screens and UI interactions while ensuring platform compatibility and performance.",
      "Collaborated closely with designers, senior backend engineers, Contember's framework developer and maintainer and product teams to ensure consistent designs, smooth functionality, and high-quality user experiences.",
    ],
  },
  {
    company: "Kyra Works",
    location: "Onsite",
    role: "Full Stack Developer",
    techStack: "Next.js, PostgreSQL, FastAPI",
    period: "October 8 2025 – January 8 2026",
    bullets: [
      "Translated Figma designs into responsive, component-driven UIs using modern React and Next.js.",
      "Designed reusable and scalable UI components.",
      "Implemented client-side form validation using Zod to ensure data integrity and improved user experience.",
      "Integrated frontend with backend services using React Query and Axios for efficient API communication and state management.",
      "Evaluated and selected appropriate frameworks, libraries, and component patterns to optimise web application performance and maintainability.",
      "Implemented CI/CD pipelines using GitHub Actions to automate Node.js deployment workflows, integrating PM2 for process management in production.",
      "Managed Dockerised FastAPI backend services, monitoring logs and cleaning orphaned containers to maintain server stability.",
      "Configured and maintained Nginx reverse proxy for both frontend and backend services, enabling secure routing and optimised production traffic handling.",
      "Created Linux user groups and configured server-level access control to enforce proper environment separation and security practices.",
      "Collaborated with the backend team working on a FastAPI (Python) backend by testing APIs, identifying bugs, and proposing fixes to ensure proper frontend integration.",
    ],
  },
];

const Work = () => {
  return (
    <>
      <Helmet>
        <title>Work | Kausik</title>
        <meta
          name="description"
          content="Work experience of Kausik Paudel – Full Stack Developer roles at Cerpio and Kyra Works."
        />
      </Helmet>
      <div className="min-h-screen w-full bg-dark_bg">
        <section className="mx-auto flex w-11/12 max-w-[1280px] flex-col gap-16 pb-24 pt-32 text-light_text md:w-9/12">
          {/* Page Title */}
          <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            Work <span className="text-primary_border">Experience</span>
          </h1>

          {/* Timeline */}
          <div className="relative flex flex-col gap-12">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-0 top-0 ml-3 hidden w-0.5 bg-primary_border/30 md:block" />

            {workData.map((job, idx) => (
              <div key={idx} className="group relative md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 hidden h-7 w-7 rounded-full border-2 border-primary_border bg-dark_bg transition-colors duration-300 group-hover:bg-primary_border md:block" />

                {/* Card */}
                <div className="rounded-xl border border-gray-800 bg-dark_bg_secondary p-6 shadow-dark-shadow transition-all duration-300 hover:border-primary_border/50 md:p-8">
                  {/* Header */}
                  <div className="mb-1 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h2 className="text-2xl font-bold text-light_text md:text-3xl">
                      {job.company}
                    </h2>
                    <span className="whitespace-nowrap text-sm font-medium text-secondary_btn md:text-base">
                      {job.location}
                    </span>
                  </div>

                  {/* Role & period */}
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-base font-semibold text-primary_border md:text-lg">
                      {job.role}{" "}
                      <span className="text-sm font-normal text-secondary_btn">
                        — {job.techStack}
                      </span>
                    </p>
                    <span className="whitespace-nowrap text-sm text-secondary_btn">
                      {job.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="mb-4 h-px w-full bg-gray-700" />

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2">
                    {job.bullets.map((bullet, bIdx) => (
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
