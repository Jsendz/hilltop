import {useTranslations} from 'next-intl';




const Activa = () => {

    const t = useTranslations("activa");
  
    return (
      <div id="activa" className="bg-gradient-to-tr from-blue-100 via-slate-50 to-slate-50 w-full h-full py-32 " >
        <div className='w-full max-w-7xl mx-auto  '>
        <div className="w-full lg:w-1/2 h-full pl-10 ">
        <h2 className="text-5xl md:text-5xl font-bold text-slate-800 py-5  text-left rounded-lg">{t("titulo")}</h2>
        <p className="text-left text-lg lg:text-xl pr-6 ">{t("paragrafo")}
        
        </p>
        </div>
      <div className="lg:flex lg:flex-row justify-around items-center max-w-7xl mx-auto mt-10">
        
        
        <div className="w-full h-full flex flex-row  rounded-lg p-5 drop-shadow-xl">
          <div className='flex flex-col justify-around p-1'>
            <img src="/job.jpg" alt=""  className='rounded-xl'/>
            <img src="/office.jpg" alt="" className='rounded-xl' />
          </div>
          <div className='p-2'>
          <img src="/empre.jpg" alt=""  className='rounded-xl' />
          </div>
  
      
        </div>
        <div className="w-full flex flex-col justify-around p-4">
        
        <div >
      <div >
       
      </div>
      <div className="flex-1 flex flex-col ml-3 hover:text-slate-200 mb-5 *:">
        <h3 className="font-poppins font-bold text-slate-800 text-2xl mb-5 text-left pl-5">
          {t("unotitulo")}
        </h3>
        <p className="font-poppins font-normal text-slate-800  text-lg text-left p-3">
          {t("unoparagrafo")}
        </p>
        
      </div>
    </div>
    <div >
      <div >
        
      </div>
      <div className="flex-1 flex flex-col ml-3 hover:text-slate-200">
        <h3 className="font-poppins font-bold text-slate-800 text-2xl  mb-5 text-left pl-5">
          {t("dostitulo")}
        </h3>
        <p className="font-poppins font-normal text-slate-800  text-lg text-left p-3">
        {t("dosparagrafo")}
        </p>
        
      </div>
    </div>
      </div>
  
        
      
      </div>
      </div>
      </div>
    )
  }
  
  export default Activa