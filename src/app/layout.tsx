export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Preload translations for the current language

  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
