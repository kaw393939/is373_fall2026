"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemePicker } from "./theme-picker";
export function Header() {
  const path = usePathname();
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="IS373 home">
        IS373<span className="wordmark-dot">.</span>
      </Link>
      <nav aria-label="Main navigation">
        {[
          ["/work", "Work"],
          ["/about", "About"],
          ["/learn", "Field guide"],
          ["/studio", "Make it yours"],
        ].map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={
              path === href || path.startsWith(href + "/") ? "page" : undefined
            }
          >
            {label}
          </Link>
        ))}
      </nav>
      <ThemePicker />
    </header>
  );
}
