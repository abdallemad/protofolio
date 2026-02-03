"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

import { useLanguage } from "@/components/language-provider";
import { Marquee } from "../ui/marquee";

export function TestimonialCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const { translations } = useLanguage();
  const t = translations.testimonials;

  return (
    <section className="py-20 bg-background/50 relative overflow-hidden">
      {/* Decorator */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="overflow-hidden relative" ref={emblaRef}>
          <div className="flex -ml-4">
            <Marquee pauseOnHover className="[--duration:20s] flex dir-left">
              {t.items.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4 max-w-xl"
                >
                  <div className="p-1 h-full max-w-xl">
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
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
