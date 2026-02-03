"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { en } from "@/constants/translations/en";
import { ar } from "@/constants/translations/ar";

type Language = "en" | "ar";
type Direction = "ltr" | "rtl";
type TranslationType = typeof en;

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  translations: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [direction, setDirection] = useState<Direction>("ltr");
  const [translations, setTranslations] = useState<TranslationType>(en);

  useEffect(() => {
    // Initial setup or update when language changes
    const dir = language === "ar" ? "rtl" : "ltr";
    setDirection(dir);
    setTranslations(language === "ar" ? ar : en);
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
