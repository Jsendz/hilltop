import {useTranslations} from 'next-intl';




const Activa = () => {

    const t = useTranslations("activa");
  
    return (
      <div id="activa" className="bg-no-repeat bg-skyweb bg-cover w-full h-full" >
      <div className="lg:flex lg:flex-row justify-around items-center max-w-7xl mx-auto">
        
        <div className="w-full h-full my-20">
        <h2 className="text-6xl font-bold py-10 px-5 text-left rounded-lg">{t("titulo")}</h2>
        <p className="text-left text-xl p-5">{t("paragrafo")}
        
        </p>
        <div className="w-full flex flex-col justify-center">
        <div >
      <div >
       
      </div>
      <div className="flex-1 flex flex-col ml-3 hover:text-slate-200">
        <h3 className="font-poppins font-semibold text-slate-800 text-3xl leading-[23.4px] mb-5 text-left">
          {t("unotitulo")}
        </h3>
        <p className="font-poppins font-normal text-slate-800  text-xl leading-[24px text-left">
          {t("unoparagrafo")}
        </p>
        
      </div>
    </div>
    <div >
      <div >
        
      </div>
      <div className="flex-1 flex flex-col ml-3 hover:text-slate-200">
        <h3 className="font-poppins font-semibold text-slate-800 text-3xl leading-[23.4px] mb-5 text-left">
          {t("dostitulo")}
        </h3>
        <p className="font-poppins font-normal text-slate-800  text-xl leading-[24px text-left">
        {t("dosparagrafo")}
        </p>
        
      </div>
    </div>
      </div>
  
        </div>
        <div className="w-full lg:w-[80%]">
  
      
        </div>
        
      
      </div>
      </div>
    )
  }
  
  export default Activa