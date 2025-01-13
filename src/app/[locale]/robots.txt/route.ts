import { NextResponse } from 'next/server';

export async function GET({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourwebsite.com';

  let sitemapUrl = `${baseUrl}/sitemap.xml`;
  if (locale !== 'en') {
    sitemapUrl = `${baseUrl}/${locale}/sitemap.xml`;
  }

  const robotsTxt = `
    User-agent: *
    Allow: /
    Sitemap: ${sitemapUrl}
  `;

  return new NextResponse(robotsTxt, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
