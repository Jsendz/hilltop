import {useTranslations} from 'next-intl';
import Image from 'next/image.js';
import Popup from '@/components/Popup'
import { unstable_setRequestLocale } from 'next-intl/server';


type Props = {
  params: {locale:string}
}







export default function Home ({params:{locale}}:Props) {
  unstable_setRequestLocale(locale);

    const t = useTranslations('index');

  return (
    <div className="w-full h-screen bg-forestweb bg-no-repeat bg-cover "   >
        <div className="w-full mx-auto  lg:max-w-7xl lg:h-[70%] h-full flex flex-col lg:flex-row lg:justify-around lg:items-start xl:items-center rounded-xl lg:mb-32 xl:mb-40 " >
            <div className="w-full flex flex-col justify-center text-left p-2 pt-10 pl-4 lg:pl-20" >
                
                <h1 className=" text-3xl xl:text-4xl text-cyan-500 antialiased font-sans font-bold pb-5">Hilltop Agency</h1>
                <h2 className="text-4xl lg:text-3xl xl:text-5xl bg-slate-700 bg-transparent pb-5 font-extrabold">{t("subtitulo")}</h2>
                <p className="text-xl text-slate-600 pb-5">{t("paragrafo")}</p>

                  <div className="lg:w-1/2 w-2/3 mx-auto lg:mx-0">
                    <Popup />
                   
                   </div>
                
            </div>
            <div className="hidden lg:w-full lg:h-full lg:flex lg:justify-center lg:items-start xl:items-center  ">
            <Image src="/lau3.webp" alt="founder's photo" width={300} height={300} className="hidden lg:block" />
               
            </div>
         
        </div>
      
    </div>
    
  )
}

