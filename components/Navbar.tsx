"use client";

import Image from "next/image";

import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ToggleTheme } from "./ToggleTheme";

export const Navbar = () => {
  return (
    <nav className="sticky bg-white top-0 py-4 flex items-center justify-between px-10 dark:bg-black">
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <Image
            src="/open.svg"
            alt="Ouvrir le menu"
            width={30}
            height={30}
            className="opacity-100 transition-opacity flex hover:opacity-70 lg:hidden dark:hidden"
          />
          <Image
            src="/open-light.svg"
            alt="Ouvrir le menu"
            width={30}
            height={30}
            className="opacity-100 transition-opacity hover:opacity-70 hidden lg:hidden dark:flex"
          />
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>
              <ul className="flex flex-col items-center justify-center gap-y-4">
                {navLink.map((link) => (
                  <a
                    href={link.href}
                    key={link.key}
                    className="hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </ul>
            </SheetTitle>
            <SheetDescription className="text-center">
              Téléphone : 06 42 18 44 10
              <br />
              Email : nael.boulayoune@gmail.com
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <ul className="hidden lg:flex gap-8">
        {navLink.map((link) => (
          <a
            href={link.href}
            key={link.key}
            className="hover:underline text-[0.9em]"
          >
            {link.label}
          </a>
        ))}
      </ul>

      <a
        href="#"
        className="hidden flex-col justify-center items-center uppercase sm:flex"
      >
        <p className="text-xl font-bold lg:text-2xl">Coach Ben</p>
        <span className="text-[0.6em] tracking-wide">
          Epinal et ses alentours
        </span>
      </a>

      <div className="flex gap-5">
        <ToggleTheme />
        <Button className="hover:-translate-y-1 transition-all duration-200 ease-linear">
          <a href="tel:0642184410">Appelez-moi</a>
        </Button>
      </div>
    </nav>
  );
};

const navLink = [
  {
    label: "Tarif",
    href: "#tarif",
    key: "tarif",
  },
  {
    label: "A propos",
    href: "#a-propos",
    key: "accueil",
  },
  {
    label: "Contact",
    href: "#contact",
    key: "contact",
  },
  {
    label: "FAQ",
    href: "#faq",
    key: "faq",
  },
];
