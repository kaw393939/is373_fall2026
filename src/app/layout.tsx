import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IS373 · Fall 2026",
  description: "The starting point for the IS373 Fall 2026 project.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
