import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { websites } from "../data";
const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Kausik</title>
      </Helmet>
      <div className="w-full bg-dark_bg">
        <section className="mx-auto mt-6 flex min-h-screen w-11/12 max-w-[1280px] flex-col items-start justify-start gap-8 pb-24 pt-24 text-light_text md:w-9/12  lg:gap-16">
          <p className="mx-auto mt-2 text-center text-3xl font-bold text-light_text md:text-5xl lg:text-6xl">
            Projects
          </p>

          <div className="mx-auto flex flex-row flex-wrap items-center justify-center gap-4">
            <div className="max-w-sm rounded-lg rounded-md border border-gray-800 shadow shadow-lg hover:bg-dark_bg_secondary ">
              {/* Need to convert this into Component and Render it properly. */}
              <Link target="_blank" to={`${websites[0].link}`}>
                <img
                  className="aspect-video rounded-md"
                  src={`${websites[0].image}`}
                  alt={`${websites[0].name}`}
                />
              </Link>
              <div className="rounded-md p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${websites[0].name}`}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${websites[0].description}`}</p>
                <Link
                  target="_blank"
                  to={`${websites[0].link}`}
                  className="inline-flex items-center rounded bg-primary_btn px-3 px-4 py-2 py-2 text-light_text hover:bg-secondary_btn hover:text-dark_text"
                >
                  View
                </Link>
              </div>
            </div>

            <div className="max-w-sm rounded-lg rounded-md border border-gray-800 shadow shadow-lg hover:bg-dark_bg_secondary ">
              <Link target="_blank" to={`${websites[1].link}`}>
                <img
                  className="aspect-video rounded-md"
                  src={`${websites[1].image}`}
                  alt={`${websites[1].name}`}
                />
              </Link>
              <div className="rounded-md  p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${websites[1].name}`}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${websites[1].description}`}</p>
                <Link
                  target="_blank"
                  to={`${websites[1].link}`}
                  className="inline-flex items-center rounded bg-primary_btn px-3 px-4 py-2 py-2 text-light_text hover:bg-secondary_btn hover:text-dark_text"
                >
                  View
                </Link>
              </div>
            </div>

            <div className="max-w-sm rounded-lg rounded-md border border-gray-800 shadow shadow-lg hover:bg-dark_bg_secondary ">
              <Link target="_blank" to={`${websites[2].link}`}>
                <img
                  className="aspect-video rounded-md"
                  src={`${websites[2].image}`}
                  alt={`${websites[2].name}`}
                />
              </Link>
              <div className="rounded-md p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${websites[2].name}`}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${websites[2].description}`}</p>
                <Link
                  target="_blank"
                  to={`${websites[2].link}`}
                  className="inline-flex items-center rounded bg-primary_btn px-3 px-4 py-2 py-2 text-light_text hover:bg-secondary_btn hover:text-dark_text"
                >
                  View
                </Link>
              </div>
            </div>

            <div className="max-w-sm rounded-lg rounded-md border border-gray-800 shadow shadow-lg hover:bg-dark_bg_secondary ">
              <Link target="_blank" to={`${websites[3].link}`}>
                <img
                  className="aspect-video rounded-md"
                  src={`${websites[3].image}`}
                  alt={`${websites[3].name}`}
                />
              </Link>
              <div className="p-5">
                <h5 className="mb-2 rounded-md text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${websites[3].name}`}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${websites[3].description}`}</p>
                <Link
                  target="_blank"
                  to={`${websites[3].link}`}
                  className="inline-flex items-center rounded bg-primary_btn px-3 px-4 py-2 py-2 text-light_text hover:bg-secondary_btn hover:text-dark_text"
                >
                  View
                </Link>
              </div>
            </div>

            <div className="max-w-sm rounded-lg rounded-md border border-gray-800 shadow shadow-lg hover:bg-dark_bg_secondary ">
              <Link target="_blank" to={`${websites[4].link}`}>
                <img
                  className="aspect-video rounded-md"
                  src={`${websites[4].image}`}
                  alt={`${websites[4].name}`}
                />
              </Link>
              <div className="rounded-md p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${websites[4].name}`}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{`${websites[4].description}`}</p>
                <Link
                  target="_blank"
                  to={`${websites[4].link}`}
                  className="inline-flex items-center rounded bg-primary_btn px-3 px-4 py-2 py-2 text-light_text hover:bg-secondary_btn hover:text-dark_text"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
