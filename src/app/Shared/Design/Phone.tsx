import Image from "next/image";

const Phone = ({ phoneImg, oval }) => {
  return (
    <div>
      <Image src={phoneImg} alt="" width={0} height={0} />
    </div>
  );
};

export default Phone;
