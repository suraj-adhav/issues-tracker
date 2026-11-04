import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import issues_tracker from "@/public/issues-tracker.svg";
import Image from "next/image";

const NavBar = () => {
    const links = [
        {label: 'Dashboard', href:"/dashboard"},
        {label: 'Issues', href:"/issues"}
    ]
  return (
    <nav className="flex justify-between items-center gap-6 border-b border-gray-400  px-3">
      <Link href="/" className="flex items-center gap-1 font-bold ">
        <Image
          src={issues_tracker}
          alt="issues tracker logo"
          className="w-20 py-2"
        ></Image>
      </Link>

      <ul className="flex justify-around gap-6">
        {
            links.map((link)=>{
                return <li key={link.label}><Link className="text-zinc-500 hover:text-zinc-800 transition-color" href={link.href}>{link.label}</Link></li>
            })
        }
      </ul>
    </nav>
  );
};

export default NavBar;
