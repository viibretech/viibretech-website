"use client";
import Header from "@/components/header";
import { Avatar, Divider, Image } from "@heroui/react";
import { RiArrowDownLine } from "@remixicon/react";
import Home1Image from "@/public/images/home1.png";
import Home2Image from "@/public/images/home2.png";
import ScrollingTextAnimation from "@/components/scroll-text";
import Footer from "@/components/footer";
import { useDeviceType } from "@/hooks/device-type-hook";
import NewChallengeLookout from "@/components/new-challenge-lookout";

export default function Home() {
  const { isMobile, isTablet } = useDeviceType();

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      //   top: window.innerHeight - (isMobile ? 500 : isTablet ? 300 : 150),
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Header />
      <div className="text-white bg-black px-5 lg:px-40 transition-all py-20 pt-32">
        <span className="text-4xl transition-all md:text-6xl font-instrument-regular">
          Driving <span className="text-primary">Business</span>
          <br />
          Growth with Intelligent <br /> Digital Solutions.
        </span>
        <div className="flex justify-end py-10">
          <div className="sm:max-w-md text-xs">
            Viibre helps businesses grow with smart, tailored software solutions
            that streamline operations, enhance experiences, and drive results.
          </div>
        </div>
        <div className="flex justify-end mt-2 mb-5 animate-bounce">
          <Avatar
            className="border-white border-1 bg-black cursor-pointer"
            size="lg"
            showFallback
            onClick={scrollDown}
            fallback={<RiArrowDownLine className="text-white" />}
          />
        </div>
      </div>
      <div className="relative">
        <Image
          alt="home1.png"
          src={Home1Image.src}
          radius="none"
          className="z-0 h-170 object-cover lg:h-max"
        />
        <div className="absolute inset-0 bg-linear-to-tr from-black to-transparent z-5" />
        <div className="absolute bottom-0 text-white z-10 px-5 lg:px-40 transition-all space-y-12 pb-5 lg:pb-20">
          <span className="text-4xl md:text-6xl font-instrument-regular">
            Where We Create <br /> the Most Impact
          </span>
          <div className="sm:max-w-md text-xs mt-3">
            We don’t just build software — we design digital solutions that
            strengthen every part of your business. Our focus areas ensure you
            get measurable results where it matters most.
          </div>
          <div className="grid grid-rows-4 lg:grid-rows-1 grid-cols-1 lg:grid-cols-4 gap-x-20 gap-y-3 w-full">
            {/*  */}
            <div className="flex flex-col text-sm w-full">
              Operations: <br />
              Work and Deliver Faster
              <Divider className="my-2 bg-gray-700" />
            </div>
            {/*  */}
            <div className="flex flex-col text-sm">
              Customer Experience:
              <br />
              Engage, Delight, Retain
              <Divider className="my-2 bg-gray-700" />
            </div>
            {/*  */}
            <div className="flex flex-col text-sm">
              Data & Insights: <br />
              See and Act Confidently
              <Divider className="my-2 bg-gray-700" />
            </div>
            {/*  */}
            <div className="flex flex-col text-sm">
              Growth & Innovation: <br />
              Scale Boldly, Stay Ahead
              <Divider className="my-2 bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-20 px-5 lg:px-40">
        <div className="flex flex-col-reverse md:flex-row space-x-12 md:items-center w-full items-stretch">
          <div className="w-full">
            <Image
              src={Home2Image.src}
              alt="Home2Image.png"
              radius="none"
              className="md:min-w-100 md:max-w-100"
            />
          </div>
          <div className="font-semibold">
            <div className="flex flex-col md:flex-row">
              <span className="h-4 mb-3 md:mb-0 text-primary mr-2 text-6xl font-instrument-regular">
                “
              </span>
              <div className="space-y-5">
                <div className="text-2xl md:text-3xl">
                  Working with Viibre transformed our business. In just six
                  months, they streamlined our operations, reduced
                  inefficiencies by 30%, and doubled our digital capabilities.
                </div>
                <div className="text-divider-600 font-inter-light">
                  From concept to launch, we craft digital solutions that
                  engage, convert, and grow seamlessly with your business.
                </div>
                <Divider className="bg-gray-300" />
                <div className="mb-3 md:mb-0">
                  <div className="text-xl ">Elizabeth Appiah</div>
                  <div className="text-divider-600 font-light">
                    Tech Lead, Healthcare Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollingTextAnimation />
      <NewChallengeLookout />
      <Footer />
    </div>
  );
}
