import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "View the portfolio of Abdalla Emad, featuring a variety of MERN stack applications, web platforms, and mobile-responsive designs.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
