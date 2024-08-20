
import {useTranslations} from "'next-intl'";

import { IoIosPaperPlane } from "react-icons/io";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { MdEmergency } from "react-icons/md";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";



const Conserjeria = () => {

    const t = useTranslations('conser');

  return (
    <div className="w-full h-full bg-[#F3FAFF] bg-no-repeat bg-cover py-10 md:py-20">
      <div className="max-w-7xl 2xl:max-w-[1500px]  rounded-lg mx-auto">
       <div className="flex flex-col lg:flex-row lg:justify-around mb-20 mx-autorounded-lg bg-cover w-[90%] mx-auto ">
        <div className="w-full text-left  ">
        <h2 className="text-4xl lg:text-5xl antialiased  font-extrabold mb-10 text-slate-700 pr-0 xl:px-20 text-left xl:text-center ">{t("titulo")}</h2>
        <p className=" text-xl lg:text-2xl antialiased  text-slate-700 xl:px-20 text-left mb-10 ">{t("conser.paragrafo")}</p></div>
         
      </div>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-center xl:max-w-6xl 2xl:max-w-7xl lg:pl-1 xl:pl-2 xl:m-auto ">
      <div className="flex flex-col items-left justify-evenly md:m-0 my-2 md:p-5   sm:border-r-2 border-t-2 sm:border-t-0 border-slate-600 lg:w-[30%] w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
        <div className='flex flex-row'>
        <IoIosPaperPlane size={32}/>
        <h3 className="text-xl pl-5 font-extrabold text-left text-slate-700">{t("unotitulo")}</h3>
        </div>
        <p className="text-left">{t("unoparagrafo")}</p>
        <Modal />
      </div >
      <div className="flex flex-col items-left justify-evenly md:m-0  my-2 md:p-5  sm:border-r-2 border-t-2 sm:border-t-0  border-slate-600 lg:w-[30%] w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
        <div className='flex flex-row'>
      <MdOutlineRealEstateAgent size={32} />
        <h3 className="text-xl font-extrabold text-left text-slate-700 pl-5">{t("dostitulo")}</h3>
        </div>
        <p className="text-left">{t("dosparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-evenly md:m-0 md:p-5  my-2   lg:w-[30%] border-t-2 sm:border-t-0 border-slate-600 w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
           <div className='flex flex-row'>  
           <MdConstruction size={32} />
        <h3 className="text-xl pl-10 font-extrabold text-left text-slate-700">{t("trestitulo")}</h3>
           </div>
        <p className="text-left">{t("tresparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-evenly md:m-0  my-2 md:p-5  sm:border-r-2 border-slate-600  border-t-2 lg:w-[30%] w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
           <div className='flex flex-row'>  
           <MdEmergency size={32}/>
        <h3 className="text-xl pl-5 font-extrabold text-left text-slate-700">{t("fortitulo")}</h3>
           </div>
        <p className="text-left">{t("forparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-evenly md:m-0  my-2 md:p-5  sm:border-r-2 border-slate-600 border-t-2 lg:w-[30%] w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
           <div className='flex flex-row'>  
           <FaHouseChimneyMedical size={32} />
        <h3 className="text-xl pl-5 font-extrabold text-left text-slate-700">{t("cinctitulo")}</h3>
           </div>
        <p className="text-left">{t("cincparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-evenly md:m-0  my-2 md:p-5   lg:w-[30%] border-slate-600 border-t-2 w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
            <div className='flex flex-row' >  
            <FaHandshake size={32} />
        <h3 className="text-xl font-extrabold text-left pl-5 text-slate-700">{t("sistitulo")}</h3>
        </div> 
        <p className="text-left">{t("sisparagrafo")}</p>
        
      </div>
      </div>
      </div>
        
    </div>
  )
}

export default Conserjeria