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

const countdownDate = new Date("2024-09-28T23:18:07");

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
      <section
        className={`relative flex flex-col items-center h-[100svh] w-full overflow-hidden max-h-[93rem] min-h-[43rem] lg:h-screen lg:flex-row lg:justify-start`}
      >
        <div className="absolute w-full h-full top-0 left-0">
          <Image
            className="object-cover w-full h-full z-10"
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
      </section>
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
