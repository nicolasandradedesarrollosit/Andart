import {
    Navbar,
    NavbarBrand,
    NavbarContent
} from '@heroui/navbar';

import {
    Avatar
} from '@heroui/avatar';

import {
    Link
} from '@heroui/link';

import {
    Button
} from '@heroui/button';

import { 
    NavbarProps
} from '../../types/home/navbar';

import { useState } from 'react';

function NavbarHero({ page }: NavbarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    if (page === 'home') {
        return (
            <Navbar shouldHideOnScroll={true} className="bg-transparent shadow-none mx-2 sm:mx-4 md:mx-6 lg:mx-8 my-4 sm:my-6 md:my-8 w-full sm:w-11/12 md:w-5/6 lg:w-4/5">
                <NavbarBrand>
                    <Avatar size='lg' src="/Andart.png"/>
                    <p className='text-white font-bold ml-2 sm:ml-3 md:ml-4 text-base sm:text-lg italic'>Andart</p>
                </NavbarBrand>
                    <NavbarContent justify='end' className='gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
                        <div className='hidden md:flex items-center gap-4'>
                            <Link size='sm' color='primary' href='/' className='cursor-pointer text-sm sm:text-base'>Desarrollo</Link>
                            <Link size='sm' color='foreground' href='/marketing' className='cursor-pointer text-sm sm:text-base'>Diseño gráfico y Branding</Link>
                        </div>

                        <div className='md:hidden'>
                            <Button variant='ghost' color='primary' onPress={() => setMobileOpen(prev => !prev)} aria-label='Abrir menú'>
                                <svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M4 6H20' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                                    <path d='M4 12H20' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                                    <path d='M4 18H20' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                                </svg>
                            </Button>
                        </div>
                    </NavbarContent>

                    {mobileOpen && (
                        <div className='md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 rounded-b-lg p-4 z-50'>
                            <div className='flex flex-col gap-3'>
                                <Link size='sm' color='primary' href='/' className='cursor-pointer text-sm sm:text-base' onClick={() => setMobileOpen(false)}>Desarrollo</Link>
                                <Link size='sm' color='foreground' href='/marketing' className='cursor-pointer text-sm sm:text-base' onClick={() => setMobileOpen(false)}>Diseño gráfico y Branding</Link>
                            </div>
                        </div>
                    )}
            </Navbar>
        )
    }

    if (page === 'marketing') {
        return (
            <Navbar shouldHideOnScroll={true} className="relative bg-transparent shadow-none mx-2 sm:mx-4 md:mx-6 lg:mx-8 my-4 sm:my-6 md:my-8 w-full sm:w-11/12 md:w-5/6 lg:w-4/5">
                <NavbarBrand>
                    <Avatar size='lg' src="/Andart.png"/>
                    <p className='text-white font-bold ml-2 sm:ml-3 md:ml-4 text-base sm:text-lg italic'>Andart</p>
                </NavbarBrand>
                <NavbarContent justify='end' className='gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
                    <div className='hidden md:flex items-center gap-4'>
                        <Link size='sm' color='foreground' href='/' className='cursor-pointer text-sm sm:text-base'>Desarrollo</Link>
                        <Link size='sm' color='primary' href='/marketing' className='cursor-pointer text-sm sm:text-base'>Marketing</Link>
                    </div>

                    <div className='md:hidden'>
                        <Button variant='ghost' color='primary' onPress={() => setMobileOpen(prev => !prev)} aria-label='Abrir menú'>
                            <svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M4 6H20' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                                <path d='M4 12H20' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                                <path d='M4 18H20' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                            </svg>
                        </Button>
                    </div>
                </NavbarContent>

                {mobileOpen && (
                    <div className='md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 rounded-b-lg p-4 z-50'>
                        <div className='flex flex-col gap-3'>
                            <Link size='sm' color='foreground' href='/' className='cursor-pointer text-sm sm:text-base' onClick={() => setMobileOpen(false)}>Desarrollo</Link>
                            <Link size='sm' color='primary' href='/marketing' className='cursor-pointer text-sm sm:text-base' onClick={() => setMobileOpen(false)}>Diseño gráfico y Branding</Link>
                        </div>
                    </div>
                )}
            </Navbar>
        )
    }

    return null;
}

export default NavbarHero;