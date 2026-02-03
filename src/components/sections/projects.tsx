"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { useLanguage } from "@/components/language-provider";

export function Projects() {
  const { translations } = useLanguage();
  const t = translations.projects;

  return (
    <section id="projects" className="py-20 section-padding container mx-auto">
      <div className="space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit">{t.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {/* Placeholder for image - using a gradient for now if image fails */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:scale-105 transition-transform duration-500" />
                  {/* <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /> */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl">
                    {t.overlay.text}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-outfit text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2 grid md:grid-cols-2">
                  <Button variant="outline" size="sm" className="">
                    <Github className="w-4 h-4 mr-2" /> {t.buttons.code}
                  </Button>
                  <Button size="sm" className="">
                    <ExternalLink className="w-4 h-4 mr-2" /> {t.buttons.demo}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
