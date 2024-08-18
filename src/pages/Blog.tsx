import { Helmet } from "react-helmet-async";
import { posts } from "#site/content";
import { PostItem } from "@/components/PostItem";
import { sortPosts } from "@/utils/sortPost";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "@/components/pagination";

const POSTS_PER_PAGE = 5;

function Blog() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const pageFromURL = parseInt(queryParams.get("page") || "1");
  const [currentPage, setCurrentPage] = useState(pageFromURL);

  useEffect(() => {
    navigate(`?page=${currentPage}`, { replace: true });
  }, [currentPage, navigate]);

  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage,
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Helmet>
        <title>Blogs | Kausik</title>
      </Helmet>
      <div className="w-full bg-dark_bg ">
        <section className="mx-auto mt-6 flex h-full w-11/12 max-w-[1280px] flex-col items-start justify-start gap-8 pb-24 pt-24 text-light_text md:w-[40%]  lg:gap-16">
          <p className="mx-auto mt-2 text-center text-3xl font-bold text-light_text md:text-5xl lg:text-6xl">
            Blogs
          </p>

          {/* <hr className="border-0 h-2 mx-auto w-2/3" /> */}
          {displayPosts?.length > 0 ? (
            <ul className="style-none mx-auto flex w-full flex-col justify-center gap-4">
              {displayPosts.map((post) => {
                const { slugAsParams, date, title, description } = post;
                console.log(post);
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
            <p>Nothing to see here</p>
          )}

          {totalPages > 1 && (
            <div className="flex w-full flex-row items-end justify-end">
              <Pagination
                postsPerPage={POSTS_PER_PAGE}
                totalPosts={sortedPosts.length}
                paginate={paginate}
              />
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Blog;
