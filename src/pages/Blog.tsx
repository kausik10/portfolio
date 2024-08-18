import { Helmet } from "react-helmet-async";
import { posts } from "#site/content";
import { PostItem } from "@/components/PostItem";
import { sortPosts } from "@/utils/sortPost";

function Blog() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;
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
        </section>
      </div>
    </>
  );
}

export default Blog;
