import { useEffect } from "react";

export function useLocomotiveScroll() {
  useEffect(() => {
    (async () => {
      if (typeof window === "undefined") return;
      
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]") as HTMLElement,
        smooth: true,
        multiplier: 1,
        lerp: 0.1,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      return () => {
        scroll.destroy();
      };
    })();
  }, []);
}
