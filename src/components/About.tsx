import React from 'react'
import Image from 'next/image.js';
import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: {locale: string};
};



export default function PathnamesPage({params: {locale}}: Props) {

  unstable_setRequestLocale(locale);

  const t = useTranslations('about');

  return (
    <div className='w-full bg-gradient-to-bl from-blue-100 via-slate-50 to-slate-50 '>
    <div className='w-full h-full py-36 max-w-7xl mx-auto'>
           <h2 className='text-3xl xl:text-4xl antialiased font-bold mb-32 text-slate-700 text-left sm:text-center px-5 sm:px-0'> "Hilltop Agency es tu Agencia de confianza en Andorra <br /> Servicio Personalizado de principio a fin." </h2>
           <h3 className="text-3xl text-center antialiased  font-bold mb-20 mt-20 lg:mt-0 sm:text-left sm:pl-14">Sobre <span className='text-cyan-500'> Hilltop Agency </span></h3>
    <div className="h-full 2xl:h-screen  xl:max-w-7xl lg:w-[90%]  mx-auto">
        <div className="w-full text-left mb-10 sm:mb-0 px-10">
           <p className="text-base text-slate-700 mb-3">
           {t("parafone")}. 
           </p>
           <p className="text-base text-slate-700 mb-3">
           {t("paraftwo")} 
           </p>
           <p className="text-base text-slate-700">
           {t("parafthree")}
           </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center mt-20">
          <div className='w-full text-left h-full'>
            <h3 className='text-2xl antialiased font-semibold mb-10 text-center sm:text-left'>Laura Lopez Tohà - <span className='text-cyan-500'>{t("paraoto")}</span></h3>
            <p className="text-base text-slate-700 mt-10 px-5">{t("parafour")}</p>
            <p className="text-base text-slate-700 mt-10 px-5">
            {t("parafive")}
            </p>
            <p className="text-base text-slate-700 mt-10 px-5">{t("parasix")}</p>
            <p className="text-base text-slate-700 mt-10 px-5">{t("paraseven")}</p>
 
          </div>
        <div className='w-full mt-10 sm:mt-0'>
        <Image src="/aboutpic2.svg" alt="founder's photo" width={300} height={200} className="hidden lg:block lg:w-3/4 mx-auto" />

        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

