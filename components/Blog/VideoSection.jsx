import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import YouTubePlayer from './YouTubePlayer';

const VideoSection = () => {
  const videoRef = useRef(null);
  const router = useRouter();
  const videoSrc = `https://youtu.be/W5-FFatyORg`

  return (
    <>
  <style jsx>
          {`   
            @media only screen and (max-width: 600px) and (min-width: 300px)  {
                .mainRIght{
                  padding : 0 !important
                }
                .contentSection{
                  width: 410px;
                }
            }
        `}
    </style>
    <div className="px-2.5 md:px-4 mainRIght">
      <section className="w-full mb-20 md:mt-16 pb-6">
        <div className="container mx-auto flex flex-wrap px-5 md:flex-nowrap items-center contentSection">
        <div className="w-[100%] md:w-[100%]">
            <div className="md:pr-10 mb-10 md:mb-0">
                  <h2
                    className="md:w-[100%] w-[100%]"
                    style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 5, }}
                  >
                    About Us
                  </h2>
                  <p className="textDescription">We are a digital platform helping to build an ecosystem that seamlessly connects creatives, business owners, supplires, customers, trading partners, to collaborate, grow businesses and give the customers the best possible experience.
                    <br /> <br />
                  </p>
            </div>
        </div>
        <div className="w-[100%] md:w-[100%] mt-4">
              <div style={{ maxHeight: 700, overflow: 'hidden', marginLeft: 10, display: 'flex' }}>
                  <YouTubePlayer videoUrl={videoSrc} />
              </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default VideoSection;
