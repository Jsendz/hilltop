import { Pathnames } from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;


export const defaultLocale = 'en' as const;

export const locales = ["en", "es", "fr", "cat"] as const;

export const pathnames: Pathnames<typeof locales> = {
    "/": "/",
    "/conserjeria": {
        "en": "/Concierge",
        "es": "/Conserjería",
        "fr": "/Conciergerie",
        "cat": "/Consergeria",
    },
    "/empresa": {
        "en": "/Company",
        "es": "/Empresa",
        "fr": "/Société-en-Andorre",
        "cat": "/Empresa",
    },
    "/inmobiliaria": {
        "en": "/Real-Estate",
        "es": "/Inmobiliaria",
        "fr": "/Immobilier",
        "cat": "/Immobiliaria",
    },
    "/residencia": {
        "en": "/Residency-in-Andorra",
        "es": "/Residencia-en-Andorra",
        "fr": "/Residence-en-Andorre",
        "cat": "/Residencia-a-Andorra",
    }
};

export const localePrefix = "always";

export type AppPathnames = keyof typeof pathnames;

