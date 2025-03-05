import I18nProvider from "./components/I18Provider";
import { getServerTranslation } from "./lib/i18n";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  await getServerTranslation(locale); // Preload translations for the current language

  return (
    <html lang={locale}>
      <body>
        <I18nProvider lng={locale}>{children}</I18nProvider>
      </body>
    </html>
  );
}
