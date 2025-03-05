"use client";

i18n;
import { i18n } from "next-i18next";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    i18n?.changeLanguage(lng); // Reload page with new locale
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>Arabic</button>
    </div>
  );
}
