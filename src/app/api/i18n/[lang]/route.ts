import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { lng: string } }
) {
    const { lng } = params;

    try {
        const response = await fetch(`https://dev.cms.koworkerai.com/api/translations?where[route][equals]=/&where[lang][equals]=ar`);
        if (!response.ok) throw new Error('Failed to fetch translations');

        const translations = await response.json();
        return NextResponse.json(translations);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to load translations' }, { status: 500 });
    }
}
