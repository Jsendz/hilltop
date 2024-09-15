import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hilltop-agency.com/en',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://hilltop-agency.com/es',
          fr: 'https://hilltop-agency.com/fr',
          ca: 'https://hilltop-agency.com/cat',
        },
      },
    },
    {
      url: 'https://hilltop-agency.com/en/Residency-in-Andorra',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://hilltop-agency.com/es/Residencia-en-Andorra',
          fr: 'https://hilltop-agency.com/fr/Residence-en-Andorre',
          ca: 'https://hilltop-agency.com/cat/Residencia-a-Andorra',
        },
      },
    },
    {
      url: 'https://hilltop-agency.com/en/Company',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://hilltop-agency.com/es/Empresa',
          fr: 'https://hilltop-agency.com/fr/Société-en-Andorre',
          ca: 'https://hilltop-agency.com/cat/Empresa',
        },
      },
    },
    {
      url: 'https://hilltop-agency.com/en/Concierge',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://hilltop-agency.com/es/Conserjeria',
          fr: 'https://hilltop-agency.com/fr/Conciergerie',
          ca: 'https://hilltop-agency.com/cat/Consergeria',
        },
      },
    },
    {
      url: 'https://hilltop-agency.com/en/Real-Estate',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://hilltop-agency.com/es/Inmobiliaria',
          fr: 'https://hilltop-agency.com/fr/Immobilier',
          ca: 'https://hilltop-agency.com/cat/Immobiliaria',
        },
      },
    },
   
  ]
}