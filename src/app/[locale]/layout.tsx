
import Navbar from '@/components/Navbar';



import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import {ReactNode} from 'react';
import Options from '@/components/Option';
import Footer from '@/components/Footer';
import {routing} from '@/i18n/routing';

 

 
export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'index'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}





type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}





 
export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar params={{
            locale: ''
          }} />
          {children}
          <Options params={{
            locale: ''
          }} />
          <Footer/>
          
         
          
          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}