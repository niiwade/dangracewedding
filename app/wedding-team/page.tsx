const Page = () => {
  return (
    <>
      <div className="mx-auto max-w-md text-center font-serif italic">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">
          Bridal Team
        </h2>
        {/* <p className="mt-4 text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p> */}
      </div>

      <section className="bg-white  text-gray-700 sm:py-1 lg:mb-6 font-serif italic">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-4 ">
            <article className="relative ">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="/groom.jpg"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-1 rounded-full bg-white">
                {/* <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Sale</p> */}
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" className="cursor-pointer">
                      Daniel Ahinful
                      <span className="absolute" aria-hidden="true"></span>
                    </a>
                    <p className="text-center">Groom</p>
                  </h3>
                </div>
              </div>
            </article>

            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover rounded-xl transition-all duration-300"
                  src="/bride.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" className="cursor-pointer">
                      Grace Mbiah Nelson
                      <p className="text-center">Bride</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:mb-6 font-serif italic">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg ">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="ben-best-man.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center text-center">
                    <a href="#" title="" className="cursor-pointer">
                      Ben
                      <p className="text-center">Best Man</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>

            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="aba-maid-of-honor.jpg"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-1 rounded-full bg-white">
                {/* <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Sale</p> */}
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center">
                    <a href="#" title="" className="cursor-pointer">
                      Aba
                      <p className="text-center">Maid of Honour</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>

            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="brainer.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center">
                    <a href="/" title="" className="cursor-pointer">
                      Brainer
                      <p className="text-center">Groomsman</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>

            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="tina.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center">
                    <a href="/" title="" className="cursor-pointer">
                      Tina
                      <p className="text-center">Bridesmaid</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="aladin.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4 flex items-start  justify-center ">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center">
                    <a href="/" title="" className="cursor-pointer">
                      Aladin
                      <p className="text-center">Groomsman</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>

            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="ewura.jpg"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-1 rounded-full bg-white">
                {/* <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Sale</p> */}
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center">
                    <a href="#" title="" className="cursor-pointer">
                    Ewura
                      <p className="text-center">Bridesmaid</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>

            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="priscy.jpg"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-1 rounded-full bg-white">
                {/* <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Sale</p> */}
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center">
                    <a href="#" title="" className="cursor-pointer">
                      Priscy
                      <p className="text-center">Bridesmaid</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>

            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="hella.jpg"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-1 rounded-full bg-white">
                {/* <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Sale</p> */}
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center">
                    <a href="#" title="" className="cursor-pointer">
                    Hella
                      <p className="text-center">Bridesmaid</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>

            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-150 h-full w-full object-cover transition-all duration-300"
                  src="/eugene.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center">
                    <a href="/" title="" className="cursor-pointer">
                      Eugene
                      <p className="text-center">Groomsman</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>

            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="/portia.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center">
                    <a href="/" title="" className="cursor-pointer">
                    Portia
                      <p className="text-center">Bridesmaid</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>

            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="/Tjay.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center">
                    <a href="/" title="" className="cursor-pointer">
                    Tjay
                      <p className="text-center">Groomsman</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>


            <article className="relative">
              <div className="aspect-square overflow-hidden shadow-sm transition hover:shadow-lg">
                <img
                  className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="/Sperry.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4 flex items-start  justify-center">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center">
                    <a href="/" title="" className="cursor-pointer">
                    Sperry
                      <p className="text-center">Bridesmaid</p>
                    </a>
                  </h3>
                </div>
              </div>
            </article>



      
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
