import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { pathname } = req.nextUrl; // Extract the pathname
  const locale = pathname.split('/')[1]; // Extract locale from the path (e.g., "en" or "es")
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourwebsite.com';

  let sitemapUrl = `${baseUrl}/sitemap.xml`;
  if (locale && locale !== 'default') {
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
