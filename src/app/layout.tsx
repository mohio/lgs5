import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ган Грүүп | Ган карказ, барилга угсралтын компани",
  description: "Ирээдүйг гангаар бүтээнэ. Барилга угсралт, ган карказын цогц шийдэл. 10+ жилийн туршлагатай мэргэжлийн баг.",
  keywords: "ган карказ, барилга угсралт, steel frame, construction, Mongolia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
