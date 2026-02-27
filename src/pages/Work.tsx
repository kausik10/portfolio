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
    company: "Kyra Works",
    location: "Onsite",
    role: "Full Stack Developer",
    techStack: "FastAPI, Docker, Keycloak",
    period: "October 2025 – January 2026",
    bullets: [
      "Engineered an enterprise-grade multi-tenant SaaS architecture, seamlessly integrating custom AI pipelines to drive organization-specific workflows.",
      "Established robust multi-tenant security by implementing Keycloak, handling dynamic tenant isolation and enforcing complex role-based access controls.",
      "Architected system integrations and microservice data flows utilizing FastAPI and Docker, ensuring high availability and seamless platform scalability.",
    ],
  },
  {
    company: "Cerpio",
    location: "Remote",
    role: "Full Stack Developer",
    techStack: "Next.js, Contember, PostgreSQL, GraphQL",
    period: "February 2024 – October 2025",
    bullets: [
      "Engineered scalable Next.js and Vite frontends, building mission-critical ERP, CRM, and Accounting platforms for government and B2B clients heavily driven by complex GraphQL API integrations.",
      "Solved concurrency and data consistency issues by utilizing Contember’s transaction-per-request model; ensured all nested PostgreSQL mutations and strict cell-level security rules evaluated atomically within a single transaction boundary.",
      "Prevented side-effect data loss by implementing the Outbox Pattern; stored asynchronous tasks as safely committed database records and dispatched them to Cloudflare Hono workers via triggers to completely decouple third-party API failures from the main database transaction.",
      "Maintained production data safety using Git-versioned TypeScript schemas for automated structural migrations, heavily leveraging PostgreSQL’s WAL archiving for exact point-in-time recovery (PITR).",
    ],
  },
  {
    company: "MyTA - Virtual Teaching Assistant",
    location: "Remote",
    role: "Full Stack Developer",
    techStack: "Next.js, Node.js, Express, MongoDB",
    period: "January 2023 – February 2024",
    bullets: [
      "Developed a comprehensive Learning Management System (LMS) utilizing Next.js, TypeScript, and Node.js, implementing robust client-side validation (Yup/Formik) alongside optimized global state management using Redux Toolkit.",
      "Engineered scalable RESTful API services with Express and MongoDB, accelerating data retrieval strategies through in-memory Redis caching, and integrating Cloudinary for optimized media processing and delivery.",
      "Integrated advanced platform capabilities including AI-driven functionalities via LangChain and OpenAI and securely processed transactions using Stripe.",
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
