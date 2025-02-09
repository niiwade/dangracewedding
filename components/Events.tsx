"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
import TimeDates from "./TimeDates";
import { ArrowDown } from "lucide-react";

// Extending HTMLDivElement directly as we don't need to redefine its properties
type ScrollableElement = HTMLDivElement;

export default function Events(): JSX.Element {
  const [isScrollMoreVisible, setIsScrollMoreVisible] = useState<boolean>(true);
  const showsContainerRef = useRef<HTMLElement | null>(null);
  const scrollableDivRef = useRef<ScrollableElement | null>(null);
  const isInView = useInView(showsContainerRef, { once: true });

  const clickHandler = (): void => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTo({
        top:
          scrollableDivRef.current.scrollTop +
          scrollableDivRef.current.offsetHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollableDiv = scrollableDivRef.current;
    if (!scrollableDiv) return;

    const handleScroll = (): void => {
      if (scrollableDiv && scrollableDivRef.current?.childNodes[0]) {
        const firstChild = (
          scrollableDivRef.current.childNodes[0] as HTMLElement
        ).children[0] as HTMLElement;
        if (
          scrollableDiv.scrollTop +
            scrollableDiv.offsetHeight +
            firstChild.offsetHeight >=
          scrollableDiv.scrollHeight
        ) {
          setIsScrollMoreVisible(false);
        } else {
          setIsScrollMoreVisible(true);
        }
      }
    };

    scrollableDiv.addEventListener("scroll", handleScroll);
    return () => {
      scrollableDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="shows"
      className={`w-full relative mt-16 bg-incoming-shows bg-cover bg-no-repeat bg-center h-[32rem] lg:h-screen lg:min-h-[45rem] lg:max-h-[49rem] lg:mt-56`}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={showsContainerRef}
    >
      <Container customClasses="pb-2.5 h-full">
        <div className="flex flex-col items-center text-white pt-11">
          <div className="overflow-hidden">
            <h2
              className={`text-2xl translate-y-10 font-bold lg:text-4xl lg:translate-y-20 lg:leading-[3rem] ${
                isInView ? "animate-slideUp" : ""
              }`}
            >
              Incoming Shows &#127928;
            </h2>
          </div>
          <h4 className="text-base lg:text-2xl">
            We playin{`'`} in your town!
          </h4>
        </div>
        <div
          className="scoller relative mt-6 h-[calc(100%-14rem)] overflow-hidden overflow-y-auto no-scrollbar"
          ref={scrollableDivRef}
        >
          <TimeDates />
        </div>
        <div
          className={`absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center transition${
            !isScrollMoreVisible ? " opacity-0" : ""
          }`}
          onClick={clickHandler}
        >
          <p className="text-yellow-btn-primary text-sm underline cursor-pointer">
            Show more
          </p>
          <ArrowDown />
        </div>
      </Container>
      <div className="absolute w-full h-full top-0 left-0 bg-hero-pattern bg-repeat z-[-1]"></div>
    </section>
  );
}
