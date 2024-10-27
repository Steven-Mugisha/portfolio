import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import MouseFollow from "../components/main/MouseFollow";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steven Mugisha",
  description: "Software Developer @University of Guelph",
  keywords: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${rubik.className} bg-[#010103] bg-gradient-to-br from-[#010103] from-50% to-[#000000] leading-relaxed text-gray-400 antialiased selection:bg-[#eaeaece2] selection:text-black min-h-screen overscroll-none`}
      >
        <div>
          {children}
          <div className="mousefollowmobile md:hidden absolute bottom-0 -right-16"></div>
          <MouseFollow />
        </div>
      </body>
    </html>
  );
}
