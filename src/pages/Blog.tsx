import { Helmet } from "react-helmet-async";
import {posts} from "#site/content";
import { PostItem } from "@/components/PostItem";
import { sortPosts } from "@/utils/sortPost";

function Blog() {
 
  const sortedPosts = sortPosts(posts.filter(post => post.published));
  const displayPosts = sortedPosts;
  return (
    <>
      <Helmet>
        <title>Blogs | Kausik</title>
      </Helmet>
      <div className='w-full bg-dark_bg '>
      <section className="w-11/12 md:w-9/12 max-w-[1280px] mx-auto h-full flex flex-col justify-start gap-8 lg:gap-16 mt-6 pt-24 pb-24 items-start  text-light_text">
   
       <p className="text-center mx-auto text-3xl md:text-5xl lg:text-6xl font-bold mt-2 text-light_text">Blogs</p>
         
        {/* <hr className="border-0 h-2 mx-auto w-2/3" /> */}
        {displayPosts?.length > 0 ?
         (
         <ul className="mx-auto flex flex-col justify-center items-center flex-wrap gap-4">
            {displayPosts.map(post => {
              const {slugAsParams, date, title, description} = post;
              console.log(post);
              return (
               <li key={slugAsParams}>
                <PostItem slugAsParams={slugAsParams} title={title} description={description} date={date} />
              </li>
              )
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
