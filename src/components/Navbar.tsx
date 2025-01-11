
import Image from "next/image"

import { unstable_setRequestLocale } from 'next-intl/server';
import NavigationLink from "./NavigationLink";
import LanguageSwitcher from "./LanguageSwitcher";
import Popnav from '@/components/Popnav'




type Props = {
  params: {locale:string}
}







export default function Navbar ({params:{locale}}:Props) {
  unstable_setRequestLocale(locale);
   

  return (
    <nav className="w-full flex  items-center md:justify-between navbar bg-gradient-to-tl from-blue-100 via-slate-50 to-slate-50" >
      <NavigationLink href='/'><Image src="/logohilltopagency2.svg" alt="logo" width={100} height={29} className="md:w-full"  /></NavigationLink>
      <div className="flex gap-4">
      <LanguageSwitcher />
        </div>
        <div className="w-1/4 hidden md:block">
          <Popnav  />
        </div>
       
        
    </nav>
  );
};


