import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
// import React from 'react'

const Footer = () => {
	return (
		<>
			{/* <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/jtlogo.png" alt="logo" width={74} height={29}/>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
<FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2024 #ALamp4Trey | All rights reserved</p>
      </div>
    </footer> */}

			<footer className="relative   bg-[url('/images/8.jpg')] px-4 pt-20">
				<div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-yellow-600 bg-white p-2">
					<Image
						src="/dglogo.png"
						alt="logo"
						className="h-full object-contain w-full"
						width={100}
						height={100}
					/>
				</div>
				<nav
					aria-label="Footer Navigation"
					className="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
				>
					<a href="/wedding-team" className="font-medium text-black">
						Wedding Team
					</a>
					<a href="/gallery" className="font-medium text-black">
						{" "}
						Gallery
					</a>
					<a href="/faq" className="font-medium text-black">
						FAQ
					</a>
					<a href="/order-of-event" className="font-medium text-black">
						{" "}
						Programme Outline
					</a>
				</nav>
				<p className="py-5 text-center text-black">
					2025 #Dannel2025 | All rights reserved
				</p>
				<p className="py-2 text-center ">
					Powered by <span> <a href="https://www.revasint.com/" className="font-medium text-blue-500">
						Revas
					</a> </span>
				</p> 
			</footer>
		</>
	);
};

// type FooterColumnProps = {
//   title: string;
//   children: React.ReactNode;
// }

// const FooterColumn = ({ title, children }: FooterColumnProps) => {
//   return (
//     <div className="flex flex-col gap-5">
//       <h4 className="bold-18 whitespace-nowrap">{title}</h4>
//       {children}
//     </div>
//   )
// }

export default Footer;
