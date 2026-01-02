"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import SplashCursor from "@/components/SplashCursor";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Heart, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <SplashCursor />
      <Navbar />

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-12 items-center mb-24"
          >
            <div className="flex-1 space-y-6">
              <Badge variant="outline" className="px-4 py-1 text-sm border-primary/50 text-primary">
                About Me
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-outfit tracking-tighter">
                Crafting digital experiences with <span className="text-primary">passion</span> and purpose.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a full-stack developer based in the cloud, specializing in building exceptional digital experiences.
                With a background in design and a heart for engineering, I bridge the gap between aesthetics and functionality.
              </p>
              <div className="flex gap-4">
                <Button className="rounded-full px-8">
                  Download Resume
                </Button>
                <Button variant="outline" className="rounded-full px-8">
                  View Projects
                </Button>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 bg-muted/50 backdrop-blur-sm p-2 group">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-background rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                  <div className="text-center p-8">
                    <h3 className="text-2xl font-bold mb-2">Creative Developer</h3>
                    <p className="text-muted-foreground">Building the future, one commit at a time.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Journey Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm"
            >
              <Code2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-outfit">Technical Mastery</h3>
              <p className="text-muted-foreground">
                Proficient in modern web technologies including React, Next.js, TypeScript, and Node.js.
                Always learning and adapting to the latest industry standards.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm"
            >
              <Heart className="h-10 w-10 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 font-outfit">User-Centric Design</h3>
              <p className="text-muted-foreground">
                I believe that great software is not just about code, but about the people who use it.
                Accessibility and user experience are at the core of everything I build.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm"
            >
              <Rocket className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 font-outfit">Performance First</h3>
              <p className="text-muted-foreground">
                Optimizing for speed and efficiency is my obsession.
                I ensure that every application I deploy is blazing fast and scalable.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-primary/20 to-purple-500/20 p-[1px]"
          >
            <div className="bg-background/90 backdrop-blur-xl rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 font-outfit">Ready to start a project?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                I'm currently available for freelance work and open to new opportunities.
                Let's build something amazing together.
              </p>
              <Button size="lg" className="rounded-full text-base px-8 group">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
