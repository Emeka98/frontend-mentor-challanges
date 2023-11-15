import "./globals.css";
import { Rubik } from "next/font/google";
import { Providers } from "./providers";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning className={rubik.className} lang="en">
      <body
        suppressHydrationWarning
        className="min-h-screen w-full px-6 bg-mobile-light md:bg-tablet-light lg:bg-desktop-light dark:bg-mobile-dark dark:md:bg-tablet-dark dark:lg:bg-desktop-dark dark:bg-dark-navy bg-no-repeat lg:bg-cover antialiased "
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
