const Page = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                Frequently
                <br />
                asked questions
              </h2>
              <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
                Answers to the most frequently asked questions.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
              <div
                className="hs-accordion pb-3 active"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  type="button" // Explicit type attribute
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  aria-label="Toggle accordion for 'My team has credits. How do we use them?'"
                >
                  What is the dress code?
                  <svg
                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Expand Icon</title>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Collapse Icon</title>
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>

                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p className="text-gray-600 dark:text-neutral-400">
                    We would love to see you in your best and comfortable
                    SEMIFORMAL TO FORMAL ATIRE , Please note Burgundy is
                    reserved for the bride and groom only.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion pb-3 active"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  type="button" // Explicit type attribute
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  aria-label="Toggle accordion for 'My team has credits. How do we use them?'"
                >
                  Adult Only
                  <svg
                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Expand Icon</title>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Collapse Icon</title>
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>

                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p className="text-gray-600 dark:text-neutral-400">
                    While we love your children, unless they were mentioned in
                    the invitation , we regretfully cannot accomodate everyone's
                    children due to restricted numbers and space. We hope that
                    you would take this opportunity to let your hair down and
                    dance with us.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion pb-3 active"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  type="button" // Explicit type attribute
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  aria-label="Toggle accordion for 'My team has credits. How do we use them?'"
                >
                  Privacy Note
                  <svg
                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Expand Icon</title>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Collapse Icon</title>
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>

                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p className="text-gray-600 dark:text-neutral-400">
                    This is a small and intimate wedding and we ask you to
                    refrain from spreading our inviation. Only person closest to
                    us will be in attendance to our exchange of vows
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <button
                  type="button" // Explicit type attribute
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  aria-label="Toggle accordion for 'My team has credits. How do we use them?'"
                >
                  Can i bring someone
                  <svg
                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Expand Icon</title>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Collapse Icon</title>
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>

                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <p className="text-gray-600 dark:text-neutral-400">
                    Unfortunately due to the space and seating constraints, we
                    kindly ask for your understanding that only people listed in
                    the invitation will be present to ensure that every guest
                    has a comfortable and enjoyable experience.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <button
                  type="button" // Explicit type attribute
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  aria-label="Toggle accordion for 'My team has credits. How do we use them?'"
                >
                  What are the ceremony and reception locations?
                  <svg
                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Expand Icon</title>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Collapse Icon</title>
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>

                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <p className="text-gray-600 dark:text-neutral-400">
                    The ceremony will take place at the Dreamz and Memoriez
                    Events Garden - Achimota
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <button
                  type="button" // Explicit type attribute
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  aria-label="Toggle accordion for 'My team has credits. How do we use them?'"
                >
                  Gift Guide
                  <svg
                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Expand Icon</title>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Collapse Icon</title>
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>

                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <p className="text-gray-600 dark:text-neutral-400">
                    With all that we have, we been truly blessed , your presence
                    and prayers are all we request, but if desire to gift , you
                    can gift the couple on our website or approach the gift
                    table on the wedding day.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <button
                  type="button" // Explicit type attribute
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  aria-label="Toggle accordion for 'My team has credits. How do we use them?'"
                >
                  Unplugged Ceremony
                  <svg
                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Expand Icon</title>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Collapse Icon</title>
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>

                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <p className="text-gray-600 dark:text-neutral-400">
                    We truly appreciate the genuine happiness felt on this
                    celebration with you . Please turn off / silent your phones
                    and cameras until after the ceremony.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <button
                  type="button" // Explicit type attribute
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  aria-label="Toggle accordion for 'My team has credits. How do we use them?'"
                >
                  How do I RSVP?
                  <svg
                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Expand Icon</title>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <title>Collapse Icon</title>
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>

                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <p className="text-gray-600 dark:text-neutral-400">
                    Please RSVP by January 10 2025. Kindly message via SMS or
                    call
                  </p>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Abby - +233240576624
                  </p>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Elvis - +23553086960
                  </p>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Bless - +23340277447
                  </p>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Abena- +233557463847
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
