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
    const t = useTranslations('empresa');

    return (
        <div className='h-full w-full flex flex-col justify-around items-center lg:py-10 2xl:py-20 pb-20 bg-gradient-to-bl from-blue-100 via-slate-50 to-slate-50'>
        <div className='max-w-5xl mx-auto flex flex-col' >
          <div className=' my-10 xl:my-20 '>
            <h2 className='text-4xl px-5 md:px-0 text-left  sm:text-5xl font-bold antialiased pb-20 text-slate-700 md:text-center'>{t("quest")}</h2>
            <h3 className='text-3xl sm:text-4xl font-bold antialiased my-10 pl-4 text-cyan-500'>{t("title")}</h3>
            <p className='text-xl md:text-2xl text-slate-600 text-left pl-5 mt-20'>{t("paragrafo")}</p>
          </div>
            <div className='w-[90%] lg:w-full text-left flex flex-col lg:flex-row lg:flex-wrap justify-around mx-auto lg:mx-0'>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg mb-2 bg-white border-1 border-slate-50'>
                <h4 className='2xl:text-2xl text-xl font-bold mb-2 text-slate-800'>{t("unotitulo")}</h4>
                <p className='text-md text-slate-600'>{t("unoparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg mb-2 bg-white border-1 border-slate-50'> 
                <h4 className='2xl:text-2xl text-xl font-bold mb-2 text-slate-800'>{t("dostitulo")}</h4>
                <p className='text-md text-slate-600'>{t("dosparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg mb-2 bg-white border-1 border-slate-50'> 
                <h4 className='2xl:text-2xl text-xl font-bold mb-2 text-slate-800'>{t("trestitulo")}</h4>
                <p className='text-md text-slate-600'>{t("tresparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg mb-2 bg-white border-1 border-slate-50'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2 text-slate-800'>{t("fortitulo")}</h4>
                <p className='text-md text-slate-600'>{t("forparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg mb-2 bg-white border-1 border-slate-50'>   
                <h4 className='2xl:text-2xl text-xl font-bold mb-2 text-slate-800'>{t("cinctitulo")}</h4>
                <p className='text-md text-slate-600'>{t("cincparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg mb-2 bg-white border-1 border-slate-50'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2 text-slate-800'>{t("sistitulo")}</h4>
                <p className='text-md text-slate-600'>{t("sisparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg mb-2 bg-white border-1 border-slate-50'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2 text-slate-800'>{t("setitulo")}</h4>
                <p className='text-md text-slate-600'>{t("separagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg mb-2 bg-white border-1 border-slate-50'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2 text-slate-800'>{t("otitulo")}</h4>
                <p className='text-md text-slate-600'>{t("oparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg mb-2 bg-white border-1 border-slate-50'> 
                <h4 className='2xl:text-2xl text-xl font-bold mb-2 text-slate-800'>{t("nutitulo")}</h4>
                <p className='text-md text-slate-600'>{t("nuparagrafo")}</p>
              </div>   
            </div>
        </div>
    </div>
    )

  }