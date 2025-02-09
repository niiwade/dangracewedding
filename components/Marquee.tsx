import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Marquees() {
  return (
    <>
      <Marquee speed={100} delay={0}>
        <Image
          src="/groom.jpg"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />

        <Image
          src="/bride.jpg"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />

        <Image
          src="/groom.jpg"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />

        <Image
          src="/bride.jpg"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />
      </Marquee>

      {/* <Marquee speed={100} delay={0}>
        <Image
          src="/static/images/backdrop-15.webp"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />

        <Image
          src="/static/images/backdrop-12.webp"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />

        <Image
          src="/static/images/backdrop-14.webp"
          alt="Screenshot of the product"
          className="w-full h-full object-cover mx-4"
          width={500}
          height={500}
        />
      </Marquee> */}
    </>
  );
}
