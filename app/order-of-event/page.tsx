import Events from "@/components/Events";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5"
        style={{ backgroundImage: "url('/orderbg.png')" }}
      >
        <iframe 
          style={{ width: '700px', height: '725px' }}
          src="https://online.anyflip.com/debya/eglb/index.html#p=2"
          seamless
          scrolling="no"
          frameBorder="0"
          allowTransparency={true}
          allowFullScreen
          className="z-10"
        />
      </div>
    </>
  );
};

export default Page;