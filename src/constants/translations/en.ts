import { landingEn } from "./landing-en";
import { aboutEn } from "./about-en";
import { contactEn } from "./contact-en";
import { commonEn } from "./common-en";
import { projectsEn } from "./projects-en";

export const en = {
  landing: landingEn,
  aboutPage: aboutEn,
  contactPage: contactEn,
  projectsPage: projectsEn,
  common: commonEn,
  // Aliases for component usage
  hero: landingEn.hero,
  projects: landingEn.projects,
  testimonials: landingEn.testimonials,
  navbar: commonEn.navbar,
  about: landingEn.about,
  contact: landingEn.contact, // Added alias for landing contact section
};
