import {useTranslations} from 'next-intl';




const Pasiva = () => {

    const t = useTranslations("pasiva");
  
    return (
      <div id="pasiva" className="w-full max-w-7xl mx-auto h-full mb-32 " >
        <div className="py-20 w-full">
        <h2 className="text-6xl font-bold text-left lg:text-center pl-3 lg:pl-0 py-10 w-full">{t("titulo")}</h2>
        <p className="text-2xl 2xl:text-3xl text-left lg:text-center pl-5 pb-10">{t("paragrafo")}</p>
  
  <div className="flex flex-col lg:flex-row h-full w-full justify-around 2xl:max-w-7xl lg:max-w-6xl lg:mx-auto mt-10 ">
    
          <div className="xl:h-[550px] lg:h-[650px] 2xl:h-[650px] h-full lg:w-[90%] rounded-xl flex flex-col justify-evenly items-left bg-slate-800 pt-10  pb-5 shadow-2xl shadow-slate-500 lg:mt-5   mx-1 lg:mx-0 my-5 lg:my-0 ">
            <h3 className="text-3xl lg:text-2xl 2xl:text-3xl  font-bold text-center px-3  text-slate-200 underline underline-offset-4">{t("unotitulo")}</h3>
            <p className="text-xl lg:text-base 2xl:text-xl text-left px-5 pt-14 text-slate-400 ">{t("unoparagrafo")}</p>
            <div className="w-1/2 mx-auto py-5 bottom-1">
                     
                     </div>
          </div>
          
          
          <div className="lg:w-[100%] lg:h-[700px] xl:h-[600px] 2xl:h-[700px]  h-full  rounded-xl flex flex-col justify-evenly items-left bg-slate-800 py-10 shadow-2xl shadow-slate-500 mx-1 lg:mx-0 my-5 lg:my-0  ">
            <h3 className="text-3xl  lg:text-2xl 2xl:text-3xl font-bold text-center p-5 py-5 text-slate-200 underline underline-offset-4">{t("dostitulo")}</h3>
            <p className="text-xl lg:text-base  2xl:text-xl text-left px-5 pt-10 text-slate-400 ">{t("dosparagrafo")}</p>
            <div className="w-1/2 mx-auto py-5">
                    
                     </div>
          </div>
         
          
          <div className=" xl:h-[550px] lg:h-[650px] 2xl:h-[650px] lg:w-[90%] h-full  rounded-xl flex flex-col justify-evenly items-left bg-slate-800 py-10 shadow-2xl shadow-slate-500  mx-1 lg:mt-5  lg:mx-0 my-5 lg:my-0  ">
            <h3 className="text-3xl  lg:text-2xl 2xl:text-3xl font-bold text-center px-3 text-slate-200 underline underline-offset-4">{t("trestitulo")}</h3>
            <p className="text-xl lg:text-base  2xl:text-xl text-left px-5 pt-10 text-slate-400 ">{t("tresparagrafo")}</p>
            <div className="w-1/2 mx-auto py-5 bottom-1">
                   
                     </div>
          </div>
          
          </div>
        
  </div>
  
      </div>
    )
  }
  
  export default Pasiva