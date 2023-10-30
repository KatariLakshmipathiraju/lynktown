import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GoPrimitiveDot } from 'react-icons/go';
import { RxDividerVertical } from 'react-icons/rx';
import ViewCard from '/components/Blog/ViewCard';
import HeaderSection from '/components/Blog/HeaderSection';
import SEO from '../../../seo';
import BreadCrumbs from '../../../../components/BreadCrumbs';

const Blogs = () => {
  const router = useRouter();
  const [blog, setBlog] = useState();
  const [recent_blogs, setRecentBlogs] = useState([]);
  const [reload, setReload] = useState(true);
  const [previousId, setPreviousId] = useState({ id: null });
  const [blogId, setBlogId] = useState();

  const clickHandler = id => {
    setReload(true);
    setBlogId(id);
  };

  async function getBlogsId(id) {
    console.log(id);
    if (blogId === previousId.id && id !== undefined) {
      setReload(false);
      return;
    }

    await fetch(`https://api.lynktown.in/api/blog/${id}`, { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        setBlog(data.data);
        setRecentBlogs(data.recent_blogs);
        setReload(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

    fetch(`https://api.db-ip.com/v2/free/self`, { method: 'get' })
      .then(res => res.json())
      .then(data => {
        fetch(`https://api.lynktown.in/api/blogread/${id}/${data.ipAddress}`, {
          method: 'POST',
          body: JSON.stringify({
            ip: data.ipAddress,
            blog_id: id,
          }),
        });
      });
  }

  useEffect(() => {
    const id = router.query.id;
    getBlogsId(id);
    setPreviousId(JSON.parse(JSON.stringify({ id: router.query.id })));
  }, [router.query.id, blogId, reload]);

  return (
    <div>
      <style jsx>
        {`
          .paddingTop {
            padding-top: 2rem !important;
          }
          .bannerImage {
            margin: 10px;
          }
          ul {
            list-style-type: disc !important;
          }
          .blogContentMain {
            padding-left: 20px;
          }
          .blogContent {
            margin-left: 20px;
            padding: 20px;
          }
          .blogContent ul {
            list-style-type: disc !important;
          }
          .blogContent li {
            list-style-type: inherit;
          }
          .bannerTitle {
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 20px;
            padding-right: 50px;
            margin-left: 25px;
          }
          .adminSection {
            align-items: 'left';
            margin-left: 15px;
          }
          .mainImage {
            margin-right: 45px;
          }
          @media only screen and (max-width: 600px) and (min-width: 300px) {
            .mainImage {
              margin-right: 0px;
            }
            .bannerImage {
              margin: 2px;
            }
            .bannerTitle {
              font-size: 20px;
              font-weight: bold;
              margin-bottom: 20px;
              padding-right: 0;
              margin-left: -10px;
            }
            .blogContent {
              margin-left: 0;
              padding-right: 16px !important;
              padding-left: 0 !important;
            }
            .blogContentMain {
              padding-left: 20px;
            }
            .adminSection {
              margin-left: -6px;
            }
            .textRecent {
              margin-left: 20px;
            }
          }
        `}
      </style>
      {reload ? (
        <div
          style={{
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            position: 'fixed',
            zIndex: 10000,
            backgroundColor: '#ffffff91',
          }}
        >
          <img
            style={{ height: 300 }}
            src='https://api.lynktown.in/public/blogs/output-onlinegiftools.gif'
          />
        </div>
      ) : (
        <p></p>
      )}
      {blog ? (
        <section className='text-gray-600 body-font lg:overflow-x-hidden'>
          <SEO title={blog.meta_title} description={blog.meta_desc} />
          <BreadCrumbs
            currentPath={blog.title}
            paths={[
              { name: 'Home', to: '/' },
              { name: 'Blogs', to: '/blogs' },
            ]}
          />
          <div className='md:py-10 lg:w-full md:w-full'>
            <HeaderSection />
          </div>
          <div className='container px-5 py-6 mx-auto'>
            <div
              style={{ justifyContent: 'center', alignItems: 'center' }}
              className='px-2 flex flex-wrap grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-4  -m-4 bannerImage'
            >
              <div className='w-[100%] md:w-[650px] pl-2'>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <h2 className='md:w-[100%] w-[100%] bannerTitle'>
                    {blog ? blog.title : 'Blog Expired'}
                  </h2>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                  }}
                >
                  <p className='adminSection'>
                    By Admin, <span>{blog.created_by}</span>
                  </p>
                </div>
              </div>
              <div className='w-[100%] md:w-[650px]'>
                <div
                  className='mainImage'
                  style={{ maxHeight: 700, overflow: 'hidden' }}
                >
                  <img
                    src={blog.cover}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{ paddingLeft: '10px' }}
              className='px-2 flex flex-wrap grid py-4  -m-4'
            >
              <div className='w-full md:w-[650px] lg:w-full '>
                <div
                  className='blogContentMain'
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 40,
                  }}
                >
                  <div
                    className='md:w-[100%] w-[100%] blogContent'
                    dangerouslySetInnerHTML={{ __html: blog ? blog.data : '' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='flex flex-col'
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            {blog.ppt_url ? (
              <embed
                className='h-[200px] md:h-[600px]'
                style={{ width: '70%', marginBottom: '5px', marginTop: '15px' }}
                src={blog.ppt_url}
              ></embed>
            ) : (
              ''
            )}
            {blog.pdf_url ? (
              <iframe
                className='h-[600px] md:h-[500px]'
                src={blog.pdf_url + '#toolbar=0'}
                style={{
                  border: 0,
                  marginTop: 30,
                  width: '70%',
                  borderColor: 'red',
                  marginBottom: '15px',
                }}
                title='Blog PDF'
              />
            ) : (
              ''
            )}
          </div>
          <div className='container'>
            <div className='px-2 flex flex-wrap grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-4  -m-4'>
              <h1 className='text-[#000000] font-inter leading-[50.83px] h-[51px] font-bold m-12 text-[42px] text-left ml-6 pl-2 textRecent'>
                Recent Posts
              </h1>
            </div>
          </div>
          <div className='w-[100%]'>
            <ViewCard
              clickHandler={clickHandler}
              blogs={recent_blogs ? recent_blogs : []}
            />
          </div>
        </section>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Blogs;
