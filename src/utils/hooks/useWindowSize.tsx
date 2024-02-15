
import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0, mobile: true ,tablet: false, desktop: false });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      mobile: window.innerWidth < 600,
      tablet: window.innerWidth < 960 && window.innerWidth >= 600,
      desktop: window.innerWidth > 960
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