import Image from "next/image";
import phoneImg from "../../../app/assets/images/iPhone-13-Pro-Front.png";
import star from "../../../app/assets/images/Star 3.png";
import star2 from "../../../app/assets/images/star-05 (1).png";
import card from "../../../app/assets/images/card.png";
import { PiBellSimpleLight } from "react-icons/pi";
const Advantages = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row-reverse justify-center items-center gap-10">
        <div className="relative">
          <Image
            className=" absolute right-0"
            src={star}
            alt=""
            width={0}
            height={0}
          />
          <Image src={phoneImg} alt="" width={0} height={0} />
        </div>
        <div className=" w-1/2 space-y-5">
          <p className=" uppercase text-lg text-[#FF5555] font-medium">
            advantages
          </p>
          <h1 className="capitalize text-5xl font-bold">Why choose uifry?</h1>
          <div>
            <div className="flex gap-2 my-3">
              <div className="flex justify-center items-center rounded-full bg-[#FF5555] text-white w-12 h-12">
                <PiBellSimpleLight className="w-5 h-5" />
              </div>
              <h4 className="text-3xl font-semibold text-center">
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
      <section className="flex flex-col md:flex-row justify-center items-center gap-10">
        <Image className="" src={star} alt="" width={0} height={0} />
        <Image src={phoneImg} alt="" width={0} height={0} />
        <div className=" w-1/2 space-y-5">
          <div className="flex gap-5 my-3 items-center">
            <div className="flex justify-center items-center rounded-full bg-[#FF5555] text-white w-12 h-12">
              <Image className="" src={star2} alt="" width={0} height={0} />
            </div>
            <h4 className="text-3xl font-semibold text-center capitalize">
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
