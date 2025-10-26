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

import {
    useDrawer
} from '../Home/DrawerProvider';

function NavbarHero({ page }: NavbarProps) {
    const drawer = page === 'home' ? useDrawer() : null;

    if (page === 'home') {
        return (
            <Navbar shouldHideOnScroll={true} className="bg-transparent shadow-none mx-2 sm:mx-4 md:mx-6 lg:mx-8 my-4 sm:my-6 md:my-8 w-full sm:w-11/12 md:w-5/6 lg:w-4/5">
                <NavbarBrand>
                    <Avatar size='lg' src="/Andart.png"/>
                    <p className='text-white font-bold ml-2 sm:ml-3 md:ml-4 text-base sm:text-lg italic'>Andart</p>
                </NavbarBrand>
                <NavbarContent justify='end' className='gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
                    <Link size='sm' color='primary' href='/' className='cursor-pointer text-sm sm:text-base'>Desarrollo</Link>
                    <Link size='sm' color='foreground' href='/marketing' className='cursor-pointer text-sm sm:text-base'>Agencia de marketing</Link>
                    <Button variant='ghost' color='primary' onPress={drawer?.onOpen}>Contacto</Button>
                </NavbarContent>
            </Navbar>
        )
    }

    if (page === 'marketing') {
        return (
            <Navbar shouldHideOnScroll={true} className="bg-transparent shadow-none mx-2 sm:mx-4 md:mx-6 lg:mx-8 my-4 sm:my-6 md:my-8 w-full sm:w-11/12 md:w-5/6 lg:w-4/5">
                <NavbarBrand>
                    <Avatar size='lg' src="/Andart.png"/>
                    <p className='text-white font-bold ml-2 sm:ml-3 md:ml-4 text-base sm:text-lg italic'>Andart</p>
                </NavbarBrand>
                <NavbarContent justify='end' className='gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
                    <Link size='sm' color='foreground' href='/' className='cursor-pointer text-sm sm:text-base'>Desarrollo</Link>
                    <Link size='sm' color='primary' href='/marketing' className='cursor-pointer text-sm sm:text-base'>Agencia de marketing</Link>
                    <Button variant='ghost' color='primary' onPress={() => console.log('Drawer de marketing próximamente')}>Contacto</Button>
                </NavbarContent>
            </Navbar>
        )
    }

    return null;
}

export default NavbarHero;