"use client";

import { Drawer } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import XmarkIcon from "~/assets/svg/xmark.svg";
import InstagramIcon from "~/assets/svg/instagram.svg";
import FacebookIcon from "~/assets/svg/facebook.svg";
import LogoIcon from "~/assets/svg/logo.svg";

const LINKS = [
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "How we work",
    href: "#work",
  },
  {
    label: "Our Services",
    href: "#services",
  },
  {
    label: "Career Opportunities",
    href: "#career",
  },
  {
    label: "Contact Us",
    href: "#contact",
  },
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = () => setIsDrawerOpen((prev) => !prev);

  return (
    <>
      <div className="h-[100px]">
        <header
          id="header"
          className="fixed z-10 flex h-[100px] w-full items-center justify-between bg-[#619D61] px-[30px] shadow-lg md:px-[56px]"
        >
          <Link href="#intro">
            <Image
              className="w-[80px] md:w-[100px]"
              src={LogoIcon}
              alt="Logo"
            />
          </Link>
          <nav className="hidden lg:flex">
            {LINKS.map(({ href, label }) => (
              <Link
                className="flex h-[33px] items-center border-r-2 border-white px-[22px] text-xl last:border-r-0 last:border-none [&_h3]:hover:after:scale-x-100"
                key={href}
                href={href}
              >
                <h3 className="relative text-base after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform hover:after:origin-bottom-left">
                  {label}
                </h3>
              </Link>
            ))}
          </nav>
          <button
            className="ml-[22px] w-7 lg:hidden"
            onClick={toggleDrawerOpen}
          >
            <div className="h-[3px] w-full bg-white" />
            <div className="mt-[7px] h-[3px] w-full bg-white" />
            <div className="mt-[7px] h-[3px] w-full bg-white" />
          </button>
        </header>
      </div>

      <Drawer anchor="bottom" open={isDrawerOpen} onClose={toggleDrawerOpen}>
        <div className="h-screen w-screen bg-[#619D61] font-medium text-white">
          <div className="flex h-[100px] items-center justify-between px-[30px] md:px-[56px]">
            <Link href="#intro" onClick={toggleDrawerOpen}>
              <Image
                className="w-[80px] md:w-[100px]"
                src={LogoIcon}
                alt="Logo"
              />
            </Link>
            <Image
              src={XmarkIcon}
              alt="Close button"
              onClick={toggleDrawerOpen}
              className="w-[44px] cursor-pointer"
            />
          </div>
          <div className="p-4">
            <nav className="mt-24 flex flex-col items-center">
              {LINKS.map((link, index) => (
                <Link
                  onClick={toggleDrawerOpen}
                  className="mt-5 text-xl font-bold first:mt-0"
                  href={link.href}
                  key={index}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="my-[18px] h-[2px] bg-white" />
            <div className="mt-3 flex justify-center gap-[22px]">
              <Link
                target="_blank"
                href={
                  "https://www.instagram.com/aestheticgardensuk?igsh=b2pvNTdoMDFiNWN1&utm_source=qr"
                }
              >
                <Image src={InstagramIcon} alt="Instagram" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.facebook.com/profile.php?id=61561168437821"}
              >
                <Image src={FacebookIcon} alt="Facebook" />
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
