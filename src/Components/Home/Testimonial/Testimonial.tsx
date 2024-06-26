import Image from "next/image";
import testimonialImg from "@/app/assets/images/testimonial.png";
import color from "@/app/assets/images/color.png";
import people1 from "@/app/assets/images/people (1).png";
import people2 from "@/app/assets/images/people (2).png";
import people3 from "@/app/assets/images/people (3).png";
import people4 from "@/app/assets/images/people (4).png";
import people5 from "@/app/assets/images/people (5).png";

const Testimonial = () => {
  return (
    <>
      <div className="md:max-w-md mx-auto text-center my-5">
        <h6 className="uppercase md:text-lg font-medium tracking-[6px]">
          testimonial
        </h6>
        <h1 className="font-bold text-xl text-xl md:text-5xl capitalize">
          what our users say about us?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="relative">
          <Image
            className="relative z-[99999]"
            src={testimonialImg}
            alt=""
            width={0}
            height={0}
          />
          <Image
            className="absolute md:top-32 md:left-0 bottom-0"
            src={color}
            alt=""
            width={0}
            height={0}
          />
          {/* <Image className="absolute" src={color} alt="" width={0} height={0} /> */}
        </div>
        <div className="space-y-5 md:w-1/2">
          <h1 className="capitalize text-lg md:text-3xl font-semibold">
            the best financial accounting app ever!
          </h1>
          <p className="text-lg font-medium text-[#808080]">
            &#34;Experience unparalleled financial management with our
            groundbreaking accounting app. Designed with precision and
            user-centric in mind, our app offers a comprehensive suite of
            features to streamline your finances effortlessly. From tracking
            expenses and income to generating detailed reports and forecasts,
            we&#39;ve got you covered. Say goodbye to tedious paperwork and
            hello to simplified financial management. Try our app today and
            unlock a world of possibilities for smarter, more efficient
            accounting.&#34;
          </p>
          <div className="flex gap-1 md:gap-5">
            <Image
              src={people1}
              alt="people-1"
              className="w-12 h-12"
              width={40}
              height={40}
            />
            <Image
              src={people2}
              alt="people-2"
              className="w-12 h-12"
              width={0}
              height={0}
            />
            <Image
              src={people3}
              alt="people-3"
              className="w-12 h-12"
              width={0}
              height={0}
            />
            <Image
              src={people4}
              alt="people-4"
              className="w-12 h-12"
              width={0}
              height={0}
            />
            <Image
              src={people5}
              alt="people-5"
              className="w-12 h-12"
              width={0}
              height={0}
            />
          </div>
          <p className="font-semibold text-lg">Nick Jonas</p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
