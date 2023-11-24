import Navbar from "@/components/Navbar";
import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.className}>
      <body className="w-full min-h-screen container mx-auto overflow-x-hidden antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
