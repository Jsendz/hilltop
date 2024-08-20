

import Image from "next/image"
import Link from "next/link"
import {useTranslations} from 'next-intl';
import { BsHouseLock } from "react-icons/bs";
import { SlDocs } from "react-icons/sl";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";



const Options = () => {
    
    const t = useTranslations('index');
  
    


    

  return (
    <div>
      <div className='hidden lg:block'>
        <div className='w-full fixed bottom-0 z-10  '>
            <div className='backdrop-blur-lg rounded-xl w-[90%] max-w-3xl mx-auto'>
                <div className='flex flex-row flex-wrap justify-evenly py-5'>
                <Link href="/empresa">
                
                
                      <div className=' bg-white rounded-lg flex flex-col justify-around items-center w-[130px] 2xl:w-40 py-3 font-bold mb-3'>
                          <Image src="/docs3.svg" alt="company" width={50} height={50}  className='w-[50px] 2xl:w-[75px]'/>
                          <h2 className='text-md lg:text-lg 2xl:text-xl lg:py-2'>{t("empresa")}</h2>
                      </div>
        
                </Link>
                <Link href="/residencia">
                
                
                      <div className=' bg-white rounded-lg flex flex-col justify-around items-center w-[130px] 2xl:w-40 py-3 font-bold mb-3'>
                      <Image src="/empresa2.webp" alt="Residence" width={50} height={50} className='w-[50px] 2xl:w-[75px]' />
                          <h2 className='text-md lg:text-lg 2xl:text-xl lg:py-2'>{t("residencia")}</h2>
                      </div>
        
                </Link>
                <Link href="/inmobiliaria">
                
                
                      <div className=' bg-white rounded-lg flex flex-col justify-around items-center w-[130px] 2xl:w-40 py-3 font-bold'>
                      <Image src="/immo2.webp" alt="Real Estate" width={50} height={50}  className='w-[50px] 2xl:w-[75px]'/>
                          <h2 className='text-md lg:text-lg 2xl:text-xl lg:py-2'>{t("immo")}</h2>
                      </div>
        
                </Link>
                <Link href="/conserjeria">
                
                
                      <div className=' bg-white rounded-lg flex flex-col justify-around items-center w-[130px] 2xl:w-40 py-3 font-bold'>
                      <Image src="/consergeria2.webp" alt="Concierge" width={50} height={50}  className='w-[50px] 2xl:w-[75px]'/>
                          <h2 className='text-md lg:text-lg 2xl:text-xl lg:py-2'>{t("conser")}</h2>
                      </div>
        
                </Link>
                </div>
            </div>
        </div>


  
        </div>

<div className='block lg:hidden'>
<div className='w-full fixed bottom-0 z-10  '>
<div className='backdrop-blur-lg rounded-xl w-[100%] max-w-3xl md:mx-auto '>
<div className='flex flex-row flex-wrap justify-evenly bg-slate-100'>
<Link href="/Residencia">


  <div className='  bg-slate-100 flex flex-col justify-evenly md:justify-around items-center w-[90px] h-[90px] lg:w-36 lg:h-[100px] py-1 font-bold mb-3'>
  <MdOutlineBusinessCenter size={32} style={{ fill: 'DeepSkyBlue' }} />
      <h2 className='text-sm lg:text-lg 2xl:text-xl lg:py-2'>{t("empresa")}</h2>
  </div>
  
</Link>
<Link href="/Empresa">


  <div className=' bg-slate-100 flex flex-col justify-evenly md:justify-around items-center w-[90px] h-[90px] lg:w-36 lg:h-[100px] py-1 font-bold mb-3'>
  <SlDocs size={32}  style={{ fill: 'DeepSkyBlue' }}/>
      <h2 className='text-sm lg:text-lg 2xl:text-xl lg:py-2'>{t("residencia")}</h2>
  </div>
  
</Link>
<Link href="/Inmobiliaria">


  <div className=' bg-slate-100 flex flex-col justify-evenly md:justify-around items-center w-[90px] h-[90px] lg:w-36 lg:h-[100px] py-1 font-bold'>
  <BsHouseLock size={32} style={{ fill: 'DeepSkyBlue' }}/>
      <h2 className='text-sm lg:text-lg 2xl:text-xl lg:py-2'>{t("immo")}</h2>
  </div>
  
</Link>
<Link href="/Conserjeria">


  <div className=' bg-slate-100 flex flex-col justify-evenly md:justify-around items-center w-[90px] h-[90px] lg:w-36 lg:h-[100px] py-1 font-bold'>
  <GiHouseKeys size={32} style={{ fill: 'DeepSkyBlue' }} />
      <h2 className='text-sm lg:text-lg 2xl:text-xl lg:py-2'>{t("conser")}</h2>
  </div>
  
</Link>
</div>
</div>
</div>

</div>
</div>
    
  )
}

export default Options