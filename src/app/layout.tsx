import type { Metadata } from "next";
import "./globals.css";
import Nav from "./nav/nav";
import Footer from "./footer/footer";

export const metadata: Metadata = {
  title: "Numberfall — A Fast, Vibrant Arithmetic Puzzle Game",
  description: "Link numbers and operators, solve targets, and chase high scores in Numberfall—an offline-friendly arithmetic puzzle game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Nav />
        <div id="main-content">
          {children}
        </div>
        <Footer />

      </body>
    </html>
  );
}
