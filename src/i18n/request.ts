import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    // Fetch translations from API
    const response = await fetch(`https://dev.cms.koworkerai.com/api/translations?where[route][equals]=/&where[lang][equals]=${locale}`);
    let data = await response.json();
    if (data) {
        data = data.docs[0].translations
    }

    return {
        locale,
        messages: data
    };
});