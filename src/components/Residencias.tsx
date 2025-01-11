import {useTranslations} from 'next-intl';



const Residencias = () =>  { 

    const t = useTranslations("residencia");
  
    return (
      <div className='w-full bg-gradient-to-bl from-blue-100 via-slate-50 to-slate-50 '>
    <div id="residencia" className="w-full max-w-7xl lg:mx-auto h-full lg:h-screen flex flex-col lg:flex-row items-left py-40 2xl:py-20 ">
      <div className="w-full h-full flex flex-col justify-center p-5 lg:pl-10 mb-20 lg:mb-0">
        <h2 className="text-slate-800 font-bold text-5xl text-left">
         {t("title")}
        </h2>
        <p className="text-left mt-5 text-slate-800 text-xl mb-10 ">
          {t("paragrafo")}
        </p>
  
        <div className="w-1/2">
                     
                     </div>
      </div>
  
      <div className="w-full flex flex-col justify-center p-5">
      <div className='flex flex-row border-2 rounded-lg bg-slate-50 mb-5 p-5 shadow-xl hover items-start' >
      <div >
      <img src='/star.svg' alt="star" className="w-[25px] h-[25px] object-contain" />
        
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h3 className="font-poppins font-semibold text-slate-800 text-2xl  mb-5 text-left">
      {t("unotitulo")}
        </h3>
        <p className="font-poppins font-normal text-slate-800 text-lg  text-left">
          {t("unoparagrafo")}
        </p>
        
      </div>
    </div>
    <div className='flex flex-row border-2 rounded-lg bg-slate-50 mb-5 p-5 shadow-xl hover items-start' >
      <div >
      <img src='/shield.svg' alt="shield" className="w-[25px] h-[25px] object-contain" />
        
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h3 className="font-poppins font-semibold text-slate-800 text-2xl  mb-5 text-left">
      {t("dostitulo")}
        </h3>
        <p className="font-poppins font-normal text-slate-800 text-lg  text-left">
          {t("dosparagrafo")}
        </p>
        
      </div>
    </div>
    <div className='flex flex-row border-2 rounded-lg bg-slate-50 mb-5 p-5 shadow-xl hover items-start' >
      <div >
      <img src='/send.svg' alt="send" className="w-[25px] h-[25px] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h3 className="font-poppins font-semibold text-slate-800 text-2xl  mb-5 text-left">
      {t("trestitulo")}
        </h3>
        <p className="font-poppins font-normal text-slate-800 text-lg  text-left">
          {t("tresparagrafo")}
        </p>
        
      </div>
    </div>
      </div>
    </div>
    </div>
    )
  };
  
  export default Residencias;
  