import "./globals.css";

import { Theme } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Weather",
  description:
    "Discover the upcoming weather forecast for the next five days on our comprehensive weather website. Stay informed about tomorrow's weather conditions and plan your week ahead with accuracy and confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-img-light bg-cover bg-no-repeat dark:bg-img-dark ${manrope.className}`}
      >
        <Theme>{children}</Theme>
        <Analytics />
      </body>
    </html>
  );
}
