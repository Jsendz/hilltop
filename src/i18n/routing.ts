import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'fr', 'cat'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
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
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation(routing);