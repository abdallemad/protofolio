"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layout, Smartphone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { translations } = useLanguage();
  const t = translations.landing.about;

  const skills = [
    {
      category: t.skills.frontend,
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      items: [t.items.react, t.items.nextjs, t.items.tailwind, t.items.framer, t.items.typescript],
    },
    {
      category: t.skills.backend,
      icon: <Database className="w-6 h-6 text-green-500" />,
      items: [t.items.nodejs, t.items.mongodb, t.items.express, t.items.prisma, t.items.supabase, t.items.serverActions],
    },
    {
      category: t.skills.mobile,
      icon: <Smartphone className="w-6 h-6 text-purple-500" />,
      items: [t.items.reactNative, t.items.expo, t.items.pwa],
    },
    {
      category: t.skills.tools,
      icon: <Code2 className="w-6 h-6 text-orange-500" />,
      items: [t.items.git, t.items.vscode, t.items.figma, t.items.vercel],
    },
  ];

  return (
    <section id="about" className="py-20 section-padding container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit">{t.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-background border">{skill.icon}</div>
                    <h3 className="font-semibold text-xl">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
