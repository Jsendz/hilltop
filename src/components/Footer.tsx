import React from 'react';
import { ContactForm } from './Form/form';

const Footer: React.FC = () => {
  return (

    <div className='w-full h-full absolute z-10'>
      <div className='w-[90px] md:w-1/3 rounded-lg border-2 shadow-2xl md:p-5 md:ml-auto md:mx-8 -mb-32 z-50 '>
        <ContactForm />
      </div>
    <footer className="bg-gray-800 text-gray-100 py-8 md:h-[400px]  w-full ">
      <div className="container flex items-center justify-around w-full h-full  px-4">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="mb-4 md:mb-0 w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold">MyCompany</h2>
            <p className="text-sm mt-2">© 2024 MyCompany. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0 w-full">
            <div className='flex flex-col w-full'>
            <a href="#" className="text-gray-300 hover:text-white font-bold text-xl">Serveis</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            </div>
            <div className='flex flex-col w-full'>
            <a href="#" className="text-gray-300 hover:text-white font-bold text-xl">Hilltop Agency</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            </div>
            <div className='flex flex-col w-full'>
            <a href="#" className="text-gray-300 hover:text-white font-bold text-xl">Contact Us</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            </div>
          </div>
          <div className="flex space-x-6 w-full justify-center">
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.675 0H1.325C.595 0 0 .6 0 1.3v21.4c0 .7.595 1.3 1.325 1.3h11.495v-9.294H9.69V10.8h3.13V8.575c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.1 2.795.145v3.24l-1.917.001c-1.505 0-1.795.715-1.795 1.76V10.8h3.59l-.468 3.606h-3.122V24h6.116c.73 0 1.325-.6 1.325-1.3V1.3c0-.7-.595-1.3-1.325-1.3z"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c-5.482 0-9.841 4.39-9.841 9.825 0 4.348 3.532 7.945 8.125 9.613-.112-.82-.214-2.084.045-2.978.236-.834 1.52-5.3 1.52-5.3s-.388-.78-.388-1.931c0-1.813 1.049-3.166 2.348-3.166 1.11 0 1.647.834 1.647 1.832 0 1.118-.713 2.788-1.078 4.335-.306 1.278.644 2.32 1.905 2.32 2.285 0 4.033-2.415 4.033-5.895 0-3.088-2.32-5.255-5.64-5.255-3.847 0-6.1 2.882-6.1 5.86 0 1.09.419 2.259 1.059 2.893.12.124.137.233.1.359-.11.37-.366 1.178-.42 1.344-.07.207-.225.28-.527.167-1.965-.716-3.191-2.967-3.191-5.392 0-3.874 3.254-7.822 9.113-7.822 4.886 0 8.109 3.532 8.109 7.306 0 4.54-2.534 7.944-6.289 7.944-1.26 0-2.448-.686-2.856-1.462l-.774 2.944c-.283 1.075-1.051 2.427-1.57 3.25 1.253.387 2.59.594 3.973.594 5.482 0 9.841-4.39 9.841-9.825C21.841 6.553 17.482 2.163 12 2.163z"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4.56v14.88c0 .97-.78 1.76-1.76 1.76H1.76C.79 21.2 0 20.41 0 19.44V4.56C0 3.59.79 2.8 1.76 2.8h20.48c.97 0 1.76.79 1.76 1.76zM8.07 9.35H5.6v9.29H8.07V9.35zM6.84 8.07a1.38 1.38 0 11.001-2.76 1.38 1.38 0 010 2.76zm13.29 4.3c0-1.83-.6-3.08-2.07-3.08-.95 0-1.6.63-1.86 1.24-.09.22-.12.51-.12.81v5.49h-2.46s.03-8.91 0-9.29h2.46v1.32c.33-.51.91-1.24 2.22-1.24 1.62 0 2.85 1.05 2.85 3.29v5.92h-2.46v-5.73z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;