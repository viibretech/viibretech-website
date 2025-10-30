import { RiArrowLeftSLine, RiFileCopyLine } from "@remixicon/react";
import { NavLink } from "./header";
import EmailInputComponent from "./email-input-component";
import { Button, Image } from "@heroui/react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="text-white bg-[#1D1D1D] space-y-10 lg:space-y-0 items-start py-20 lg:py-32 pb-32 lg:pb-60 lg:space-x-10 px-5 lg:px-40 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="space-y-4">
          <Image
            alt="viibre.png"
            src={"/images/viibre-icon.png"}
            className="w-24 lg:w-48"
          />
          <div className="flex space-x-0 items-center">
            <span>hello@viibre.io</span>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="rounded-full -scale-60 md:-scale-75"
              startContent={
                <RiFileCopyLine
                  className="cursor-pointer text-white"
                  size={22}
                />
              }
            />
          </div>
          <span className="text-slate-400">
            © 2025 Viibre Technology Limited
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl md:text-6xl font-instrument-regular mb-2">
            Stay connected
          </span>
          <span className="sm:max-w-md text-xs text-slate-400">
            Join our newsletter and stay updated on the latest trends in digital
            design
          </span>
          <br />
          <EmailInputComponent
            border="border-0 border-b-1 border-b-white"
            endContent={
              <Button
                isIconOnly
                size="sm"
                className="rounded-full -scale-60 md:-scale-75 bg-[#2E9AEE]"
                startContent={<RiArrowLeftSLine size={20} />}
              />
            }
          />
        </div>
        <nav className="flex flex-col space-y-3">
          <span className="sm:max-w-md text-xs text-slate-400">
            Quick Links
          </span>
          <NavLink href="/home">Home</NavLink>
          <NavLink href="">About</NavLink>
          <NavLink href="">Services</NavLink>
          <NavLink href="">Contact</NavLink>
        </nav>
      </div>
      <div className="w-full bottom-0 px-10 sm:px-0 right-0 left-0 absolute flex justify-center">
        <Image alt="viibre.png" src={"/images/viibre.png"} className="w-md" />
      </div>
    </div>
  );
};

export default Footer;
