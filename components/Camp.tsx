
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  // title: string;
  // subtitle: string;
  cardinfo: string;
}

const CampSite = ({ backgroundImage,  cardinfo }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg- bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          {/* <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p> */}
        </div>
      </div>

      <div className="flexCenter gap-6">
        
        <p className="bold-16 md:bold-20 text-white">{cardinfo}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="3xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-5 xl:mb-20">

      
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[500px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          // title="Putuk Truno Camp"
          // subtitle="Prigen, Pasuruan"
          cardinfo="slide to scroll"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          // title="Mountain View Camp"
          // subtitle="Somewhere in the Wilderness"
          cardinfo="slide to scroll"
        />
           

      </div>

    
    </section>
  )
}

export default Camp