import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile, site } from "@/lib/content";
import "./globals.css";
const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});
const title = `${profile.firstName} ${profile.lastName} | ${profile.role.replace(" · ", " & ")}`;
const description = `Portfolio and curriculum vitae of ${profile.firstName} ${profile.lastName}, a web designer and creative developer focused on modern, responsive, and user-centered digital experiences.`;
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  authors: [{ name: `${profile.firstName} ${profile.lastName}` }],
  keywords: [
    "web designer",
    "creative developer",
    "UI/UX",
    "portfolio",
    "Panabo City",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    images: [{ url: profile.portrait.src, alt: profile.portrait.alt }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [profile.portrait.src],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-3 focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
