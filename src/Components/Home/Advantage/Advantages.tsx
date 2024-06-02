import Image from "next/image";
import phoneImg from "@/app/assets/images/Group 35935.png";
import phoneImg2 from "@/app/assets/images/Group 35937.png";
import star from "@/app/assets/images/Star 3.png";
import star2 from "@/app/assets/images/star-05 (1).png";
import color from "@/app/assets/images/color.png";
import { PiBellSimpleLight } from "react-icons/pi";
const Advantages = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row-reverse justify-center items-center gap-10">
        <div className="relative">
          <Image
            className="absolute right-0"
            src={star}
            alt=""
            width={0}
            height={0}
          />
          <Image src={phoneImg} alt="" width={0} height={0} />
        </div>
        <div className="space-y-5 md:w-1/2">
          <p className="uppercase text-lg text-[#FF5555] font-medium">
            advantages
          </p>
          <h1 className="capitalize text-xl md:text-5xl font-bold">
            Why choose uifry?
          </h1>
          <div>
            <div className="flex gap-2 my-3">
              <div className="flex justify-center items-center text-center rounded-full bg-[#FF5555] text-white w-6 md:w-12 h-6 md:h-12">
                <PiBellSimpleLight className="w-2.5 md:w-5 h-2.5 md:h-5" />
              </div>
              <h4 className="text-lg md:text-3xl font-semibold text-center">
                Clever Notification
              </h4>
            </div>
            <p className="text-lg font-medium text-[#808080]">
              Experience a new level of convenience with our clever notification
              feature. Our app utilizes advanced algorithms to analyze your
              messaging behavior, intelligently filtering notifications to
              ensure you&#39;re always in the loop without feeling overwhelmed.
              By learning your preferences and prioritizing messages based on
              relevance and importance, our smart notifications keep you
              informed without inundating you with unnecessary alerts. With our
              innovative approach, you can focus on what matters most while
              staying effortlessly connected. Enjoy a seamless messaging
              experience tailored to your needs with our smart notification
              feature.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-around items-center">
        <div className="">
          {/* <Image className="" src={star} alt="" width={0} height={0} /> */}
          <Image src={phoneImg2} alt="" width={0} height={0} />
          {/* <Image src={color} alt="" width={0} height={0} /> */}
        </div>
        {/* <div className="relative">
          <Image className="" src={star} alt="" width={0} height={0} />
          <Image src={phoneImg2} alt="" width={0} height={0} />
        </div> */}
        <div className="md:w-1/2 space-y-5">
          <div className="flex gap-2 md:gap-5 my-3 items-center">
            <div className="flex justify-center items-center text-center rounded-full bg-[#FF5555] text-white w-6 md:w-12 h-6 md:h-12">
              <Image
                className="w-2.5 md:w-5 h-2.5 md:h-5"
                src={star2}
                alt=""
                width={0}
                height={0}
              />
            </div>

            <h4 className="text-lg md:text-3xl font-semibold text-center capitalize">
              fully customizable
            </h4>
          </div>
          <p className="text-lg font-medium text-[#808080]">
            Take charge of your messaging experience with our fully customizable
            notification feature. Whether you prefer to receive notifications
            for all messages or only for specific contacts, our app gives you
            the flexibility to tailor alerts to your liking. Choose your
            preferred notification sound, vibration pattern, and LED color to
            ensure you never miss an important message again. With our
            customizable notifications, staying connected has never been easier
            or more personalized.
          </p>
        </div>
      </section>
    </>
  );
};

export default Advantages;
