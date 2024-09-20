"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Import dropdown components

// const navItems = [
//   { title: "Home", href: "/" },
//   { title: "About", href: "/about" },
//   { title: "Services", href: "/services" },
//   { title: "Careers", href: "/careers" },
//   { title: "Recruitment", href: "/recruitment" },
//   { title: "Compliance", href: "/compliance" },
//   { title: "International Recruitment", href: "/international-recruitment" },
//   { title: "Contact", href: "/contact" },
// ];

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  {
    title: "Recruitment",
    href: "/recruitment",
    subItems: [
      { title: "Careers", href: "/careers" },
      { title: "Recruitment", href: "/recruitment" },
      {
        title: "International Recruitment",
        href: "/international-recruitment",
      },
    ],
  },
  { title: "Compliance", href: "/compliance" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full pt-5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div
        className="container mx-auto flex h-14 items-center
       justify-between"
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/primelocus.png"
              alt="prime Locums"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <DesktopNav items={navItems} />

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pl-2">
            <MobileNav items={navItems} setIsOpen={setIsOpen} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MobileNav({ items, setIsOpen }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="flex flex-col space-y-3">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between w-full text-left text-foreground/70 transition-colors hover:text-foreground"
          >
            {item.title}
            {item.subItems && (
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            )}
            {/* Arrow Icon */}
          </button>
          {openIndex === index && item.subItems && (
            <div className="ml-4 mt-1 flex flex-col space-y-2">
              {item.subItems.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={subItem.href}
                  className="text-foreground/50 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function DesktopNav({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <nav className="hidden md:flex md:items-center md:space-x-6">
      <ul className="flex items-center space-x-6 text-lg font-medium">
        {items.map((item, index) => (
          <li key={index} className="relative group">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Link
                  href={item.href}
                  className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item.title}
                  {item.subItems && (
                    <span className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  )}
                </Link>
              </DropdownMenuTrigger>
              {item.subItems && (
                <DropdownMenuContent className="mt-2 w-60 rounded-md bg-background shadow-lg">
                  {item.subItems.map((subItem, subIndex) => (
                    <DropdownMenuItem key={subIndex}>
                      <Link
                        href={subItem.href}
                        className="block px-4 py-2 text-base transition-colors hover:text-base whitespace-normal"
                      >
                        {subItem.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          </li>
        ))}
      </ul>
    </nav>
  );
}
