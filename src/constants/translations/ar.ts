import { landingAr } from "./landing-ar";
import { aboutAr } from "./about-ar";
import { contactAr } from "./contact-ar";
import { commonAr } from "./common-ar";
import { projectsAr } from "./projects-ar";

export const ar = {
  landing: landingAr,
  aboutPage: aboutAr,
  contactPage: contactAr,
  projectsPage: projectsAr,
  common: commonAr,
  hero: landingAr.hero,
  projects: landingAr.projects,
  testimonials: landingAr.testimonials,
  navbar: commonAr.navbar,
  about: landingAr.about,
  contact: landingAr.contact, // Added alias for landing contact section
};
