"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

import Container from "../global-components/Container/Container";

interface GallerySlide {
  src: string;
}

interface GalleryThumbnail {
  id: number;
  src: string;
  slides: GallerySlide[];
}

const galleryThumbnails: GalleryThumbnail[] = [
  {
    id: 1,
    src: "/images/1.jpg",
    slides: [
      { src: "/images/1.jpg" },
    ],
  },
  {
    id: 2,
    src: "/images/5.jpg",
    slides: [
      { src: "/images/5.jpg" },

    ],
  },
  {
    id: 3,
    src: "/images/3.jpg",
    slides: [
      { src: "/images/3.jpg" },
    ],
  },
  {
    id: 4,
    src: "/images/4.jpg",
    slides: [
      { src: "/images/4.jpg" },
    ],
  },
  {
    id: 5,
    src: "/images/2.jpg",
    slides: [
      { src: "/images/2.jpg" },
   
    ],
  },

];

export default function PhotoGallery(): JSX.Element {
  const [openGallery, setOpenGallery] = useState<boolean>(false);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  const clickHandler = (index: number): void => {
    setOpenGallery(true);
    setGalleryIndex(index);
  };

  return (
    <section
      id="photo-gallery"
      className={`w-full mt-5 pb-10 lg:mt-5 lg:pb-5 lg:mb-[2.5rem]`}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={sectionRef}
    >
      <Container>
       
    
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryThumbnails.map((item, index) => (
            <div key={item.id} className="aspect-square w-full h-full">
              <Image
                className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-60 transition-all"
                src={item.src}
                width={500}
                height={500}
                alt="Gallery image"
                onClick={() => clickHandler(index)}
                style={{ aspectRatio: "1/1" }}
              />
            </div>
          ))}
          <Lightbox
            open={openGallery}
            close={() => setOpenGallery(false)}
            slides={galleryThumbnails[galleryIndex].slides}
          />
        </div>
      </Container>
    </section>
  );
}
