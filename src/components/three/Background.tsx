"use client";

import { Suspense, useEffect, useState } from "react";

export function Background() {
  const [ThreeBackground, setThreeBackground] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import("./ThreeBackground").then((mod) => {
      setThreeBackground(() => mod.default);
    });
  }, []);

  if (!ThreeBackground) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-gray-900 to-black" />
    );
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-gray-900 to-black" />}>
        <ThreeBackground />
      </Suspense>
    </div>
  );
}
