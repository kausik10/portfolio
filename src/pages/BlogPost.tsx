// BlogPost.tsx

import { useEffect, useState } from 'react';
import { posts } from '#site/content'; // Ensure this import is correct
import { MDXContent } from '@/components/mdx-content';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';

const BlogPost = () => {
  const { slugAsParams } = useParams();
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const post = posts.find(post => post.slugAsParams === slugAsParams);
        if (post && post.published) {
          setPost(post);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
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
    return <Navigate to="/404" replace />; // Redirect to a 404 page or handle not found case
  }

  if (!post) {
    return <div>Post not found</div>; // Handle the case where post is still null
  }

  return (
    <>
      <Helmet>
        <title>{post?.title}</title>
      </Helmet>
      <article className='w-full bg-dark_bg'>
        <section className="prose w-[90%] mx-auto md:w-[40%] flex flex-col justify-start mt-6 pt-24 pb-24 items-start text-light_text">
          <h1 className='text-light_text'>{post?.title}</h1>
          {post?.description ? (<p className='text-xl mt-0'>{post?.description}</p>) : null}
          <hr className=''/>
          <MDXContent code={post!.body} />
        </section>
      </article>
    </>
  );
};

export default BlogPost;
