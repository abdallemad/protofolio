import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy",
  description: "Educational resources and courses by Abdalla Emad, focusing on MERN stack and modern web development technologies.",
};

export default function AcademyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Academy</h1>
      <p className="text-muted-foreground mt-4">Coming soon...</p>
    </div>
  );
}
