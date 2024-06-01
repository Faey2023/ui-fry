import Image from "next/image";
import phoneImg from "../../../app/assets/images/iPhone-13-Pro-Front.png";
import star from "../../../app/assets/images/star-05.png";
import cube from "../../../app/assets/images/cube-02.png";
import cube2 from "../../../app/assets/images/cube-04.png";
import ellipse from "../../../app/assets/images/Ellipse 2157.png";
import star2 from "../../../app/assets/images/Star 3.png";

const Features = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <div>
          <Image src={star2} alt="" width={0} height={0} />
          <Image src={phoneImg} alt="" width={0} height={0} />
        </div>
        <div className=" w-1/2 space-y-5">
          <p className=" uppercase text-lg text-[#FF5555] font-medium">
            features
          </p>
          <h1 className="capitalize text-5xl font-bold">uifry premium</h1>
          <div>
            <div className="flex gap-2 my-3">
              <Image
                className=" h-5 w-5"
                src={star}
                alt=""
                width={20}
                height={20}
              />
              <h4 className=" text-lg font-semibold">End-to-End Encryption</h4>
            </div>
            <p className="text-lg font-medium text-[#808080]">
              Ensure user privacy and security with end-to-end encryption,
              preventing anyone except the sender and receiver from accessing
              the message content.
            </p>
            <div className="flex gap-2 my-3">
              <Image
                className=" h-6 w-6"
                src={cube}
                alt=""
                width={32}
                height={32}
              />
              <h4 className=" text-lg font-semibold">Multi-Platform Sync</h4>
            </div>
            <p className="text-lg font-medium text-[#808080]">
              Access your messages from any device seamlessly. Stay connected
              whether you&#39;re on your smartphone, tablet, or desktop, with
              automatic syncing across all platforms.
            </p>
            <div className="flex gap-2 my-3">
              <Image
                className=" h-5 w-5"
                src={cube2}
                alt=""
                width={20}
                height={20}
              />
              <h4 className=" text-lg font-semibold">
                Customizable Chat Themes
              </h4>
            </div>
            <p className="text-lg font-medium text-[#808080]">
              Express yourself with customizable chat themes. Choose from a
              variety of colors, backgrounds, and fonts to tailor your messaging
              environment to suit your style and mood.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
