import { useState, useEffect, type ReactNode } from "react";
import { I18nContext, getTranslations, type Locale } from "./index";

const STORAGE_KEY = "grupo-arqueo-locale";

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ["pt-BR", "en", "es", "zh"].includes(stored)) {
      return stored as Locale;
    }
  } catch {
    // localStorage not available, fallback
  }
  return "pt-BR";
}

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // Silently fail if localStorage is unavailable
    }
  };

  const t = getTranslations(locale);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
