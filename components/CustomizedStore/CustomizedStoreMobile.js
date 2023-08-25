import step1 from "/public/assets/images/customizedStore/1.m4v";
import step2 from "/public/assets/images/customizedStore/2.mp4";
import step3 from "/public/assets/images/customizedStore/3.m4v";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import { IconButton } from "@mui/material";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import React from "react";
import { useEffect, useRef } from "react";

const steps = [
  {
    id: 1,
    image: step1,
    title: "Launch Your Free Store ",
  },
  {
    id: 2,
    image: step2,
    title: "Customize Your Store",
  },
  {
    id: 3,
    image: step3,
    title: "Get Custom Orders",
  },
];

const autoPlay = 5000;
const SLIDE_LENGTH = 3;

function move(idx) {
  var elem = document.getElementById(`progressBar--${idx}`);

  if (idx === 0) {
    const progressBars = document.querySelectorAll(".progressBar");
    progressBars.forEach((item) => {
      item.style.width = 0 + "%";
    });
  }
  var width = 1;
  var autoplayTime = autoPlay / 100;
  var id = setInterval(frame, autoplayTime);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}
const CustomizedStoreMobile = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", () => {
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <div className="container mx-auto overflow-hidden py-10 sm:py-16 px-4">
      <h1 className="text-2xl text-primaryColor font-medium text-center md:text-4xl">
        Create and manage your customized store
      </h1>
      <div className="relative my-8">
        <div className="absolute top-16 left-2/4 translate-x-[-50%]">
          <svg
            className="w-[292px] h-[292px] sm:w-[420px] sm:h-[420px] "
            viewBox="0 0 474 474"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="237"
              cy="237"
              r="237"
              fill="url(#paint0_linear_930_434)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_930_434"
                x1="75.4091"
                y1="195.705"
                x2="237"
                y2="474"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#857250" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={{
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          // onSlideChange={e => move(e.activeIndex)}
          // onSwiper={swiper => {
          //   move(swiper.activeIndex);
          // }}
          className="!pb-14  seller-steps relative"
        >
          <div className="z-10 top-[40%] translate-y-[-50%] absolute left-0 sm:left-10       disabled:pointer-events-none disabled:opacity-60  swiper-btn-prev ">
            <IconButton>
              <MdOutlineArrowBackIos className="text-3xl" />
            </IconButton>
          </div>
          <div className=" z-10 top-[40%] translate-y-[-50%]  absolute right-0 sm:right-10     disabled:pointer-events-none  disabled:opacity-60 swiper-btn-next">
            <IconButton>
              <MdArrowForwardIos className="text-3xl" />
            </IconButton>
          </div>

          {steps.map((item) => {
            const { id, image, title, description } = item;

            return (
              <SwiperSlide key={id}>
                <div className="max-w-[767px] mx-auto flex justify-center flex-col items-center">
                  <div className="relative">
                    <svg
                      className="max-h-[420px] sm:max-h-[600px]"
                      width="325"
                      height="580"
                      viewBox="0 0 325 669"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="7.71995"
                        y="7.71995"
                        width="309.56"
                        height="653.56"
                        rx="40.28"
                        stroke="#6A5B40"
                        stroke-width="14.5601"
                      />
                      <rect
                        x="10"
                        y="12"
                        width="299"
                        height="642.773"
                        rx="31.8933"
                        fill="white"
                      />
                      <g clip-path="url(#clip0_1205_2138)">
                        <path
                          d="M79 13.0001H240V13.0001C238.452 13.442 237.366 14.8326 237.313 16.4415L237.292 17.0787V17.0787C237.292 26.9764 229.268 35.0001 219.371 35.0001H99.6293C89.7316 35.0001 81.708 26.9764 81.708 17.0787V17.0787L81.6869 16.4415C81.6337 14.8326 80.548 13.442 79 13.0001V13.0001Z"
                          fill="#9D8E73"
                        />
                      </g>
                      <rect
                        x="10"
                        y="12"
                        width="299"
                        height="642.773"
                        rx="31.8933"
                        stroke="#9D8E73"
                        stroke-width="4"
                      />
                      <defs>
                        <clipPath id="clip0_1205_2138">
                          <rect
                            width="295"
                            height="34.6133"
                            fill="white"
                            transform="translate(12 14)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="absolute bottom-0 left-0 right-0 top-2">
                      <video
                        autoplay
                        loop
                        muted
                        onLoadedMetadata={(e) => {
                          e.target.play();
                          e.target.playbackRate = 1.2;
                        }}
                        className="w-full h-[402px] rounded-[110px]"
                      >
                        <source src={image} type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  <h3 className="text-base text-black font-semibold opacity-80 md:text-2xl text-center mt-8">
                    {title}
                  </h3>
                  <div className="py-4 text-sm md:text-base text-center text-[#757575]">
                    <h2>{description}</h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomizedStoreMobile;
