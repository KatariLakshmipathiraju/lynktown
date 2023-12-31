import React from "react";
import { AiFillEye } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { GiPlayButton } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './styles.module.css';

const ViewCard = ({ blogs, clickHandler }) => {
  const router = useRouter();
  return (
    <>
              <style jsx>
        {`   
           .imageSize{
              height : 200
           }
            @media (min-width: 1024px) {
              .imageSize{
                height: auto
              }
            }
        `}
      </style>
      <section className="text-gray-600 body-font bg-[#E5E5E5] md:h-[1550px] lg:h-full">
        <div className="container px-5 py-6 mx-aut ">
          <div
            style={{ justifyContent: "center" }}
            className="px-2 flex flex-wrap grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4  -m-4"
          >
            {(blogs != undefined ? blogs : []).map((post, index) => {
              // const title = post.title.replace(/ /g, "-");
              console.log(post)
              const title = post.blog_slug_url;
              const href = `/blogs/${encodeURIComponent(title)}`;
              return (
                <div key={index} className="w-full md:w-[650px] lg:w-full ">
                  <div className="bg-white p-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="bg-white">
                      <Image
                        src={post.cover}
                        alt=""
                        srcSet=""
                        className="imageSize"
                        width={400}
                        height={200}
                        priority
                      />
                    </div>
                    <div className="py-6 md:py-0 lg:py-0">
                      <div className="flex justify-between items-center px-2 mt-6">
                        <div className="flex gap-4">
                          <div className="flex gap-2">
                            <p className="py-1">
                              <AiFillEye />
                            </p>
                            <p>
                              {post?.viewers ? post?.viewers.length : 0}
                            </p>
                          </div>
                        </div>
                        <div
                          onClick={() => {
                            clickHandler.call({}, post.id);
                            router.push(href, undefined, { shallow: true });
                          }}
                          className="rounded-md border border-black-2 px-2 py-1 cursor-pointer  "
                        >
                          Read more
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default ViewCard;
