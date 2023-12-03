import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import ContactPanel from "@/components/ContactPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fylo Homepage",
  description: "Fylo is a website.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <MainContent />
      <ContactPanel />
    </>
  );
}
