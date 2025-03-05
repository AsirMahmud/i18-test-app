"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation"; // Ensure this is correctly implemented

export default function HomePage() {
  const locale = useLocale(); // Get current locale
  const router = useRouter(); // Use App Router's useRouter
  const pathname = usePathname(); // Get current route
  const t = useTranslations("nav"); // Translations
  console.log(locale);
  // Function to switch language
  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split("/"); // Split URL by "/"
    segments[1] = newLocale; // Replace locale in URL
    router.push(segments.join("/")); // Navigate to new URL
  };

  return (
    <div>
      <div>Current locale: {locale}</div>

      <div className="flex gap-4 my-4">
        <button
          onClick={() => switchLanguage("en")}
          className="px-4 py-2 border rounded"
        >
          {t("logo")}
        </button>
        <button
          onClick={() => switchLanguage("ar")}
          className="px-4 py-2 border rounded"
        >
          Switch to Arabic
        </button>
      </div>

      {/* Using Link component alternative */}
      <Link href={pathname} locale={locale === "en" ? "ar" : "en"}>
        Switch to {locale === "en" ? "Arabic" : "English"}
      </Link>
    </div>
  );
}
