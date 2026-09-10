import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { defaultTheme, themes, themeStorageKey } from "@/lib/themes";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "IS373 — Build something yours.", template: "%s — IS373" },
  description:
    "A student portfolio starter and field guide to design, persuasion, and brand identity.",
};
const themeScript = `try{var t=localStorage.getItem(${JSON.stringify(themeStorageKey)});if(${JSON.stringify(themes.map((t) => t.id))}.includes(t))document.documentElement.dataset.theme=t}catch(e){}`;
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme={defaultTheme} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="site-shell">
          <Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <footer className="site-footer">
            <Link href="/" className="footer-mark">
              IS373 / FALL 2026
            </Link>
            <span>A foundation. Your point of view.</span>
            <Link href="/studio">Build your version ↗</Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
