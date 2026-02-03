"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const { translations } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full border border-transparent transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-border shadow-md w-full max-w-4xl"
            : "bg-transparent w-full max-w-6xl"
        )}
      >
        <Link href="/" className="text-xl font-bold tracking-tighter font-outfit">
          {translations.navbar.portfolio}
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {translations.navbar[item.name.toLowerCase() as keyof typeof translations.navbar]}
            </Link>
          ))}
          <Button size="sm" className="rounded-full px-6" asChild>
            <Link href="/contact">{translations.navbar.contact}</Link>
          </Button>
          <div className="flex items-center gap-2 pl-2 border-l border-border/50">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
