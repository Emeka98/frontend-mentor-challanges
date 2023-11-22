import "./globals.css";


export const metadata = {
  title: "Homepage",
  description: "Designo homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
