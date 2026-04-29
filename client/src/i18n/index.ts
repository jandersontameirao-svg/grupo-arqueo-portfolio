import { createContext, useContext } from "react";
import { ptBR, type Translations } from "./ptBR";
import { en } from "./en";
import { es } from "./es";
import { zh } from "./zh";

export type Locale = "pt-BR" | "en" | "es" | "zh";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "pt-BR", label: "PT-BR" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "zh", label: "中文" },
];

const dictionaries: Record<Locale, Translations> = {
  "pt-BR": ptBR,
  en,
  es,
  zh,
};

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale] || ptBR;
}

export interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

export const I18nContext = createContext<I18nContextType>({
  locale: "pt-BR",
  setLocale: () => {},
  t: ptBR,
});

export function useI18n() {
  return useContext(I18nContext);
}

export { ptBR, en, es, zh };
export type { Translations };
