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
import Image from "next/image";

const categories = ["All", "Web", "Mobile", "Design"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web",
    description: "A full-featured online store with cart, checkout, and admin dashboard.",
    image: "/api/placeholder/600/400", // Using placeholder for now, would typically use generate_image or local assets
    tags: ["Next.js", "Stripe", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Finance Tracker App",
    category: "Mobile",
    description: "Mobile-first application for tracking personal expenses and investments.",
    image: "/api/placeholder/600/400",
    tags: ["React Native", "Firebase", "Chart.js"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "AI Dashboard",
    category: "Web",
    description: "Analytics dashboard powered by machine learning algorithms.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "React", "D3.js"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Social Media Brand",
    category: "Design",
    description: "Complete brand identity and social media kit for a lifestyle influencer.",
    image: "/api/placeholder/600/400",
    tags: ["Figma", "Photoshop", "Illustrator"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Task Management Tool",
    category: "Web",
    description: "Collaborative project management tool for remote teams.",
    image: "/api/placeholder/600/400",
    tags: ["Vue.js", "Node.js", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Fitness Tracker UI",
    category: "Mobile",
    description: "Clean and intuitive user interface for a fitness tracking application.",
    image: "/api/placeholder/600/400",
    tags: ["Sketch", "Prototyping"],
    github: "#",
    live: "#",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

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
                Portfolio
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-outfit tracking-tighter mb-4">
                My <span className="text-primary">Masterpieces</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of projects attempting to solve real-world problems with elegant code and design.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center gap-2 mt-8"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
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
                      <Badge variant="secondary" className="font-normal">{project.category}</Badge>
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
