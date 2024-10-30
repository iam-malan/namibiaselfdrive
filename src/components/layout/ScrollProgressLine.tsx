"use client";

import { useEffect, useRef } from 'react';

export const ScrollProgressLine = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      if (!lineRef.current || !carRef.current) return;
      
      const progress = parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue('--scroll-progress'));
      
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = Math.max(scrollHeight - windowHeight, 1);
      const scrollPercentage = Math.min(Math.max(progress / maxScroll, 0), 1);
      
      // Update line height
      lineRef.current.style.transform = `scaleY(${scrollPercentage})`;
      
      // Update car position
      const totalHeight = window.innerHeight - 50; // Subtract car height to keep it visible
      const carPosition = scrollPercentage * totalHeight;
      carRef.current.style.top = `${carPosition}px`;
    };

    const observer = new MutationObserver(() => {
      requestAnimationFrame(updateProgress);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style']
    });

    window.addEventListener('resize', updateProgress);
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 pointer-events-none">
      <div className="absolute left-[120px] h-full w-[2px]">
        {/* Background line */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#4A5D23]/10" />
        
        {/* Progress Line */}
        <div 
          ref={lineRef}
          className="absolute top-0 left-0 w-full h-full bg-[#4A5D23] origin-top transform scale-y-0"
        />
        
        {/* Car Icon */}
        <div 
          ref={carRef}
          className="absolute left-1/2 transform -translate-x-1/2 text-[#4A5D23]"
          style={{ top: 0 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform -rotate-90"
          >
            <path
              d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
