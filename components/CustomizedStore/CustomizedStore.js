import React, { useEffect, useRef, useState } from "react";
import gsap, { Bounce, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import step1 from "/public/assets/images/customizedStore/1.m4v";
import step2 from "/public/assets/images/customizedStore/2.mp4";
import step3 from "/public/assets/images/customizedStore/3.m4v";
import Tick from "./Tick";
import { IconButton, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion, useInView } from "framer-motion";
import CustomizedStoreMobile from "./CustomizedStoreMobile";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const CustomizedStore = () => {
  const scrollTl = gsap.timeline({
    defaults: {
      ease: Power3.easeIn,
    },
  });
  const largeScreen = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    gsap.set(".step_1 svg .circle", {
      fill: "#3AC267",
      stroke: "#3AC267",
    });
    gsap.set(".step_1 svg .tick", {
      fill: "#fff",
    });

    // scrollTl.to(
    //   '.progressLine',

    //   {
    //     height: '100%',
    //     duration: 20,
    //   }
    // );
  }, []);

  const steps = [
    {
      id: 1,
      title: "Launch Your Free Store",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      id: 2,
      title: "Customize your store",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      id: 3,
      title: "Custom Orders",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
  ];

  const [clicked, setClicked] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  useEffect(() => {
    const progress = document.querySelector("#progressBarManage");
    let value = 0;
    if (clicked[2]) {
      value = 0.8;
    }
    if (clicked[3]) {
      value = 1.5;
    }

    if (progress) progress.style.height = value * 120 + "px";

    setHeight((height) => height * 120);
  }, [clicked]);

  const variantsHeight = {
    show: {
      height: "60px",
    },
    hide: {
      height: "36px",
    },
  };
  const variantsText = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  const [height, setHeight] = useState(0);

  const [manualClick, setManualClick] = useState(false);

  const [running, setRunning] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px 0px",
    once: true,
  });

  // useEffect(() => {
  //   if (manualClick || largeScreen || !isInView) return setRunning(false);
  //   const progressBar = document.querySelector('#progressBarManage');
  //   const id = setInterval(frame, 60);
  //   // let height = 0;

  //   function frame() {
  //     if (manualClick || !progressBar) return;

  //     if (height >= 170) {
  //       clearInterval(id);
  //       setRunning(false);
  //     } else {
  //       setRunning(true);
  //       height++;
  //       progressBar.style.height = height + 'px';
  //       if (height === 80) {
  //         setClicked(prev => ({
  //           ...prev,
  //           2: true,
  //         }));
  //       }
  //       if (height === 160) {
  //         setClicked(prev => ({
  //           ...prev,
  //           3: true,
  //         }));
  //       }
  //     }
  //   }
  // }, [manualClick, largeScreen, isInView]);

  const [currentImg, setCurrentImage] = useState(1);

  useEffect(() => {
    if (currentImg === 4) {
      setCurrentImage(1);
      setClicked((prev) => ({
        1: true,
        2: false,
        3: false,
      }));
    }
    if (currentImg === 0) {
      setCurrentImage(3);
      setClicked((prev) => ({
        1: true,
        2: true,
        3: true,
      }));
    }
  }, [currentImg]);

  const nextImg = () => {
    if (currentImg === 4) {
      setClicked((prev) => ({
        1: true,
        2: false,
        3: false,
      }));
      setCurrentImage(1);
      return;
    }

    setCurrentImage(currentImg + 1);
    setClicked((prev) => ({
      ...prev,
      [currentImg + 1]: true,
    }));
  };
  const prevImg = () => {
    if (currentImg === 0) {
      setCurrentImage(3);
    }
    setCurrentImage(currentImg - 1);
    setClicked((prev) => ({
      ...prev,
      [currentImg]: !clicked[currentImg],
    }));
  };

  return (
    <>
      {largeScreen ? (
        <CustomizedStoreMobile />
      ) : (
        <div
          ref={ref}
          className="wrapper relative pt-36 bg-[#EEECE7] mt-20 pb-28 px-4"
        >
          <div className="selling-steps xl:container   mx-auto h-full   ">
            <div className="flex lg:grid-cols-2  item-container items-center justify-center  ">
              {/* Content  */}
              <div className="flex-[1.5] xl:flex-1  ml-20">
                <h1 className="text-[40px] text-primaryColor font-medium mb-24  ">
                  Create and manage your <br /> customized store
                </h1>
                <div className="relative  flex flex-col gap-4 h-full mt-10">
                  <div
                    className="w-[2px]  h-full bg-[#D9D9D9] absolute left-3 z-[-1]"
                    style={{
                      height: `calc(100% - 35px)`,
                    }}
                  ></div>
                  <div
                    id="progressBarManage"
                    className="w-[2px] progressLine transition-all   bg-[#6A5B40] absolute left-3 z-[-1]"
                  ></div>

                  {steps.map((step) => {
                    const { id, description, title } = step;
                    return (
                      <motion.div
                        key={id}
                        variants={variantsHeight}
                        animate={clicked[id] ? "show" : "hide"}
                        // className={`flex gap-5 step_${id}  ${
                        //   id !== 1 ? 'h-[28px]' : 'h-[140px]'
                        // } transition-all`}
                        className={`flex gap-5 step_${id} !text-right `}
                        // style={{
                        //   // height: clicked[id] ? '100%' : '20px',
                        //   cursor:
                        //     clicked[id - 1] && !clicked[id + 1] && !running
                        //       ? 'pointer'
                        //       : '',
                        // }}
                        // onClick={e => {
                        //   if (id === 1) return;
                        //   if (running) return;

                        //   if (!clicked[id - 1]) return;
                        //   if (clicked[id + 1]) return;

                        //   setManualClick(true);
                        //   setCurrentImage(id);

                        //   setClicked(prev => ({
                        //     ...prev,
                        //     [id]: !prev[id],
                        //   }));
                        // }}
                      >
                        <div className="">
                          <Tick fill={clicked[id] && true} />
                        </div>
                        <div>
                          <h1 className="text-xl opacity-80 ">{title}</h1>
                          {/* <motion.p
                            variants={variantsText}
                            animate={clicked[id] ? "show" : "hide"}
                            // className={`my-2 text-[#757575]  ${
                            //   id !== 1 ? 'opacity-0' : 'opacity-100'
                            // }`}
                            className={`my-2 text-[#757575]`}
                            // style={{
                            //   opacity: clicked[id] ? '100%' : '0',
                            // }}
                          >
                            {description}
                          </motion.p> */}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Images  */}
              <div className="flex-1 ml-[-50px] justify-end xl:justify-center flex relative">
                <div className="relative">
                  <svg
                    className="w-[400px] h-[400px] xl:w-[474px] xl:h-[474px]"
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
                  <div className="absolute top-2/4 left-[-10%] z-10 ">
                    <IconButton onClick={prevImg}>
                      <MdOutlineArrowBackIos className="text-3xl" />
                    </IconButton>
                  </div>
                  <div className="absolute top-2/4 right-[-10%] z-10 ">
                    <IconButton onClick={nextImg}>
                      <MdArrowForwardIos className="text-3xl" />
                    </IconButton>
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2">
                    <div className="relative">
                      <svg
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

                      <div className="absolute top-2/4 left-2/4  h-[555px] w-[326px] -translate-x-2/4 -translate-y-2/4 ">
                        <AnimatePresence>
                          {clicked[1] && !clicked[2] && (
                            <motion.video
                              initial={{
                                opacity: 0,
                                scale: 0,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0,
                              }}
                              transition={{ type: "spring", bounce: 0.35 }}
                              autoPlay
                              loop
                              muted
                              className="h-full w-full step_img--1 origin-bottom rounded-[100px]"
                            >
                              <source
                                src={step1}
                                type="video/mp4"
                                className="aspect-squar"
                              />
                              Your browser does not support the video tag.
                            </motion.video>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="absolute top-2/4 left-2/4  h-[556px] w-[326px] -translate-x-2/4 -translate-y-2/4 ">
                        <AnimatePresence>
                          {clicked[2] && !clicked[3] && (
                            <motion.video
                              initial={{
                                opacity: 0,
                                scale: 0,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0,
                              }}
                              transition={{ type: "spring", bounce: 0.35 }}
                              autoPlay
                              loop
                              muted
                              className="h-full w-full step_img--1 origin-bottom rounded-[100px]"
                            >
                              <source src={step2} type="video/mp4" />
                              Your browser does not support the video tag.
                            </motion.video>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="absolute top-2/4 left-2/4  h-[560px] w-[326px] -translate-x-2/4 -translate-y-2/4">
                        <AnimatePresence>
                          {clicked[3] && !clicked[4] && (
                            <motion.video
                              initial={{
                                opacity: 0,
                                scale: 0,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0,
                              }}
                              transition={{ type: "spring", bounce: 0.35 }}
                              autoPlay
                              loop
                              muted
                              className="h-full w-full step_img--1 origin-bottom rounded-[86px]"
                            >
                              <source src={step3} type="video/mp4" />
                              Your browser does not support the video tag.
                            </motion.video>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* <div className="absolute top-2/4 left-2/4  h-[560px] w-[340px] -translate-x-2/4 -translate-y-2/4 ">
                    <AnimatePresence>
                      {clicked[1] && !clicked[2] && (
                        <motion.video
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                          }}
                          transition={{ type: "spring", bounce: 0.35 }}
                          autoPlay
                          loop
                          muted
                          className="h-full w-full step_img--1 origin-bottom"
                        >
                          <source
                            src={step1}
                            type="video/mp4"
                            className="aspect-squar"
                          />
                          Your browser does not support the video tag.
                        </motion.video>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="absolute top-2/4 left-2/4  h-[560px] w-[340px] -translate-x-2/4 -translate-y-2/4 ">
                    <AnimatePresence>
                      {clicked[2] && !clicked[3] && (
                        <motion.video
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                          }}
                          transition={{ type: "spring", bounce: 0.35 }}
                          autoPlay
                          loop
                          muted
                          className="h-full w-full step_img--1 origin-bottom"
                        >
                          <source src={step2} type="video/mp4" />
                          Your browser does not support the video tag.
                        </motion.video>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="absolute top-2/4 left-2/4  h-[560px] w-[340px] -translate-x-2/4 -translate-y-2/4">
                    <AnimatePresence>
                      {clicked[3] && !clicked[4] && (
                        <motion.video
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                          }}
                          transition={{ type: "spring", bounce: 0.35 }}
                          autoPlay
                          loop
                          muted
                          className="h-full w-full step_img--1 origin-bottom"
                        >
                          <source src={step3} type="video/mp4" />
                          Your browser does not support the video tag.
                        </motion.video>
                      )}
                    </AnimatePresence>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomizedStore;
