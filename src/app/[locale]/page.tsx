import About from '@/components/About';

import Home from '@/components/Home';





import {useTranslations} from 'next-intl';



 
export default function Index() {
  const t = useTranslations('index');
  return <div>
    <Home />

    <About />
    
    
   
    
    

  
   
    
  </div>;
}