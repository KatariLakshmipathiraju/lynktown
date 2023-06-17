import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  return (
    <>
      <section className="w-full mb-20  md:mt-16 pb-6 ">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-4xl text-center font-medium tracking-wider text-primaryColor md:mb-4">
            BLOG POSTS
          </h1>
          <h2 className="text-center text-lg md:text-2xl mb-3 md:mb-8">
            Our latest news.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mx-auto w-full md:w-[340px] lg:w-[300px] xl:w-[380px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border border-[#4F597B] cursor-pointer">
              <div className="bg-white p-2">
                <img
                  src="/post1.jpg"
                  alt=""
                  className="object-cover w-full h-48"
                />
              </div>

              <div className="px-2 h-[60px]">
                <h1 className="w-[300px] mr-[20px] text-[18px] font-medium">
                  Bills of Lading - draft
                </h1>
                <p className="text-lg text-gray-400">
                  by <span className="font-bold">Admin</span>
                </p>
              </div>

              <div className="flex justify-between items-center px-5">
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <p className="py-1">
                      <AiFillHeart />
                    </p>
                    <p className="text-[14px] flex items-center font-medium">
                      32
                    </p>
                  </div>
                  <div className="ml-4 flex items-center">
                    <IoIosShareAlt size={23} />
                  </div>
                </div>

                <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                  <a href="#" className="text-sm">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full md:w-[340px] lg:w-[300px] xl:w-[380px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border border-[#4F597B] cursor-pointer">
              <div className="bg-white p-2">
                <img
                  src="/post2.jpg"
                  alt=""
                  className="object-cover w-full h-48"
                />
              </div>

              <div className="px-2 h-[60px]">
                <h1 className="w-[300px] mr-[20px] text-[18px] font-medium">
                  Lorem ipsum dolor sit amet
                </h1>
                <p className="text-lg text-gray-400">
                  by <span className="font-bold">Jane Doe</span>
                </p>
              </div>

              <div className="flex justify-between items-center px-5">
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <p className="py-1">
                      <AiFillHeart />
                    </p>
                    <p className="text-[14px] flex items-center font-medium">
                      11
                    </p>
                  </div>
                  <div className="ml-4 flex items-center">
                    <IoIosShareAlt size={23} />
                  </div>
                </div>

                <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                  <a href="#" className="text-sm">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full md:w-[340px] lg:w-[300px] xl:w-[380px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border border-[#4F597B] cursor-pointer">
              <div className="bg-white p-2">
                <img
                  src="/post3.jpg"
                  alt=""
                  className="object-cover w-full h-48"
                />
              </div>

              <div className="px-2 h-[60px]">
                <h1 className="w-[300px] mr-[20px] text-[18px] font-medium">
                  Dust of the moon
                </h1>
                <p className="text-lg text-gray-400">
                  by <span className="font-bold">Admin</span>
                </p>
              </div>

              <div className="flex justify-between items-center px-5">
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <p className="py-1">
                      <AiFillHeart />
                    </p>
                    <p className="text-[14px] flex items-center font-medium">
                      6
                    </p>
                  </div>
                  <div className="ml-4 flex items-center">
                    <IoIosShareAlt size={23} />
                  </div>
                </div>

                <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                  <a href="#" className="text-sm">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="float-left md:float-right mr-3">
            <Link href="/blogs" legacyBehavior>
              <a className="bg-[#6A5B40] block my-6 hover:bg-[#6A5B40] text-white font-bold py-2 px-4 rounded">
                View all articals
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
