"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "NHS Recruitment", href: "/nhs-recruitment" },
  { title: "Recruitment Process", href: "/recruitment-process" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between">
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
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
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
  return (
    <div className="flex flex-col space-y-3">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="text-foreground/70 transition-colors hover:text-foreground"
          onClick={() => setIsOpen(false)}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
