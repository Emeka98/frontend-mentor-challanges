import { mainFont } from "@/libs/font";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
