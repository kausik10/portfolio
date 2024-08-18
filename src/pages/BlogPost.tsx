import "../styles/mdx.css";
import { useEffect, useState } from "react";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { Helmet } from "react-helmet-async";
import { useParams, Navigate } from "react-router-dom";

const BlogPost = () => {
  const { slugAsParams } = useParams();
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const post = posts.find((post) => post.slugAsParams === slugAsParams);
        if (post && post.published) {
          setPost(post);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slugAsParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (notFound) {
    return <Navigate to="/404" replace />;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post?.title}</title>
      </Helmet>
      <section className="w-full bg-dark_bg">
        <article className="prose m-0 mx-auto mt-6  w-[90%] max-w-[1280px] pt-24 dark:prose-invert md:w-[40%]">
          <h1 className="mb-4 mt-2 text-start text-3xl font-bold md:text-5xl lg:text-6xl">
            {post?.title}
          </h1>
          {post?.description ? (
            <p className="mt-0 text-xl font-light italic">
              {post?.description}
            </p>
          ) : null}
          <hr className="my-4 h-px w-full border-0 bg-light_bg" />
          <div className="text-xl">
            <MDXContent code={post!.body} />
          </div>
        </article>
      </section>
    </>
  );
};

export default BlogPost;
