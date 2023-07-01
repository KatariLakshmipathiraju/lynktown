import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GoPrimitiveDot } from "react-icons/go";
import { RxDividerVertical } from "react-icons/rx";
import ViewCard from "/components/Blog/ViewCard";
import HeaderSection from "/components/Blog/HeaderSection";

const Blogs = () => {
  const router = useRouter();
  const [blog, setBlog] = useState();
  const [recent_blogs, setRecentBlogs] = useState([]);
  const [reload, setReload] = useState(true);
  const [previousId, setPreviousId] = useState({ id: null });
  const [blogId, setBlogId] = useState();

  const clickHandler = (id) => {
    setReload(true);
    setBlogId(id);
  };

  async function getBlogsId(id) {
    if (blogId === previousId.id && id !== undefined) {
      setReload(false);
      return;
    }

    await fetch(`https://api.lynktown.in/api/blog/${id}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.data);
        setRecentBlogs(data.recent_blogs);
        setReload(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

    fetch(`https://api.db-ip.com/v2/free/self`, { method: "get" })
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://api.lynktown.in/api/blogread/${id}/${data.ipAddress}`, {
          method: "POST",
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
      {reload ? (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            position: "fixed",
            zIndex: 10000,
            backgroundColor: "#ffffff91",
          }}
        >
          <img
            style={{ height: 300 }}
            src="https://api.lynktown.in/public/blogs/output-onlinegiftools.gif"
          />
        </div>
      ) : (
        <p></p>
      )}
      {blog ? (
        <section className="text-gray-600 body-font lg:overflow-x-hidden">
          <div className="md:py-10 lg:w-full md:w-full">
            <HeaderSection />
          </div>
          <div style={{ maxHeight: 700, overflow: "hidden" }}>
            <img
              src={blog.cover}
              style={{ width: "100%", height: "auto" }}
              alt="Blog Cover"
            />
          </div>

          <div className="flex flex-col px-4 lg:px-10">
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                marginTop: 40,
              }}
            >
              <h2
                className="md:w-[70%] w-[85%]"
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  marginBottom: 20,
                }}
              >
                {blog ? blog.title : "Blog Expired"}
              </h2>
              <div
                className="md:w-[100%] w-[100%]"
                dangerouslySetInnerHTML={{ __html: blog ? blog.data : "" }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {blog.file_type === "image" ? (
                  <img
                    style={{ width: "60%", borderRadius: 10 }}
                    src={blog.src}
                    alt="Blog Image"
                  ></img>
                ) : blog.file_type === "video" ? (
                  <iframe
                    className="w-[80%] h-[200px] md:w-[50%] md:h-[550px]"
                    style={{ borderRadius: 10, allowTransparency: true }}
                    src={blog.src}
                    title="Blog Video"
                  ></iframe>
                ) : (
                  <p></p>
                )}
              </div>
              {blog.ppt_url ? (
                <embed
                  className="h-[200px] md:h-[600px]"
                  style={{ width: "70%" }}
                  src={blog.ppt_url}
                  title="Blog PPT"
                ></embed>
              ) : (
                ""
              )}
              {blog.pdf_url ? (
                <iframe
                  className="h-[200px] md:h-[500px]"
                  src={blog.pdf_url + "#toolbar=0"}
                  style={{
                    border: 0,
                    marginTop: 30,
                    width: "70%",
                    borderColor: "red",
                  }}
                  title="Blog PDF"
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="container">
              <div className="px-2 flex flex-wrap grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-4  -m-4">
                <h1 className="text-[#000000] font-inter leading-[50.83px] h-[51px] font-bold m-12 text-[42px] text-left ml-3 textRecent">
                  Recent Posts
                </h1>
              </div>
            </div>
            <div className="w-[100%]">
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