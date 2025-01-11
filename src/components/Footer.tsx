"use client";

import React, { FormEvent } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { ContactForm } from "./Form/form";
import {useTranslations} from 'next-intl';

const Footer: React.FC = () => {
  const handleContactFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted");
  };


  const t = useTranslations('index');

  return (
    <footer className="bg-gradient-to-tr from-blue-100 via-slate-50 to-slate-50 text-white py-10 z-50 absolute w-full">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-slate-800">
        {/* Company Logo and Name with Social Icons */}
        <div className="flex flex-col justify-center items-center">
          <img
            src="/logohilltopagency2.svg"
            alt="Company Logo"
            className=" mb-2 h-20"
          />
          <h2 className="text-lg font-bold">Hilltop Agency</h2>
          <p className="text-gray-600 mt-2">
          {t("subtitulo")}
          </p>
          <div className="flex space-x-4 mt-4">
            
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-700" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="text-slate-800 flex flex-col justify-center items-center">
          <h3 className="text-lg font-bold mb-4">Hilltop Agency</h3>
          <ul className="space-y-2 ">
            <li>
              <a href="/empresa" className="hover:underline">
              {t("empresa")}
              </a>
            </li>
            <li>
              <a href="/residencia" className="hover:underline">
              {t("residencia")}
              </a>
            </li>
            <li>
              <a href="/inmobiliaria" className="hover:underline">
              {t("immo")}
              </a>
            </li>
            <li>
              <a href="/consergeria" className="hover:underline">
              {t("conser")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col justify-center items-center" >
          <h3 className="text-lg font-bold mb-4">{t("boton")}</h3>
          
        <ContactForm />
       
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Hilltop Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
