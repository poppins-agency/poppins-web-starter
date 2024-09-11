import { useEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({} as WindowSize);

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      mobile: window.innerWidth < 600,
      tablet: window.innerWidth < 1080 && window.innerWidth >= 600,
      desktop: window.innerWidth > 1080,
    });
  };

  useEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};

export default useWindowSize;
