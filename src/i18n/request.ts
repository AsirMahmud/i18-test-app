import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { cookies } from "next/headers";

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    // ✅ Get the current pathname from cookies
    let pathname = "/";
    try {
        const cookieStore = cookies();
        pathname = (await cookieStore).get("currentPath")?.value || "/";
    } catch (error) {
        console.error("Error reading pathname cookie:", error);
    }

    // ✅ Fetch translations dynamically based on locale & pathname
    try {
        const response = await fetch(
            `https://dev.cms.koworkerai.com/api/translations?where[route][equals]=${pathname}&where[lang][equals]=${locale}`
        );
        console.log('path', pathname)
        const data = await response.json();

        return {
            locale,
            messages: data?.docs?.[0]?.translations || {},
        };
    } catch (error) {
        console.error("Error fetching translations:", error);
        return {
            locale,
            messages: {},
        };
    }
});
