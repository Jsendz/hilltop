import {useTranslations} from 'next-intl';



const Residencias = () =>  { 

    const t = useTranslations("residencia");
  
    return (
    <div id="residencia" className="w-full max-w-7xl lg:mx-auto h-full lg:h-screen flex flex-col lg:flex-row items-left my-40 2xl:my-20">
      <div className="w-full h-full flex flex-col justify-center p-5 lg:pl-10 mb-20 lg:mb-0">
        <h2 className="text-slate-800 font-bold text-5xl text-left">
         {t("titulo")}
        </h2>
        <p className="text-left mt-5 text-slate-800 text-xl mb-10 ">
          {t("paragrafo")}
        </p>
  
        <div className="w-1/2">
                     
                     </div>
      </div>
  
      <div className="w-full flex flex-col justify-center">
      <div >
      <div >
        
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h3 className="font-poppins font-semibold text-slate-800 text-3xl leading-[23.4px] mb-5 text-left">
      {t("unotitulo")}
        </h3>
        <p className="font-poppins font-normal text-slate-800 text-xl leading-[24px text-left">
          {t("unoparagrafo")}
        </p>
        
      </div>
    </div>
    <div >
      <div >
        
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h3 className="font-poppins font-semibold text-slate-800 text-3xl leading-[23.4px] mb-5 text-left">
      {t("dostitulo")}
        </h3>
        <p className="font-poppins font-normal text-slate-800 text-xl leading-[24px text-left">
          {t("dosparagrafo")}
        </p>
        
      </div>
    </div>
    <div >
      <div >
       
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h3 className="font-poppins font-semibold text-slate-800 text-3xl leading-[23.4px] mb-5 text-left">
      {t("trestitulo")}
        </h3>
        <p className="font-poppins font-normal text-slate-800 text-xl leading-[24px text-left">
          {t("tresparagrafo")}
        </p>
        
      </div>
    </div>
      </div>
    </div>
    )
  };
  
  export default Residencias;
  