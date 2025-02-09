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
    src: "/gallery/thumbnails/thumbnail-1.jpg",
    slides: [
      { src: "/gallery/slider-images/slider-1.jpg" },
      { src: "/gallery/slider-images/slider-2.jpg" },
      { src: "/gallery/slider-images/slider-3.jpg" },
    ],
  },
  {
    id: 2,
    src: "/gallery/thumbnails/thumbnail-2.jpg",
    slides: [
      { src: "/gallery/slider-images/slider-4.jpg" },
      { src: "/gallery/slider-images/slider-5.jpg" },
      { src: "/gallery/slider-images/slider-6.jpg" },
    ],
  },
  {
    id: 3,
    src: "/gallery/thumbnails/thumbnail-3.jpg",
    slides: [
      { src: "/gallery/slider-images/slider-7.jpg" },
      { src: "/gallery/slider-images/slider-8.jpg" },
      { src: "/gallery/slider-images/slider-9.jpg" },
    ],
  },
  {
    id: 4,
    src: "/gallery/thumbnails/thumbnail-4.jpg",
    slides: [
      { src: "/gallery/slider-images/slider-10.jpg" },
      { src: "/gallery/slider-images/slider-11.jpg" },
      { src: "/gallery/slider-images/slider-12.jpg" },
    ],
  },
  {
    id: 5,
    src: "/gallery/thumbnails/thumbnail-5.jpg",
    slides: [
      { src: "/gallery/slider-images/slider-13.jpg" },
      { src: "/gallery/slider-images/slider-14.jpg" },
      { src: "/gallery/slider-images/slider-15.jpg" },
    ],
  },
  {
    id: 6,
    src: "/gallery/thumbnails/thumbnail-6.jpg",
    slides: [
      { src: "/gallery/slider-images/slider-16.jpg" },
      { src: "/gallery/slider-images/slider-17.jpg" },
      { src: "/gallery/slider-images/slider-18.jpg" },
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
      className={`w-full mt-16 pb-14 lg:mt-56 lg:pb-56 lg:mb-[22.5rem]`}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={sectionRef}
    >
      <Container>
        <div className="overflow-hidden text-black">
          <h2
            className={`font-bold text-black text-6xl pb-6 translate-y-24 ${
              isInView ? "animate-slideUp" : ""
            }`}
          >
            Gallery
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {galleryThumbnails.map((item, index) => (
            <div className="flex flex-col mb-5 leading-none" key={item.id}>
              <div className="w-full h-full rounded-lg bg-fluo-green transition-all">
                <Image
                  className="rounded-lg cursor-pointer hover:opacity-60 transition-all"
                  src={item.src}
                  width={400}
                  height={400}
                  alt="Gallery gig thumbnail"
                  onClick={() => clickHandler(index)}
                />
              </div>
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
