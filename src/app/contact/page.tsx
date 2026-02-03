import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Abdalla Emad for collaborations, project inquiries, or any questions regarding MERN Full Stack development.",
};

export default function ContactPage() {
  return <ContactClient />;
}
