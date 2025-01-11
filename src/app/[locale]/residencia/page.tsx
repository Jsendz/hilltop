
import Activa from '@/components/Activa';
import Pasiva from '@/components/Pasiva';
import Propia from '@/components/Propia';
import Pricing from '@/components/Pricing';
import Residencias from '@/components/Residencias';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';


import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'residencia'});
 
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
        <div className='bg-slate-50'>
            <Residencias />
            <Activa />
            <Pasiva />
            <Propia />
            <Pricing />
        </div>
    )

  }