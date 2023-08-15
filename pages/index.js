import Layout from "../components/Layout/Layout";
import Hero from "../components/HomePage/Hero";
import AdvantagesForSellers from "../components/HomePage/AdvantagesForSellers";
import AdvantagesForCustomers from "../components/HomePage/AdvantagesForCustomers";
import WhyChooseUs from "../components/HomePage/WhyChooswUs";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AdvantagesForSellers />
      <WhyChooseUs />
      <AdvantagesForCustomers />
    </Layout>
  );
}
