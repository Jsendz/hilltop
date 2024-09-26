
import Activa from '@/components/Activa';
import Pasiva from '@/components/Pasiva';
import Residencias from '@/components/Residencias';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';


import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'index'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}







type Props = {
    params: {locale: string};
  };
  
  
  
  export default function PathnamesPage({params: {locale}}: Props) {
  
    unstable_setRequestLocale(locale);
    const t = useTranslations('residencia');
    return (
        <div>
            <Residencias />
            <Activa />
            <Pasiva />
        </div>
    )

  }