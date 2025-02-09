"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
import AudioPlayer from "@/app/global-components/AudioPlayer/AudioPlayer";

interface AnimationStyles {
  transform: string;
  opacity: number;
  transition: string;
}

export default function Song(): JSX.Element {
  const textRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(textRef, { once: true });

  const animationStyles: AnimationStyles = {
    transform: isInView ? "none" : "translateX(-100px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <section id="listen" className={`w-full mt-10 lg:mt-20`}>
      <Container customClasses="flex flex-col lg:flex-row">
        <div
          className="flex flex-col justify-center basis-2/4 lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl"
          ref={textRef}
          style={animationStyles}
        >
          <p className="font-bold text-2xl">Our Love Song</p>
          <div className="overflow-hidden">
            <h2
              className={`font-bold text-6xl pb-6 translate-y-36 md:translate-y-24 ${
                isInView ? "animate-slideUp" : ""
              }`}
            >
              Panic in the room
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-center pt-5 basis-2/4 mt-20 lg:mt-0 lg:justify-end lg:pt-[60px]">
          <AudioPlayer />
        </div>
      </Container>
    </section>
  );
}
