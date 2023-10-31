import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BlogsComponent from './CardsComponents/BlogsComponent';

const BlogSection = props => {
  // export default function BlogSection(props) {
  const [posts, setPost] = useState([]);
  const modalHandler = () => {
    props.modalHandler;
  };

  const linkHandler = () => {
    props.linkHandler;
  };
  const fetchPost = () => {
    fetch('https://www.dhaatrigroups.com/lynktown-api/api/blogs', {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        setPost(data.data.slice(0, 3));
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <section className='w-full mb-20  md:mt-16 pb-6 '>
        <div className='container mx-auto'>
          <h1 className='text-2xl md:text-4xl text-center font-medium tracking-wider text-primaryColor md:mb-4'>
            BLOG POSTS
          </h1>
          <h2 className='text-center text-lg md:text-2xl mb-3 md:mb-8'>
            Our latest news.
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <BlogsComponent
              linkHandler={linkHandler} // Pass the linkHandler function from parent
              modalHandler={modalHandler}
              data={posts}
              posts={posts}
            />
          </div>
          <div className='float-left md:float-right mr-3'>
            <Link href='/blogs' legacyBehavior>
              <a className='bg-[#6A5B40] block my-6 hover:bg-[#6A5B40] text-white font-bold py-2 px-4 rounded'>
                View all articals
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
