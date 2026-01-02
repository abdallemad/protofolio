"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Lenis specifically for React usage
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
