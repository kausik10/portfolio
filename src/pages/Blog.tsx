import { Helmet } from "react-helmet-async";
import { posts } from "#site/content";
import { PostItem } from "@/components/PostItem";
import { sortPosts } from "@/utils/sortPost";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Tags = { id: number; label: string };
const tagItems: Tags[] = [
  { id: 1, label: "Random" },
  { id: 2, label: "Journal" },
  { id: 3, label: "Poems" },
  { id: 4, label: "Programming" },
];

function Blog() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tagFromURL = queryParams.get("tag");
  const [currentPage, setCurrentPage] = useState(
    tagFromURL?.toLowerCase() || "random",
  );

  useEffect(() => {
    navigate(`?tag=${currentPage}`, { replace: true });
  }, [currentPage, navigate]);

  const sortedPosts = sortPosts(
    posts.filter((post) => post.published && post.tags?.includes(currentPage)),
  );
  const displayPosts = sortedPosts;

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft += 500;
    }
  };

  const tagList = tagItems.map((item, index) => {
    const isActiveLink = currentPage === item.label.toLowerCase();
    return (
      <Link
        key={index}
        to={`?tag=${item.label.toLowerCase()}`}
        className={`cursor-pointer text-xl font-semibold transition-all duration-300 ${
          isActiveLink
            ? "text-primary_border underline decoration-primary_border decoration-2 underline-offset-4"
            : "text-light_text opacity-60 hover:opacity-100"
        }`}
        onClick={() => setCurrentPage(item.label.toLowerCase())}
      >
        {item.label}
      </Link>
    );
  });

  return (
    <>
      <Helmet>
        <title>Blogs | Kausik</title>
      </Helmet>
      <div className="min-h-screen w-full bg-dark_bg ">
        <section className="mx-auto mt-6 flex h-full w-11/12 max-w-[1280px] flex-col items-start justify-start gap-8 pb-24 pt-24 text-light_text md:w-[70%] lg:w-[40%]  lg:gap-16">
          <p className="mx-auto mt-2 text-center text-3xl font-bold text-light_text md:text-5xl lg:text-6xl">
            Blogs
          </p>

          <div className="relative flex w-full items-center justify-center">
            <ChevronLeft
              className={`cursor-pointer opacity-50 hover:opacity-100 lg:hidden`}
              onClick={slideLeft}
              size={40}
            />
            <ul
              id="slider"
              className="scroll scrollbar-hide jsutify-start flex h-full items-center gap-8 overflow-x-scroll scroll-smooth whitespace-nowrap p-0 md:justify-center"
            >
              {tagList}
            </ul>
            <ChevronRight
              className={`cursor-pointer opacity-50 hover:opacity-100 lg:hidden`}
              onClick={slideRight}
              size={40}
            />
          </div>

          {/* <hr className="border-0 h-2 mx-auto w-2/3" /> */}
          {displayPosts?.length > 0 ? (
            <ul className="style-none mx-auto flex w-full flex-col justify-center gap-4">
              {displayPosts.map((post) => {
                const { slugAsParams, date, title, description } = post;
                // console.log(post);
                return (
                  <li key={slugAsParams}>
                    <PostItem
                      slugAsParams={slugAsParams}
                      title={title}
                      description={description}
                      date={date}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mx-auto flex items-center justify-center text-center">
              Nothing to see here. Please checkout Other sections.
            </p>
          )}
        </section>
      </div>
    </>
  );
}

export default Blog;
