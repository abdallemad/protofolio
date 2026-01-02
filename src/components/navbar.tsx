"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

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
          Portfolio
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" className="rounded-full px-6" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
