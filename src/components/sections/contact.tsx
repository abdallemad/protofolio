"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Contact() {
  const { translations } = useLanguage();
  const t = translations.landing.contact;

  return (
    <section id="contact" className="py-20 section-padding container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit">{t.title}</h2>
          <p className="text-muted-foreground text-lg">
            {t.description}
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              {t.cardTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">{t.form.name}</label>
                  <Input id="name" placeholder={t.form.namePlaceholder} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">{t.form.email}</label>
                  <Input id="email" type="email" placeholder={t.form.emailPlaceholder} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">{t.form.message}</label>
                <Textarea id="message" placeholder={t.form.messagePlaceholder} className="min-h-[150px]" />
              </div>
              <Button className="w-full md:w-auto">
                {t.form.submit} <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-8 text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" /> {t.emailText}
          </a>
          {/* Add more social links here */}
        </div>
      </motion.div>
    </section>
  );
}
