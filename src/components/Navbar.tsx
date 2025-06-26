"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navlinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className="sticky top-5 flex justify-between items-center px-5 md:px-10 h-16 w-[95%] md:w-4/5 mx-auto 
        bg-white/70 dark:bg-zinc-900/80 text-black dark:text-zinc-100 
        border border-zinc-300 dark:border-zinc-700 
        rounded-xl backdrop-blur-md z-50 transition-colors duration-300"
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="cursor-pointer text-2xl font-medium font-mono">
              <span className="text-blue-600 dark:text-blue-500">A</span>nimes
              <span className="text-blue-600 dark:text-blue-500">h</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-7">
          {navlinks.map((val) => (
            <li className="list-none" key={val.href}>
              <Link
                href={val.href}
                className={`transition duration-300 ${
                  pathname === val.href
                    ? "text-blue-600 dark:text-blue-500 font-semibold border-b-2 border-blue-600 dark:border-blue-500"
                    : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {val.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop ModeToggle */}
        <div className="hidden md:block">
          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        {isMounted && (
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="text-black dark:text-white" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-white/70 dark:bg-zinc-900/70 text-black dark:text-white border-none 
                  backdrop-blur-lg flex flex-col justify-center items-center gap-6"
              >
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                </SheetHeader>

                {navlinks.map((val) => (
                  <Link
                    key={val.href}
                    href={val.href}
                    className={`text-xl font-medium ${
                      pathname === val.href
                        ? "text-blue-600 dark:text-blue-500 border-b-2 border-blue-600 dark:border-blue-500"
                        : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    {val.label}
                  </Link>
                ))}

                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Click Me!
                </button>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </nav>

      {/* Floating ModeToggle for Mobile */}
      {isMounted && (
        <div className="md:hidden fixed bottom-4 right-4 z-[100]">
          <ModeToggle />
        </div>
      )}
    </>
  );
};
