import React, {ReactChild, ReactChildren} from 'react';
import Link from 'next/link'
import CollectionIcon from "../../public/icons/collection.svg";
import DepotIcon from "../../public/icons/depot.svg";
import ProfileIcon from "../../public/icons/profile.svg";
import SettingsIcon from "../../public/icons/settings.svg";
import Logo from '../../public/logo.svg'


interface LayoutProps{
    children : ReactChildren | ReactChild
}
const Layout = ({children}: LayoutProps) => {

    const navItems = [
        {
            name:'Collecte',
            icon: <CollectionIcon className='fill-current'/>,
            href:'/forms/collection/articles'
        },
        {
            name:'Depot',
            icon: <DepotIcon className='fill-current'/>,
            href:'/depot'
        },
        {
            name:'Profil',
            icon: <ProfileIcon className='fill-current'/>,
            href:'/profile'
        },
        {
            name:'Parametrages',
            icon: <SettingsIcon className='fill-current'/>,
            href:'/settings'
        }
    ]

    const toggleMenu = () => {
        const sidebar = document.querySelector(".sidebar");
        // @ts-ignore
        sidebar.classList.toggle("-translate-x-full");
    }

    return (
        <div className="relative min-h-screen md:flex">

            {/*// mobile menu bar*/}
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                {/*// logo*/}
                {/*<a href="#" className="block p-4 text-white font-bold text-black">Better Dev</a>*/}

                {/*// mobile menu button*/}
                <button onClick={toggleMenu} className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/*//sidebar*/}
            <div
                className="sidebar bg-primary w-64 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

                {/*// logo*/}
                <div className="grid grid-cols-3">
                    <Link href={'/#/'}>
                        <a className="text-white flex items-center justify-center col-start-2">
                            {/*<Image src={logo} height={80} width={80}/>*/}
                            <Logo className='w-20 h-20'/>
                        </a>
                    </Link>
                    <div className="flex justify-end items-start col-start-3 sm:block md:hidden">
                        <button className="mr-5" onClick={toggleMenu}>x</button>
                    </div>
                </div>

                {/*// nav*/}
                <nav className="p-10 pt-20">

                    {navItems.map(nav => {
                        return(
                        <div className="flex items-center mb-20 text-white hover:text-secondary">
                                {nav.icon}
                            <Link href={nav.href} >
                                <a className="block py-2.5 px-4 rounded transition duration-200">{nav.name}</a>
                            </Link>
                        </div>
                        )
                    })}
                </nav>
            </div>

            {/*//content*/}
            <div className="flex-1 font-bold md:bg-primary">
                  <div className='flex-1 rounded-l-3xl bg-white w-full h-full p-16'>
                    {children}
                </div>
            </div>

        </div>
    )
};

export default Layout;