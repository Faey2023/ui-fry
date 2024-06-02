import Advantages from "@/Components/Home/Advantage/Advantages";
import Banner from "@/Components/Home/Banner/Banner";
import Features from "@/Components/Home/Features/Features";
import Pricing from "@/Components/Home/Pricing/Pricing";
import Testimonial from "@/Components/Home/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Advantages />
      <Testimonial />
      <Pricing />
    </div>
  );
};

export default Home;
