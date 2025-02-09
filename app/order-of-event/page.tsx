import Events from "@/components/Events";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5"
        style={{ backgroundImage: "url('/orderbg.png')" }}
      ></div>
      <Events />
    </>
  );
};

export default Page;
