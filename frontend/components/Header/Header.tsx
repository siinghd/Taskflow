'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "../ui/menubar"
import TLink from 'next-intl/link'
import MobileMenu from './MobileMenu'
import DialogLogin from '../Dialog/DialogLogin'
import { usePathname } from 'next/navigation';

interface HeaderProps {
    locale: string;
}

const Header: React.FC<HeaderProps>  = (props) => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [isHeaderTop, setIsHeaderTop] = useState(false);
    const path = usePathname()

    useEffect(() => {
        const handleScroll = () => {
          // Check the scroll position to determine if the header is fixed
          const isFixed = window.scrollY > 0;
          setIsHeaderTop(isFixed);
        };
    
        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <header className={`${isHeaderTop && 'border-b-[1px] border-b-dark'} fixed top-0 left-0 right-0 z-10 w-full py-4 bg-white text-dark text`}>
        <div className='container flex items-center justify-between mx-auto md:justify-normal'>
            <div className='hidden w-1/3 font-title md:block'>
                by <a href='https://redergo.com/' target='_blank'>redergo</a>
            </div>
            <div className='flex select-none md:w-1/3 center'>
                <Link href="/">
                    <Image src="/img/logo.svg" alt='TaskFlow' width={250} height={100} className='max-w-[170px]'/>
                </Link>
            </div>
            <div className='justify-end hidden w-1/3 md:flex'>
                <div className='flex items-center gap-6 cursor-pointer'>
                    <Menubar dir='ltr' className='p-0 bg-transparent border-none'>
                        <MenubarMenu>
                            <MenubarTrigger className='!bg-transparent cursor-pointer'>
                                <div className='flex items-center gap-1'>
                                    {props.locale === 'it' ? 'IT' : 'EN'}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 14 14" fill="none">
                                        <path d="M0.371019 1.82966L1.87984 0.320847L10.9327 9.37375L10.9327 1.07526L13.0753 1.07526V13.0251H1.12543L1.12543 10.8826L9.42392 10.8826L0.371019 1.82966Z" fill="#665B5B"/>
                                    </svg>
                                </div>
                            </MenubarTrigger>
                            <MenubarContent className='max-w-[100px] min-w-fit cursor-pointer bg-white border-[1px] border-dark'>
                                {/* TODO la lingua non cambia perché path punta sempre all'attuale con il /lingua davanti */}
                                <MenubarItem className='bg-white cursor-pointer hover:!bg-dark/10'><TLink href={path} locale="it">IT</TLink></MenubarItem>
                                <MenubarItem className='bg-white cursor-pointer hover:!bg-dark/10'><TLink href={path} locale="en">EN</TLink></MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                            
                    <DialogLogin 
                        triggerElement={<i className="text-xl cursor-pointer bi bi-person"/>}
                    />

                </div>
            </div>
            {/* Phone Hamburger Icon */}
            <div
                className='flex center md:hidden w-[35px] aspect-square rounded-md bg-dark/10 border-[1px] border-dark/50 transition hover:bg-dark/20'
                onClick={() => setMobileMenu(true)}
            >
                <i className="leading-none bi bi-list"></i>
            </div>
            <MobileMenu 
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
                locale={props.locale}
                path={path}
            />
        </div>
    </header>
  )
}

export default Header