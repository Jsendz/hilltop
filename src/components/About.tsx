import React from 'react'
import Image from 'next/image.js';
import {useTranslations} from 'next-intl';

const About = () => {

  const t = useTranslations('about');

  return (
    <div className='w-full h-full my-36 max-w-7xl mx-auto'>
           <h2 className='text-3xl xl:text-4xl antialiased font-extrabold mb-32 text-slate-700 text-left sm:text-center px-5 sm:px-0'> "Hilltop Agency es tu Agencia de confianza en Andorra <br /> Servicio Personalizado de principio a fin." </h2>
           <h3 className="text-3xl text-center antialiased  font-bold mb-20 mt-20 lg:mt-0 sm:text-left sm:pl-14">Sobre <span className='text-cyan-500'> Hilltop Agency </span></h3>
    <div className="h-full 2xl:h-screen  xl:max-w-7xl lg:w-[90%]  mx-auto">
        <div className="w-full text-left mb-10 sm:mb-0 px-5">
           <p className="text-lg text-slate-700 mb-3">
           {t("parafone")}. 
           </p>
           <p className="text-lg text-slate-700 mb-3">
           {t("paraftwo")} 
           </p>
           <p className="text-lg text-slate-700">
           {t("parafthree")}
           </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center mt-20">
          <div className='w-full text-left h-full'>
            <h3 className='text-2xl antialiased font-semibold mb-10 text-center sm:text-left'>Laura Lopez Tohà - <span className='text-cyan-500'>Fundadora</span></h3>
            <p className="text-lg text-slate-700 mt-10 px-5">Mi nombre es Laura, nací en Andorra y he tenido el privilegio de llamarlo mi hogar durante toda mi vida. Mi viaje profesional me ha llevado por diversos caminos, cada uno de los cuales ha contribuido a mi crecimiento tanto a nivel personal como profesional.
            <br />
Comenzando mi carrera en la industria de la construcción y administración, luego, me aventuré en el apasionante sector de la gestión hotelera y en los últimos 10 años, tuve la valiosa oportunidad de unirme a una empresa familiar de Andorra en el ámbito inmobiliario. 
<br />
Durante todos estos años, me di cuenta que la satisfacción del cliente no solo es un objetivo, sino una fuente constante de gratificación personal.
La conexión con las personas, comprender sus necesidades y brindar soluciones efectivas ha sido una experiencia enriquecedora y fundamental en mi trayectoria. </p>
          </div>
        <div className='w-full mt-10 sm:mt-0'>
        <Image src="/aboutpic2.svg" alt="founder's photo" width={300} height={200} className="hidden lg:block" />

        </div>
        </div>
    </div>
    </div>
  )
}

export default About