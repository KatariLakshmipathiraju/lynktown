import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const MobileMenu = ({ showCatMenu, setshowCatMenu, setMobileMenu }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Wrapper className="flex flex-col md:hidden font-bold absolute  top-[102px] px-8 left-0 w-full h-[calc(100-50px)] bg-white z-50 text-black ">
        {pathname === "/" && (
          <div className="md:flex gap-8 items-center">
            <h3 className="pb-5 text-[#6D5C41] cursor-pointer text-xl leading-[21px] font-bold ">
              <Link href="/for-fashion-designers">For Fashion Designers</Link>
            </h3>
          </div>
        )}

        {pathname === "/for-fashion-designers" && (
          <div className="md:flex gap-8 items-center">
            <div>
              <div className="pb-3 text-[#6D5C41] cursor-pointer text-xl leading-[21px] font-bold ">
                {/* <Link href="/pricing">Pricing</Link> */}
              </div>
            </div>
            <div>
              <div className="pb-5 text-[#6D5C41] cursor-pointer  text-xl leading-[21px] font-bold ">
                <Link href="/schedule-demo">Schedule Demo</Link>
              </div>
            </div>
            <div>
              <div className="pb-5 text-[#6D5C41] cursor-pointer  text-xl leading-[21px] font-bold ">
                <Link href="/blogs">Blogs</Link>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default MobileMenu;
