import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';

export const getServerTranslation = async (lng: string) => {
    if (!i18next.isInitialized) {
        await i18next.use(HttpBackend).init({
            lng,
            fallbackLng: 'en', // Default language if translation is missing
            backend: {
                loadPath: `${process.env.NEXT_PUBLIC_BASE_URL}/api/i18n/{{lng}}`, // URL to fetch translations
            },
            interpolation: { escapeValue: false },
            supportedLngs: ['en', 'es', 'fr', 'de'], // List of supported languages
        });
    } else {
        await i18next.changeLanguage(lng);
    }

    return i18next;
};
