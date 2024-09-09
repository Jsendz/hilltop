import About from '@/components/About';

import Home from '@/components/Home';

import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: {locale:string}
}







export default function IndexPage ({params:{locale}}:Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('index');
  return <div>
    <Home params={{
      locale: ''
    }} />

    <About params={{
      locale: ''
    }}  />
    
    
   
    
    

  
   
    
  </div>;
}