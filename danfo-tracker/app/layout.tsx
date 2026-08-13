import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waka | Fare Tracker",
  description:
    "Crowdsourced transport fares for Lagos, Abuja, Port Harcourt and more. Know before you board.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FEFDF9] text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
