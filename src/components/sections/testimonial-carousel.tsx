"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechFlow",
    content:
      "Working with this developer was an absolute pleasure. Their attention to detail and ability to translate complex requirements into beautiful, functional code is unmatched.",
  },
  {
    name: "Michael Chen",
    role: "Founder at StartupX",
    content:
      "The portfolio site they built for us exceeded all expectations. The animations are smooth, the design is premium, and the performance is top-notch. Highly recommended!",
  },
  {
    name: "Emily Davis",
    role: "Creative Director",
    content:
      "I've worked with many developers, but few have the design sensibility that this one possesses. They truly understand how to bridge the gap between design and engineering.",
  },
  {
    name: "David Wilson",
    role: "CTO at FutureScale",
    content:
      "Clean code, modern tech stack, and excellent communication. They delivered the project ahead of schedule and the quality was outstanding.",
  },
];

export function TestimonialCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  return (
    <section className="py-20 bg-background/50 relative overflow-hidden cursor-grab active:cursor-grabbing">
      {/* Decorator */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what people are saying about working with me.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4"
              >
                <div className="p-1 h-full">
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
                    <CardContent className="flex flex-col justify-between h-full p-6">
                      <div>
                        <Quote className="h-8 w-8 text-primary/50 mb-4 group-hover:text-primary transition-colors" />
                        <p className="text-lg mb-6 leading-relaxed italic text-muted-foreground group-hover:text-foreground transition-colors">
                          &quot;{testimonial.content}&quot;
                        </p>
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold">
                          {testimonial.name[0]}
                        </div>
                        <div>
                          <p className="font-semibold font-outfit">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
