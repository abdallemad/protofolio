"use client";

import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/40 bg-background/95 backdrop-blur-md">
      <div className="container flex flex-col md:flex-row items-center mx-auto max-w-[90%] justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Portfolio. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-1">
          Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Shadcn.
        </div>
      </div>
    </footer>
  );
}
