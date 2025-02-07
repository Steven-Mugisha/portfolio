import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import MouseFollow from "../components/main/MouseFollow";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steven Mugisha Mizero - Software Engineer Portfolio",
  description:
    "Welcome to the world of Steven Mugisha Mizero, a Software Engineer at the University of Guelph. Discover projects, skills, and professional experience.",
  keywords: [
    "Steven Mugisha Mizero",
    "Software Engineer",
    "University of Guelph",
    "Portfolio",
    "Full Stack Developer",
    "Software Engineering",
    "Machine Learning",
    "Generative AI",
    "LLM",
    "Geospatial Software Engineer",
    "GIS Analyst",
  ],
  authors: [{ name: "Steven Mugisha Mizero" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Steven Mugisha Mizero - Software Engineer Portfolio",
    description:
      "Welcome to the world of Steven Mugisha Mizero, a Software Engineer at the University of Guelph. Discover projects, skills, and professional experience.",
    type: "website",
    url: "https://www.stevenmugisha.com",
    images: [
      {
        url: "./favicon.ico",
      },
    ],
  },
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
          {/* <div className="mousefollowmobile md:hidden absolute bottom-0 -right-16"></div> */}
          <MouseFollow />
        </div>
      </body>
    </html>
  );
}
