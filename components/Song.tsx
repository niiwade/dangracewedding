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
    <section id="listen" className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <Container customClasses="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          <div
            className="flex flex-col justify-center lg:max-w-md space-y-6"
            ref={textRef}
            style={animationStyles}
          >
            <div className="space-y-2">
              <p className=" dark:text-cyan-400 text-lg font-medium tracking-wide">OUR SOUNDTRACK</p>
              <div className="overflow-hidden mt-5">
                <h2
                  className={`font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white pb-4 translate-y-36 md:translate-y-2 ${
                    isInView ? "animate-slideUp" : ""
                  }`}
                >
                  Our Love Songs
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                The soundtrack to our love story. These songs hold special meaning to us and represent moments we've shared together.
              </p>
            </div>
            
            <div className="pt-4 hidden lg:block">
              <div className="inline-flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <span>Listen to the music that tells our story</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5 mt-8 lg:mt-0">
            <AudioPlayer />
          </div>
        </div>
      </Container>
    </section>
  );
}
