import Navbar from "@/components/Navbar";
import "./globals.css";
import { Jost } from "next/font/google";
import Footer from "@/components/Footer";

const jost = Jost({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.className}>
      <body className="w-full min-h-screen  overflow-x-hidden antialiased">
        <div className="container mx-auto">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
