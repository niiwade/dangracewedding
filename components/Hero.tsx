"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CountdownTimer from "./Countdown";
import { isDateInPast } from "@/helper";
import { useRef, useState } from "react";
import Container from "@/app/global-components/Container/Container";

import { useInView } from "framer-motion";

import Image from "next/image";

const weddingDate = new Date("2025-04-26T00:00:00");

interface ObserverOptions {
  rootMargin: string;
  threshold: number;
}

const observerOptions: ObserverOptions = {
  rootMargin: "0px",
  threshold: 0,
};

const Hero = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
   

        <div className="absolute inset-0">
          <Image
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
            alt=""
            src="/images/1.jpg"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="w-full lg:w-2/3 xl:w-1/2">
              <p
                className="mt-6 tracking-wide text-white"
                data-aos="fade-left"
              >
                <span className="font-serif italic font-normal text-8xl">
                  Daniel Weds Grace
                </span>
              </p>

              <div data-aos="fade-left" className="mt-8">
                {!isDateInPast(weddingDate) ? (
                  <div className="space-y-2">
                   
                    <CountdownTimer
                      deadline={weddingDate}
                      title={"Countdown to our wedding"}
                    />
                  </div>
                ) : (
                  <p className="text-3xl font-bold text-white font-serif italic">
                    26th April 2025
                  </p>
                )}
              </div>

              <div className="flex items-center mt-10 space-x-3 sm:space-x-4">
                {/* <a
                  href="#"
                  title=""
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-5
                    py-2
                    font-sans
                    text-base
                    font-semibold
                    transition-all
                    duration-200
                    border-2 border-transparent
                    rounded-full
                    sm:leading-8
                    bg-white
                    sm:text-lg
                    text-black
                    hover:bg-opacity-90
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                  "
                  role="button"
                >
                  RSVP Now
                </a> */}

                <a
                  href="/gallery"
                  title=""
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-5
                    py-2
                    font-sans
                    text-base
                    font-semibold
                    transition-all
                    duration-200
                    bg-transparent
                    border-2
                    rounded-full
                    sm:leading-8
                    text-white
                    border-primary
                    hover:bg-white
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                    hover:text-black
                    sm:text-lg
                    focus:ring-offset-secondary
                  "
                  role="button"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        <div className="absolute inset-0 ">
          <img
            className="object-cover object-center w-full h-full"
            src="/images/1.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="w-full lg:w-2/3 xl:w-1/5">
              <p
                className="mt-6 tracking-wide text-white "
                data-aos="fade-right"
              >
                <span className="font-serif italic font-normal text-8xl    ">
                  Daniel Weds Grace
                </span>
              </p>

              <p
                data-aos="fade-left"
                className="mt-8  text-2xl font-normal text-white  font-serif italic "
              >
                26th April 2025
              </p>

              {!isDateInPast(countdownDate) && (
                <CountdownTimer
                  deadline={countdownDate}
                  title={"Discount ends in"}
                />
              )}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
