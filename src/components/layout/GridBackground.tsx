export const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Vertical grid lines */}
      <div className="absolute inset-0 flex">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="flex-1 border-r border-[#4A5D23]/10 first:border-l"
          />
        ))}
      </div>
      
      {/* Horizontal grid lines */}
      <div className="absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="w-full h-[4.166vh] border-b border-[#4A5D23]/10 first:border-t"
          />
        ))}
      </div>
    </div>
  );
};
