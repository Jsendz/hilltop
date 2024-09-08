
import Image from "next/image"
import LocaleSwitcher from './LocaleSwitcher';
import { unstable_setRequestLocale } from 'next-intl/server';
import NavigationLink from "./NavigationLink";




type Props = {
  params: {locale:string}
}







export default function Navbar ({params:{locale}}:Props) {
  unstable_setRequestLocale(locale);
   

  return (
    <nav className="w-full flex  items-center navbar bg-forestweb bg-no-repeat bg-cover" >
      <NavigationLink href='/'><Image src="/logohilltopagency2.svg" alt="logo" width={100} height={29}  /></NavigationLink>
      <div className="flex gap-4">
      <LocaleSwitcher />
        </div>
       
        
    </nav>
  );
};


