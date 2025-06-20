import { useEffect, useState } from "react";

export function useWindowSize()
{
   const [windoSize, setwindoSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setwindoSize({ width: window.innerWidth, height: window.innerHeight });
    });
  },[]);

  return windoSize
}
