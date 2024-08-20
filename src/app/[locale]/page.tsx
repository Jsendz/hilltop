import About from '@/components/About';

import Home from '@/components/Home';

import Popup from '@/components/Popup';



import {useTranslations} from 'next-intl';



 
export default function Index() {
  const t = useTranslations('index');
  return <div>
    <Home />
    <About />
    <Popup />
    
   
    
    

  
   
    
  </div>;
}