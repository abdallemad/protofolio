import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Abdalla Emad | MERN Full Stack Developer",
    template: "%s | Abdalla Emad"
  },
  description: "MERN Full Stack Developer based in Mansoura, Egypt. Specialist in building high-performance web applications using React, Next.js, Node.js, and MongoDB.",
  keywords: ["Abdalla Emad", "MERN Stack", "Full Stack Developer", "Mansoura", "Egypt", "React Developer", "Next.js", "Web Development"],
  authors: [{ name: "Abdalla Emad" }],
  creator: "Abdalla Emad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Abdalla Emad | MERN Full Stack Developer",
    description: "Building digital experiences that matter with modern technologies.",
    siteName: "Abdalla Emad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdalla Emad | MERN Full Stack Developer",
    description: "Building digital experiences that matter with modern technologies.",
    creator: "@abdalla_emad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
