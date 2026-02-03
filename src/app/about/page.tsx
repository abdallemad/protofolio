import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Abdalla Emad, a MERN Full Stack Developer based in Mansoura, Egypt. Discover his journey, skills, and passion for web development.",
};

export default function AboutPage() {
  return <AboutClient />;
}
