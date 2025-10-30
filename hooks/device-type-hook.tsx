"use client";
import { useEffect, useState } from "react";

export function useDeviceType() {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;

      setDevice({
        isMobile: width <= 490, // Tailwind sm breakpoint
        isTablet: width > 640 && width <= 1024, // Tailwind md/lg
        isDesktop: width > 1024, // Tailwind xl+
      });
    };

    checkDevice(); // Run on mount

    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return device;
}
