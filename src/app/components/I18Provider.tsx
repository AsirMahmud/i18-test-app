"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import HttpBackend from "i18next-http-backend";

export default function I18nProvider({
  children,
  lng,
}: {
  children: React.ReactNode;
  lng: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    i18next
      .use(HttpBackend)
      .init({
        lng,
        backend: {
          loadPath: `/api/i18n/{{lng}}`,
        },
        fallbackLng: "en",
        interpolation: { escapeValue: false },
        supportedLngs: ["en", "es", "fr", "de"], // Supported languages
      })
      .then(() => setIsLoaded(true));
  }, [lng]);

  if (!isLoaded) return <div>Loading translations...</div>;

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
