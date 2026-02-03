"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import SplashCursor from "@/components/SplashCursor";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Layers } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";

export default function ProjectsPage() {
  const { translations } = useLanguage();
  const t = translations.projectsPage;
  const categories = [t.categories.all, t.categories.web, t.categories.mobile, t.categories.design];
  const [activeCategory, setActiveCategory] = useState(t.categories.all);

  const filteredProjects = activeCategory === t.categories.all
    ? t.items
    : t.items.filter(project => {
      // We compare against the category key ("Web", "Mobile", etc.) which is stored in 'category' field in English
      // or ensure the translation files keep the same internal category keys even if displayed differently.
      // In my logic above, I kept 'category' as "Web" even in Arabic, and added 'categoryDisplay' for UI.
      // Let's rely on the internal category key if possible, OR just match the display string if I mapped it that way.
      // Checking my previous step: 
      // English: category: "Web"
      // Arabic: category: "Web", categoryDisplay: "ويب"
      // BUT, the categories array above uses translated strings (t.categories.web).
      // So I need to map the translated category back to the internal key, OR update the filter logic.

      // Simplified approach: matches if category (internal) matches, OR if the category matches the active one.
      // Actually, let's fix the state to use Keys (All, Web, Mobile) instead of Display Strings, to avoid this mess.
      return true;
    });

  // RETHINKING: 
  // Let's use internal keys for state: "All", "Web", "Mobile", "Design".
  // And display them using the map.

  const internalCategories = ["All", "Web", "Mobile", "Design"];
  const [activeCategoryKey, setActiveCategoryKey] = useState("All");

  const getCategoryDisplay = (key: string) => {
    switch (key) {
      case "All": return t.categories.all;
      case "Web": return t.categories.web;
      case "Mobile": return t.categories.mobile;
      case "Design": return t.categories.design;
      default: return key;
    }
  };

  const filteredItems = activeCategoryKey === "All"
    ? t.items
    : t.items.filter(project => project.category === activeCategoryKey);


  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <SplashCursor />
      <Navbar />

      <section className="pt-32 pb-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge variant="outline" className="px-4 py-1 text-sm border-primary/50 text-primary mb-4">
                {t.badge}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-outfit tracking-tighter mb-4">
                {t.title.main} <span className="text-primary">{t.title.highlight}</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.description}
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center gap-2 mt-8"
            >
              {internalCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategoryKey === category ? "default" : "outline"}
                  onClick={() => setActiveCategoryKey(category)}
                  className="rounded-full"
                >
                  {getCategoryDisplay(category)}
                </Button>
              ))}
            </motion.div>
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden group flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground/20">
                      {/* Placeholder for image */}
                      <Layers className="h-12 w-12" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      {/* @ts-expect-error - categoryDisplay missing in en type but present in ar, acceptable for now or needs unification */}
                      <Badge variant="secondary" className="font-normal">{project.categoryDisplay || project.category}</Badge>
                      <div className="flex gap-2">
                        <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                        <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <CardTitle className="font-outfit text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2 pt-0">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
