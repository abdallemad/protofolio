"use client";

import { Heart } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { translations } = useLanguage();
  const t = translations.common.footer;

  return (
    <footer className="py-8 border-t border-border/40 bg-background/95 backdrop-blur-md">
      <div className="container flex flex-col md:flex-row items-center mx-auto max-w-[90%] justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} {t.rights}</span>
        </div>
        <div className="flex items-center gap-1">
          {t.builtWith} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t.using}
        </div>
      </div>
    </footer>
  );
}
