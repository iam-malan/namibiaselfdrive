"use client";

export const GridBackground = () => {
  // Create an array of measurements matching the Safari Condo grid
  const measurements = [
    "28°", "45°", "64°", "90°", "90°", "120°", "145°", "56°"
  ];

  return (
    <div className="absolute inset-0 grid grid-cols-8 pointer-events-none">
      {/* Vertical lines */}
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={`line-${i}`} className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 left-0 w-[1px] h-full bg-[#4A5D23]/5" />
          
          {/* Measurement text - only show on first row */}
          {i < measurements.length && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[#4A5D23]/30 text-xs">
              {measurements[i]}
            </div>
          )}
        </div>
      ))}

      {/* Horizontal lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`horizontal-${i}`}
          className="absolute left-0 right-0 h-[1px] bg-[#4A5D23]/5"
          style={{ top: `${(i + 1) * (100 / 6)}%` }}
        />
      ))}
    </div>
  );
};
