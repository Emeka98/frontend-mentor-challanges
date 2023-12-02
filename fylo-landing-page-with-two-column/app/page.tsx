import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fylo Homepage",
  description: "Fylo is a website.",
};

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  );
}
