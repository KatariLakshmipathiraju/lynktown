import Image from "next/image";
import Community from "../components/Community/Community";
import Faq from "../components/Faq";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import MadeFor from "../components/MadeFor";
import ManageBusiness from "../components/ManageBusiness/ManageBusiness";
import SellingSteps from "../components/SellingSteps/SellingSteps";
import SpecialCollection from "../components/SpecialCollection/SpecialCollection";
import Testimonial from "../components/Testimonial/Testimonial";
import CustomizedStore from "../components/CustomizedStore/CustomizedStore";
import BlogSection from "../components/Blog/BlogSection";

export default function Vendor() {
  return (
    <Layout>
      <Hero />
      <SellingSteps />
      {/* <CustomizedStore /> */}
      <ManageBusiness />
      <Community />
      <Features />
      {/* <SpecialCollection /> */}
      <Testimonial />
      <MadeFor />
      <BlogSection />
      <Faq />
    </Layout>
  );
}
