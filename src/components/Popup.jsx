'use client'

import React from "react";

import { useTranslations } from "next-intl";
import { ContactForm } from './Form/form'


export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const t = useTranslations('residencia');

  
  return (
    <>
      <button
        className="w-full bg-cyan-500 text-slate-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-1 mb-1 ease-linear transition-all duration-150 "
        type="button"
        onClick={() => setShowModal(true)}
      >
        {t("dosboton")}
      </button>
      {showModal ? (
        <>
          <div
            className=" fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
          >
            <div className="relative w-[90%] ">
              {/*content*/}
              <div className=" h-[650px] border-0 rounded-xl shadow-lg relative w-full bg-white outline-none focus:outline-none pt-10 text-xl">
                {/*header*/}
      <button
                    className="p-1 ml-auto bg-white border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none rounded-lg"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-10 w-6 text-2xl block outline-none focus:outline-none rounded-lg">
                      ×
                    </span>
                  </button>
               
            
                < ContactForm />
                
               
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
