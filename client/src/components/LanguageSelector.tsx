import { useI18n } from "@/i18n";
import { LOCALES, type Locale } from "@/i18n";

/**
 * LanguageSelector — Seletor de idioma discreto em formato de pílulas.
 * Posicionado no canto superior direito, com design premium que não
 * compete com o conteúdo principal.
 */
export default function LanguageSelector() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className="fixed top-6 right-6 z-[100] flex items-center gap-1 px-1.5 py-1 rounded-full"
      style={{
        backgroundColor: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          className="px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200"
          style={{
            backgroundColor: locale === code ? "#861720" : "transparent",
            color: locale === code ? "#FFFFFF" : "#666666",
            fontSize: "11px",
            letterSpacing: "0.02em",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
