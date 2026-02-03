"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import SplashCursor from "@/components/SplashCursor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function ContactPage() {
  const { translations } = useLanguage();
  const t = translations.contactPage;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <SplashCursor />
      <Navbar />

      <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-outfit tracking-tighter mb-4">
              {t.title.main} <span className="text-primary">{t.title.highlight}</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {t.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t.info.email.title}</h3>
                      <p className="text-muted-foreground">hello@example.com</p>
                      <p className="text-muted-foreground">careers@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t.info.phone.title}</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">{t.info.phone.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t.info.office.title}</h3>
                      <p className="text-muted-foreground">123 Tech Avenue</p>
                      <p className="text-muted-foreground">San Francisco, CA 94107</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-md border-border/50">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.form.firstName}</label>
                      <Input placeholder={t.form.firstNamePlaceholder} className="bg-background/50 border-input/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.form.lastName}</label>
                      <Input placeholder={t.form.lastNamePlaceholder} className="bg-background/50 border-input/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.form.email}</label>
                    <Input type="email" placeholder={t.form.emailPlaceholder} className="bg-background/50 border-input/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.form.message}</label>
                    <Textarea placeholder={t.form.messagePlaceholder} className="min-h-[150px] bg-background/50 border-input/50 resize-none" />
                  </div>
                  <Button size="lg" className="w-full">
                    {t.form.submit} <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
