import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderSection from "./HeaderSection";
import Image from "next/image";
import Link from "next/link";
const GoalSection = () => {
  return (
    <>
      <div className="px-2.5 md:px-4 bg-[#EDEDED]">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap px-5 md:flex-nowrap items-center">
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left text-center md:pr-10 mb-10 md:mb-0">
              <h1 className="text-[#313131] text-[20px] md:text-[48px] md:h-[64px] leading-[32px] md:leading-[64px] text-left font-sans-serif font-semibold not-italic  max-w-[680px]">
                Join Our Tribe: Subscribe for Exciting Content!
              </h1>
              <button className="mt-4 md:mt-40 w-64 h-10 rounded bg-[#857250]">
                <Link href="/contact-us" className="">
                  <h4 className="text-white ">Subscribe</h4>
                </Link>
              </button>
            </div>

            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full md:mt-0 mt-4">
              {/* <Image
                className="object-cover object-center rounded"
                alt="goal"
                src="/undraw_working.png"
                width={629.99}
                height={403.12}
                priority
              /> */}
              <img src="bannerImage.png" alt="undraw_working" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GoalSection;
