import DialogLogin from '@/components/Dialog/DialogLogin';
import {useTranslations} from 'next-intl';
import { Button } from "@/components/ui/button"

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="mt-[100px] container">
      <div className='flex flex-col gap-8 pt-16 center'>
        <h1 className='big-title max-w-[800px] text-center'>
          {t('home-title')}
        </h1>
        <p className='text-center md-text max-w-[750px]'>
          {t('home-sub1')}<br/>
          <span className='font-bold'>{t('home-sub2')}</span>
        </p>
        <div>
          <DialogLogin 
            triggerElement={<Button variant="outline">Enter</Button>}
          />
        </div>
      </div>
    </main>
  )
}
