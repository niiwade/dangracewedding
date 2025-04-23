import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Marquees() {
  return (
    <>
      <Marquee speed={100} delay={0}>

        <Image
          src="/images/1.jpg"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={350}
          height={350}
        />
        <Image
          src="/images/4.jpg"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={350}
          height={350}
        />
        <Image
          src="/images/5.jpg"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={350}
          height={350}
        />
            <Image
          src="/images/5.jpg"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={350}
          height={350}
        />
      </Marquee>

  
    </>
  );
}
