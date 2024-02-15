import { useEffect, useState } from "react";

export const useContainerDimensions = (myRef: any) => {
  const [dimensions, setDimensions] = useState({
    containerWidth: 0,
    containerHeight: 0,
  });

  useEffect(() => {
    const getDimensions = () => ({
      containerWidth: myRef.current.offsetWidth,
      containerHeight: myRef.current.offsetHeight,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return dimensions;
};
