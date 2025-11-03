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
            <Navbar shouldHideOnScroll={true} className="bg-transparent w-full px-4 sm:px-6 md:px-8 lg:px-12">
                <NavbarBrand>
                    <Avatar className='bg-transparent' size='lg' src="/logo.png"/>
                    <p className='text-white font-bold ml-2 sm:ml-3 md:ml-4 lg:ml-6 text-sm sm:text-lg md:text-xl'>Desarrollo Web</p>
                </NavbarBrand>
                    <NavbarContent justify='end' className='gap-6 sm:gap-8 md:gap-10 lg:gap-16'>
                        <div className='hidden md:flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
                            <Link size='sm' color='primary' href='/' className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-base'>Desarrollo</Link>
                            <Link size='sm' color='foreground' href='/marketing' className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-base'>Diseño empresarial y branding</Link>
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
                        <div className='md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 rounded-b-lg p-4 sm:p-6 z-50'>
                            <div className='flex flex-col gap-4 sm:gap-5'>
                                <Link size='sm' color='primary' href='/' className='cursor-pointer text-sm sm:text-base' onClick={() => setMobileOpen(false)}>Desarrollo</Link>
                                <Link size='sm' color='foreground' href='/marketing' className='cursor-pointer text-sm sm:text-base' onClick={() => setMobileOpen(false)}>Diseño empresarial y branding</Link>
                            </div>
                        </div>
                    )}
            </Navbar>
        )
    }

    if (page === 'marketing') {
        return (
            <Navbar shouldHideOnScroll={true} className="bg-transparent w-full px-4 sm:px-6 md:px-8 lg:px-12">
                <NavbarBrand>
                    <Avatar className='bg-transparent' size='lg' src="/logo.png"/>
                    <p className='text-white font-bold ml-2 sm:ml-3 md:ml-4 lg:ml-6 text-sm sm:text-lg md:text-xl'>Diseño gráfico</p>
                </NavbarBrand>
                <NavbarContent justify='end' className='gap-6 sm:gap-8 md:gap-10 lg:gap-16'>
                    <div className='hidden md:flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
                        <Link size='sm' color='foreground' href='/' className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-base'>Desarrollo</Link>
                        <Link size='sm' color='primary' href='/marketing' className='cursor-pointer text-xs sm:text-sm md:text-base lg:text-base'>Diseño empresarial y branding</Link>
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
                    <div className='md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 rounded-b-lg p-4 sm:p-6 z-50'>
                        <div className='flex flex-col gap-4 sm:gap-5'>
                            <Link size='sm' color='foreground' href='/' className='cursor-pointer text-sm sm:text-base' onClick={() => setMobileOpen(false)}>Desarrollo</Link>
                            <Link size='sm' color='primary' href='/marketing' className='cursor-pointer text-sm sm:text-base' onClick={() => setMobileOpen(false)}>Diseño empresarial y branding</Link>
                        </div>
                    </div>
                )}
            </Navbar>
        )
    }

    return null;
}

export default NavbarHero;