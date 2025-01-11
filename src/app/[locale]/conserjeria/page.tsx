
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

import { IoIosPaperPlane } from "react-icons/io";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { MdEmergency } from "react-icons/md";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
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

  const t = useTranslations('conser');

  return (
    <div id="Consergeria" className="w-full h-full bg-[#F3FAFF] bg-no-repeat bg-cover py-10 md:py-20 bg-gradient-to-bl from-blue-100 via-slate-50 to-slate-50 ">
      <div className="max-w-6xl w-full rounded-lg mx-auto px-5">
       <div className="flex flex-col lg:flex-row lg:justify-around mb-20 mx-autorounded-lg bg-cover w-[90%] mx-auto ">
        <div className="w-full text-left  ">
        <h2 className="text-3xl lg:text-4xl antialiased  font-bold !leading-tight mb-10 text-slate-700 pr-0 xl:px-20 text-left xl:text-center ">{t("title")}</h2>
        <p className=" text-base lg:text-2xl antialiased md:text-center  text-slate-700 xl:px-20 text-left mb-10 ">{t("paragrafo")}</p></div>
         
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3  ">
      <div className="w-full  ">
      <div className='mb-10 '>
        <IoIosPaperPlane size={32}/>
        </div>
        <h3 className="mb-5 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl text-slate-700">{t("unotitulo")}</h3>
        
        <p className=" text-base font-medium leading-relaxed pr-[10px] ">{t("unoparagrafo")}</p>
        
      </div >
      <div className="w-full  ">
      <div className='mb-10 '>
      <MdOutlineRealEstateAgent size={32} />
      </div>
        <h3 className="mb-5 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl text-slate-700 ">{t("dostitulo")}</h3>
        
        <p className=" text-base font-medium leading-relaxed pr-[10px]">{t("dosparagrafo")}</p>
       
      </div>
      <div className="w-full   ">
            <div className='mb-10 '>
           <MdConstruction size={32} />
           </div>
        <h3 className="mb-5 text-xl  font-bold sm:text-2xl lg:text-xl xl:text-2xl text-slate-700">{t("trestitulo")}</h3>
           
        <p className=" text-base font-medium leading-relaxed pr-[10px]">{t("tresparagrafo")}</p>
      
      </div>
      <div className="w-full   ">
           <div className='mb-10 '> 
           <MdEmergency size={32}/>
           </div>
        <h3 className="mb-5 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl text-slate-700">{t("fortitulo")}</h3>
           
        <p className=" text-base font-medium leading-relaxed pr-[10px]">{t("forparagrafo")}</p>
        
      </div>
      <div className="w-full  ">
           <div className='mb-10 '> 
           <FaHouseChimneyMedical size={32} />
           </div>
        <h3 className="mb-5 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl text-slate-700">{t("cinctitulo")}</h3>
           
        <p className=" text-base font-medium leading-relaxed pr-[10px]">{t("cincparagrafo")}</p>
        
      </div>
      <div className="w-full  ">
             <div className='mb-10 '> 
            <FaHandshake size={32} />
            </div>
        <h3 className="mb-5 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl text-slate-700">{t("sistitulo")}</h3>
         
        <p className=" text-base font-medium leading-relaxed pr-[10px]">{t("sisparagrafo")}</p>
        
      </div>
      </div>
      </div>
        
    </div>
  )
}