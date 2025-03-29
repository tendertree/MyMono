"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';

//Nav Item Link Example
// const links = [
//     {
//         name: "Home",
//         path: "/"
//     },
//
interface link {
    name: string;
    path: string;
}

interface NavListProps {
    navList: { name: string; path: string }[];
    children?: React.ReactNode;
	colorActive:string;
	colorInactive:string;
}

interface NavButtonItemProps {
    name: string;
    imgSrc: string;
    action: () => void;
}

export function ButtonItem({ name, imgSrc, action }: NavButtonItemProps) {
    return (
        <button onClick={action} className="flex items-center gap-2 ">
            <img src={imgSrc} alt={name} className="w-6 h-6" />
            <span >{name}</span>
        </button>
    );
}

export function NavHeader({ navList, children, colorActive="text-blue-100",colorInactive="text-gray-100" }: NavListProps) {
    const pathname = usePathname();

    return (
        <nav className='flex  gap-8'>
            {navList.map((link, idx) => (
                <Link href={link.path} key={idx}
                    className={`${link.path === pathname 
? `${colorActive} border-b-2 border-white` : colorInactive} capitalize font-medium hover:text-strong transition-all`}>
                    {link.name}
                </Link>
            ))}
            {children && <div className="ml-auto">{children}</div>}
        </nav>
    );
}

//when scroll down, Nav menu disappear
export function NavHideWhenScrollDown({ navList }: NavListProps) {
    const [NavBg, setNavBg] = useState(true);
    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };
		window.addEventListener("scroll",handler)
		return () => {
			window.removeEventListener("scroll", handler);
		};	

    })

	return(
 <div className='fixed ${navBg? "bg-indigo-800":"fixed"}'> content</div>
	)

}
