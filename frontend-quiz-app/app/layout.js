import "./globals.css";
import { Rubik } from "next/font/google";
import Header from "@/components/Header";

const rubik = Rubik({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html className={rubik.className} lang="en">
      <body className="min-h-screen px-6 bg-mobile-light md:bg-tablet-light lg:bg-desktop-light bg-no-repeat  lg:bg-cover antialiased    w-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
