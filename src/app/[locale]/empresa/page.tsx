import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';




type Props = {
    params: {locale: string};
  };
  
  
  
  export default function PathnamesPage({params: {locale}}: Props) {
  
    unstable_setRequestLocale(locale);
    const t = useTranslations('empresa');

    return (
        <div className='h-full 2xl:h-screen w-full flex flex-col justify-around items-center lg:my-10 2xl:my-20 mb-20'>
        <div className='max-w-5xl mx-auto flex flex-col' >
          <div className=' my-10 xl:my-20 '>
            <h3 className='text-4xl sm:text-5xl font-extrabold antialiased my-10 text-slate-700'>{t("titulo")}</h3>
            <p className='text-xl text-slate-600 text-left pl-5 mt-20'>{t("paragrafo")}</p>
          </div>
            <div className='w-[90%] lg:w-full text-left flex flex-col lg:flex-row lg:flex-wrap justify-around mx-auto lg:mx-0'>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("unotitulo")}</h4>
                <p className='text-md text-slate-600'>{t("unoparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'> 
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("dostitulo")}</h4>
                <p className='text-md text-slate-600'>{t("dosparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'> 
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("trestitulo")}</h4>
                <p className='text-md text-slate-600'>{t("tresparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("fortitulo")}</h4>
                <p className='text-md text-slate-600'>{t("forparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>   
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("cinctitulo")}</h4>
                <p className='text-md text-slate-600'>{t("cincparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("sistitulo")}</h4>
                <p className='text-md text-slate-600'>{t("sisparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("setitulo")}</h4>
                <p className='text-md text-slate-600'>{t("separagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("otitulo")}</h4>
                <p className='text-md text-slate-600'>{t("oparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'> 
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("nutitulo")}</h4>
                <p className='text-md text-slate-600'>{t("nuparagrafo")}</p>
              </div>   
            </div>
        </div>
    </div>
    )

  }