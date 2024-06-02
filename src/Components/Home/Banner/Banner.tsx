import Image from "next/image";
import oval from "@/app/assets/images/Group 35887.png";
import phoneGroup from "@/app/assets/images/phone-group.png";
import bannerImg from "@/app/assets/images/Group 35924.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPlayCircleOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      {/* <Image className="ml-5" src={star} alt="Image 1" width={0} height={0} /> */}
      <div className="flex flex-col-reverse md:flex-row justify-between max-w-6xl mx-auto gap-10 relative mt-24">
        <div className="flex flex-col space-y-5 md:w-[700px]">
          <div className=" space-y-5">
            <div>
              <h1 className="font-bold text-2xl md:text-6xl capitalize">
                Make the best financial decision.
              </h1>
              {/* <Image src={color} height={0} width={0} alt="" className="absolute" /> */}
            </div>
            <p className="text-lg font-medium text-[#807f7c]">
              Explore, Connect, and Enjoy Seamless Experiences. Download Now and
              Elevate Your Everyday!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <button className="text-white bg-black p-3 capitalize hover:bg-[#FF5555] transform ease-linear duration-300 flex gap-2 justify-center items-center rounded text-lg font-medium">
              get started <IoIosArrowRoundForward className="text-3xl" />
            </button>
            <button className="text-black p-3 capitalize hover:border-none hover:bg-[#FF5555] rounded transform ease-linear duration-300 flex gap-2 justify-center items-center hover:text-white">
              <IoPlayCircleOutline className="text-3xl" /> watch video
            </button>
          </div>
          <Image src={bannerImg} alt="Image 1" width={400} height={350} />
        </div>
        {/*  */}
        <div className="md:relative md:right-0">
          <Image
            className="md:w-[594px] md:h-[678px] z-[99999] relative"
            src={phoneGroup}
            alt="phone-group"
            width={0}
            height={0}
          />
          <Image
            className="hidden md:flex absolute -top-12 -right-10"
            src={oval}
            alt="oval"
            width={0}
            height={0}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
