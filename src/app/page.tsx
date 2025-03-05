"use client";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { t } from "i18next";

export default async function page({ params }: { params: { locale: string } }) {
  console.log(t("nav.logo"));

  return (
    <div>
      <p>{t("nav.logo")}</p>
      <LanguageSwitcher />
    </div>
  );
}
