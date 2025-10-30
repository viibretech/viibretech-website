"use client";
import { useDeviceType } from "@/hooks/device-type-hook";
import { RiMenuFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const { isMobile } = useDeviceType();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`flex justify-between px-5 lg:px-40 transition-all duration-300 py-7 fixed w-full items-center bg-black z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Image
        alt="viibre.png"
        src={"/images/viibre-icon.png"}
        className="-translate-x-1 scale-[0.9] lg:scale-[0.9]"
        width={100}
        height={20}
      />
      {isMobile && (
        <RiMenuFill className="text-white cursor-pointer" size={20} />
      )}
      {!isMobile && (
        <nav className="space-x-5">
          <NavLink href="/home">Home</NavLink>
          <NavLink href="">About</NavLink>
          <NavLink href="">Services</NavLink>
          <NavLink href="">Contact</NavLink>
        </nav>
      )}
    </div>
  );
};

export default Header;

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="relative text-xs font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
  >
    {children}
  </Link>
);
