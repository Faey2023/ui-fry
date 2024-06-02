import Advantages from "@/components/Home/Advantage/Advantages";
import Banner from "@/components/Home/Banner/Banner";
import Features from "@/components/Home/Features/Features";
import Pricing from "@/components/Home/Pricing/Pricing";
import Testimonial from "@/components/Home/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Banner />
      </section>
      <section id="feature">
        <Features />
      </section>
      <section id="advantage">
        <Advantages />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
    </div>
  );
};

export default Home;
