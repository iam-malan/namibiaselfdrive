import { useCallback } from "react";

export function useLocomotiveScroll() {
  const initScroll = useCallback(async (container: HTMLElement) => {
    if (typeof window === "undefined") return;
    
    try {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll({
        el: container,
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
    } catch (error) {
      console.error("Failed to initialize scroll:", error);
    }
  }, []);

  return { initScroll };
}
