"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './Navigation.module.css';

type NavLink = {
   label: string;
   href: string;
}

type Props = {
   navLinks: NavLink[];
}

export default function Navigation({ navLinks }: Props) {
   const pathname = usePathname();

   return (
      <>
         {navLinks.map(link => {
            const isActive = pathname === link.href;

            return (
               <Link 
               key={link.label} 
               href={link.href}
               className={isActive ? styles['active'] : ''}>
                  {link.label}
               </Link>
            )
         })}
      </>
   )
}
