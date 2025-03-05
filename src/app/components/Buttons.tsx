"use client";

import { useTranslation } from "react-i18next";

export default function Button() {
  const { t } = useTranslation();

  return <button>{t("click_me")}</button>;
  {
    /* Translated string */
  }
}
