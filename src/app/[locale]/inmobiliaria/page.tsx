

import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Image from 'next/image.js';

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
    const t = useTranslations('immo');

    return (
      <div className='w-full bg-gradient-to-bl from-blue-100 via-slate-50 to-slate-50'>
        <div className="flex flex-col lg:flex-row h-full lg:h-screen w-full max-w-7xl lg:mx-auto justify-around items-center mb-40 lg:mb-0 lg:pt-40 ">
        <div className="w-full h-full mb-20 lg:mb-0 ">
        <Image src="/immocasa3.webp" alt="founder's photo" width={300} height={300} className="w-3/4" />
            

      </div>
      <div className="w-full h-full p-5 lg:pl-40 pt-10 flex flex-col items-left">
        <h2 className= " text-5xl lg:text-6xl text-slate-800 font-bold text-left pb-5">
        {t("title")}
        </h2>
        <p className="max-w-[470px] mt-5 text-slate-800 text-left text-xl mb-10">
        {t("paragrafo")}
       
        </p>
  
        <div>
        
        </div>
      </div>
      </div>
      </div>
     

    )

  }