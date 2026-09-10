"use client";
import { useSyncExternalStore } from "react";
import { useHydrated } from "@/lib/use-hydrated";
import {
  defaultTheme,
  isTheme,
  themes,
  themeStorageKey,
  type Theme,
} from "@/lib/themes";
function subscribe(callback: () => void) {
  const sync = () => {
    try {
      const saved = localStorage.getItem(themeStorageKey);
      document.documentElement.dataset.theme = isTheme(saved)
        ? saved
        : defaultTheme;
    } catch {}
    callback();
  };
  window.addEventListener("theme-change", callback);
  window.addEventListener("storage", sync);
  return () => {
    window.removeEventListener("theme-change", callback);
    window.removeEventListener("storage", sync);
  };
}
function snapshot(): Theme {
  const value = document.documentElement.dataset.theme;
  return isTheme(value) ? value : defaultTheme;
}
export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    /* Theme still works when storage is unavailable. */
  }
  window.dispatchEvent(new Event("theme-change"));
}
export function ThemePicker({ expanded = false }: { expanded?: boolean }) {
  const hydrated = useHydrated();
  const theme = useSyncExternalStore(subscribe, snapshot, () => defaultTheme);
  if (expanded)
    return (
      <div className="theme-options">
        {themes.map((item) => (
          <button
            type="button"
            disabled={!hydrated}
            key={item.id}
            className="theme-option"
            aria-pressed={theme === item.id}
            onClick={() => setTheme(item.id)}
          >
            <span
              className={`theme-swatch swatch-${item.id}`}
              aria-hidden="true"
            >
              Aa ↗
            </span>
            <strong>
              {item.name} {theme === item.id && "✓"}
            </strong>
            <span>{item.description}</span>
          </button>
        ))}
      </div>
    );
  return (
    <label className="theme-picker">
      <span className="theme-dot" aria-hidden="true" /> <span>Theme</span>
      <select
        disabled={!hydrated}
        aria-label="Color and design theme"
        value={theme}
        onChange={(event) => {
          if (isTheme(event.target.value)) setTheme(event.target.value);
        }}
      >
        {themes.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  );
}
