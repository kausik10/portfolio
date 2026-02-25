import { Helmet } from "react-helmet-async";
import { FiExternalLink } from "react-icons/fi";

type Publication = {
  title: string;
  authors: string;
  venueBadge: string;
  venue: string;
  description: string[];
  link?: string;
  linkLabel?: string;
};

const publications: Publication[] = [
  {
    title:
      "Feasibility of Artificial Intelligence Driven Analysis in the Context of Nepalese Legal System",
    authors:
      "Abhiyan Dhakal, Kausik Paudel, Sugat Sujakhu, Pranish Kafle, Prakash Poudyal",
    venueBadge: "ICAIL 2025",
    venue:
      "Accepted as a demonstration paper at the International Conference on Artificial Intelligence and Law (ICAIL 2025).",
    description: [
      "Developed an AI-driven legal analysis system using machine learning and retrieval-augmented generation (RAG) to streamline judicial workflows in Nepal and improve accessibility to legal information.",
    ],
    link: "https://dl.acm.org/doi/10.1145/3769126.3769249",
    linkLabel: "ACM Digital Library",
  },
  {
    title:
      "An Artificial Intelligence Driven Semantic Similarity-Based Pipeline for Rapid Literature Review",
    authors: "Abhiyan Dhakal, Kausik Paudel, Sanjog Sigdel",
    venueBadge: "NCCI 2025",
    venue:
      "Presented at National Conference on Computer Innovations (NCCI 2025). Forthcoming in KUSET Journal.",
    description: [
      "Developed a transformer-based semantic similarity pipeline to automate preliminary literature reviews, retrieving and ranking relevant papers from open-access repositories with minimal overhead.",
    ],
    link: "http://arxiv.org/abs/2509.15292",
    linkLabel: "arXiv Preprint",
  },
];

const Publications = () => {
  return (
    <>
      <Helmet>
        <title>Publications | Kausik</title>
        <meta
          name="description"
          content="Research publications by Kausik Paudel covering AI-driven legal analysis and semantic similarity pipelines for literature review."
        />
      </Helmet>
      <div className="min-h-screen w-full bg-dark_bg">
        <section className="mx-auto flex w-11/12 max-w-[1280px] flex-col gap-16 pb-24 pt-32 text-light_text md:w-9/12">
          {/* Title */}
          <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            Research <span className="text-primary_border">Publications</span>
          </h1>

          {/* Cards */}
          <div className="flex flex-col gap-8">
            {publications.map((pub, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-gray-800 bg-dark_bg_secondary p-6 shadow-dark-shadow transition-all duration-300 hover:border-primary_border/50 md:p-8"
              >
                {/* Badge + Title */}
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start">
                  <span className="inline-flex items-center self-start whitespace-nowrap rounded-full border border-primary_border/40 bg-primary_btn px-3 py-1 text-xs font-bold text-primary_border">
                    {pub.venueBadge}
                  </span>
                  <h2 className="text-lg font-bold leading-snug text-light_text transition-colors duration-200 group-hover:text-primary_border md:text-xl">
                    {pub.title}
                  </h2>
                </div>

                {/* Authors */}
                <p className="mb-2 text-sm italic text-secondary_btn">
                  {pub.authors}
                </p>

                {/* Venue */}
                <p className="mb-4 text-sm text-light_text/60">{pub.venue}</p>

                {/* Divider */}
                <div className="mb-4 h-px w-full bg-gray-700" />

                {/* Description bullets */}
                <ul className="mb-5 flex flex-col gap-2">
                  {pub.description.map((desc, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-3 text-sm leading-relaxed text-light_text/80 md:text-base"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] flex-shrink-0 rounded-full bg-primary_border" />
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary_border underline underline-offset-4 transition-colors duration-200 hover:text-light_text"
                  >
                    <FiExternalLink className="text-base" />
                    {pub.linkLabel ?? pub.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Publications;
