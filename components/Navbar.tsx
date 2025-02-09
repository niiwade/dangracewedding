import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Link href="/" prefetch={false}>
                  <Image
                    className="h-6 w-6"
                    src="/jtlogo.png"
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </Link>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" prefetch={false}>
                <Image
                  className="h-30 w-30"
                  src="/jtlogo.png"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>
              <div className="grid gap-2 py-6 text-white">
                <Link
                  href="/wedding-team"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Wedding Team
                </Link>
                <Link
                  href="/gallery"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Gallery
                </Link>
                <Link
                  href="/faq"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  FAQ
                </Link>
                <Link
                  href="/rsvp"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  RSVP
                </Link>
                <Link
                  href="/order-of-event"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Order of Event
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
            <Image
              className="h-20 w-20"
              src="/jtlogo.png"
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <NavigationMenu className="hidden lg:flex ">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  href="/wedding-team"
                  className="group inline-flex h-9 w-max items-center justify-center  rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  prefetch={false}
                >
                  Wedding Team
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="/gallery"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  prefetch={false}
                >
                  Gallery
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="/faq"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  prefetch={false}
                >
                  FAQ
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  href="/order-of-event"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  prefetch={false}
                >
                  Order of Event
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-auto flex gap-2">
            <Button variant="outline">
              <Link
                href="/rsvp"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                RSVP
              </Link>
            </Button>
            <Button>
              <Link
                href="/gift"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Gift The Couple
              </Link>
            </Button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
