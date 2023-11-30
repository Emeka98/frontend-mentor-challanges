import { Work_Sans } from "next/font/google";
import "./globals.css";

const WORK_SANS = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "FAQ Accordion",
  description: "FAQ Accordion pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${WORK_SANS.className} min-h-screen w-full `}>
        {children}
      </body>
    </html>
  );
}
