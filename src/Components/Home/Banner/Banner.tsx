import Image from "next/image";
import phone from "../../../app/assets/images/iPhone-13-Pro-Front (1).png";
import phone2 from "../../../app/assets/images/iPhone-13-Pro-Front (2).png";
import bannerImg from "../../../app/assets/images/Group 35924.png";
import star from "../../../app/assets/images/Star 3.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiTwotonePlayCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <>
      <Image className="ml-5" src={star} alt="Image 1" width={0} height={0} />
      <div className="flex max-w-6xl mx-auto gap-20">
        <div className="flex flex-col space-y-5">
          <div className=" space-y-5">
            <h1 className="font-black text-3xl capitalize">
              Make the best financial decision.
            </h1>
            <p>
              Explore, Connect, and Enjoy Seamless Experiences. Download Now and
              Elevate Your Everyday!
            </p>
          </div>
          <div className="flex gap-5">
            <button className="text-white bg-black p-3 capitalize hover:bg-[#FF5555] transform ease-linear duration-300 flex gap-2 justify-center items-center">
              get started <IoIosArrowRoundForward className=" text-3xl" />
            </button>
            <button className="text-black p-3 capitalize hover:bg-[#FF5555] transform ease-linear duration-300 flex gap-2 justify-center items-center hover:text-white">
              <AiTwotonePlayCircle className=" text-3xl" /> watch video
            </button>
          </div>
          <Image src={bannerImg} alt="Image 1" width={400} height={350} />
        </div>
        {/*  */}
        <div className="relative w-1/2">
          <div className="absolute left-16 top-10">
            <Image
              src={phone2}
              alt="Image 1"
              width={300}
              height={300}
              className=""
            />
          </div>
          <div className="absolute">
            <Image
              src={phone2}
              alt="Image 2"
              width={300}
              height={300}
              className=""
            />
          </div>
          <div className="absolute -left-16 -top-10">
            <Image
              src={phone2}
              alt="Image 2"
              width={300}
              height={300}
              className=""
            />
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Banner;
