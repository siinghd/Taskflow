import React from 'react'
import TLink from 'next-intl/link'
import DialogLogin from '../Dialog/DialogLogin';

interface MobileMenuProps {
    mobileMenu: boolean;
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
    locale: string;
}
  
const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  return (
    <div className={`${props.mobileMenu ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 w-[200px] flex flex-col justify-between bg-dark/50 backdrop-blur-[10px] rounded-l-md shadow-l h-screen transition px-4 py-5 text-right`}>
        <div className='flex justify-end'>
            <div
                className='flex center md:hidden w-[35px] aspect-square rounded-md bg-white/40 border-[1px] border-dark/50 transition hover:bg-white/50'
                onClick={() => props.setMobileMenu(false)}
            >
                <i className="leading-none bi bi-x-lg"></i>
            </div>
        </div>
        <div className='flex flex-col items-end gap-4'>
            <div className='bg-white/40 border-[1px] border-dark/50 transition hover:bg-white/50 rounded-md w-[60px] flex center h-[35px]'>
                <TLink href="/" locale={props.locale === 'it' ? 'en' : 'it'}>{props.locale === 'it' ? 'EN' : 'IT'}</TLink>
            </div>
            <div className='bg-white/40 border-[1px] border-dark/50 transition hover:bg-white/50 rounded-md w-[60px] flex center h-[35px]'>
            <DialogLogin 
                triggerElement={<i className="text-xl cursor-pointer bi bi-person"/>}
            />
            </div>
        </div>
        <div className='text-white font-title text-[20px]'>
            by <a href='https://redergo.com/' target='_blank'>redergo</a>
        </div>
    </div>
  )
}

export default MobileMenu