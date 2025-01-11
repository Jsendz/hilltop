import React from 'react'
import { IoCheckbox } from "react-icons/io5";

const Propia = () => {
  return (

    <div className='w-full h-full pb-10 bg-gradient-to-bl from-blue-100 via-slate-50 to-slate-50'>
      <div className='w-full max-w-7xl mx-auto px-4'>
    <div className='flex flex-col md:flex-row justify-around items-center w-full h-full'> 
        <div className='w-full h-full flex flex-col justify-around items-center lg:w-1/2 pl-3'>
        <div className='w-full px-4' >
        <h2 className='text-3xl sm:text-4xl  md:text-[45px] text-left font-bold mb-10  text-slate-800'>Residencia Por Reagrupamiento</h2>

        </div>
        <p className='text-lg !leading-relaxed  text-slate-800 p-2 mb-5 '>Este permiso permite a personas que tengan permiso de residencia en Andorra solicitar el
        permiso de residencia para:</p>
        

        <div className='mb-12 max-w-[6000px] lg:mb-0'>
        <div className='p-5 font-semibold text-slate-800 flex flex-wrap mx-[-12px] '>
          <div className='sm:w-1/2 lg:w-full xl:w-1/2'>
            <p className='p-2 font-semibold text-base flex items-start'> <span className='mr-4 flex items-center justify-center'><IoCheckbox size={32} color='lightblue' /></span> Cónyuges o parejas de hecho que estén inscritas en el Registro de Andorra</p>
            <p className='p-2 font-semibold text-base flex items-start'> <span className='mr-4 flex items-center justify-center'><IoCheckbox size={32} color='lightblue' /></span> Hijos menores de edad sobre los que se tenga la guarda y custodia</p>
            <p className='p-2 font-semibold text-base flex items-start'> <span className='mr-4 flex items-center justify-center'><IoCheckbox size={32} color='lightblue' /></span> Hijos mayores de edad sobre los que se tenga bajo la tutela legal</p>
          </div>
          <div className='sm:w-1/2 lg:w-full xl:w-1/2'>
            <p className='p-2 font-semibold text-base flex items-start'> <span className='mr-4 flex items-center justify-center'><IoCheckbox size={32} color='lightblue' /></span> Ascendientes como mínimo de 65 años o que estén jubilados</p>
            <p className='p-2 font-semibold text-base flex items-start'> <span className='mr-4 flex items-center justify-center'><IoCheckbox size={32} color='lightblue' /></span> Otras personas que ejerzan la tutela legal</p>
        </div>
        </div>
        </div>
        
    <div>
    <p className='pl-2 my-5 text-lg !leading-relaxed  text-slate-800 p-2 mb-5'>El solicitante debe tener al menos 3 meses de residencia efectiva en Andorra, haber cotizado
        al menos 3 meses a la seguridad social y acreditar solvencia económica</p>
        </div>
        </div>
        
        <div className='w-full px-4 lg:w-1/2 h-full rounded-lg flex justify-center items-center'>
        <div className='relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0 flex'>
          <div className='p-2 w-full flex items-center'>
          <img src="/winter2.webp" alt=""  className='rounded-xl' />
          </div>
          <div className='flex flex-col justify-around p-1 w-3/4'>
            <img src="/reunion.jpg" alt=""  className='rounded-xl'/>
            <img src="/bike.jpg" alt="" className='rounded-xl' />
          </div>
          </div>
        

        </div>
    </div>
        </div>
    </div>
  )
}

export default Propia