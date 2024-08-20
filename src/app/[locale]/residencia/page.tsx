
import Activa from '@/components/Activa';
import Pasiva from '@/components/Pasiva';
import Residencias from '@/components/Residencias';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';






type Props = {
    params: {locale: string};
  };
  
  
  
  export default function PathnamesPage({params: {locale}}: Props) {
  
    unstable_setRequestLocale(locale);
    const t = useTranslations('residencia');
    return (
        <div>
            <Residencias />
            <Activa />
            <Pasiva />
        </div>
    )

  }