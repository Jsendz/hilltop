
import Image from "next/image"
import Link from "next/link"
import LocaleSwitcher from './LocaleSwitcher';






const Navbar = () => {
 
 
   

  return (
    <nav className="w-full flex  items-center navbar bg-forestweb bg-no-repeat bg-cover" >
      <Link href='/'><Image src="/logohilltopagency2.svg" alt="logo" width={100} height={29}  /></Link>
      <div className="flex gap-4">
      <LocaleSwitcher />
        </div>
       
        
    </nav>
  );
};

export default Navbar;
