"use client";

export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#F5F5F0]" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(74, 93, 35, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(74, 93, 35, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: 'center center'
        }}
      >
        {/* Dots */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(74, 93, 35, 0.15) 1.5px, transparent 1.5px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: 'center center'
          }}
        />
      </div>
    </div>
  );
}
