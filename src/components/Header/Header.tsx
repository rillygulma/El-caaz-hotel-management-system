"use client";
import ThemeContext from "@/context/themeContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);
    const { data: session } = useSession();

    return (
        <header className="py-6 px-4 container mx-auto text-lg flex flex-wrap md:flex-nowrap items-center justify-between shadow-md">
            {/* Logo and User Section */}
            <div className="flex items-center w-full md:w-2/3">
                <Link href="/" className="font-bold text-tertiary-dark text-2xl">
                    El-Caaz Farms & Resorts
                </Link>
                <ul className="flex items-center ml-6 space-x-4">
                    <li>
                        {session?.user ? (
                            <Link href={`/users/${session.user.id}`}>
                                {session.user.image ? (
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <Image 
                                            src={session.user.image} 
                                            alt={session.user.name || ''} 
                                            width={40} 
                                            height={40}
                                            className="scale-animation img" 
                                        />
                                    </div>
                                ) : (
                                    <FaUserCircle className="cursor-pointer" />
                                )}
                            </Link>
                        ) : (
                            <Link href="/auth">
                                <FaUserCircle className="cursor-pointer" />
                            </Link>
                        )}
                    </li>
                    <li className="ml-2">
                        {darkTheme ? (
                            <MdOutlineLightMode 
                                className="cursor-pointer" 
                                onClick={() => {
                                    setDarkTheme(false);
                                    localStorage.removeItem("hotel-theme");
                                }} 
                            />
                        ) : (
                            <MdDarkMode 
                                className="cursor-pointer" 
                                onClick={() => {
                                    setDarkTheme(true);
                                    localStorage.setItem("hotel-theme", "true");
                                }} 
                            />
                        )}
                    </li>
                </ul>
            </div>

            {/* Navigation Links */}
            <ul className="flex items-center justify-between w-full md:w-1/3 mt-4 md:mt-0 space-x-6">
                <li className="hover:-translate-y-1 hover:text-orange-500 transition-transform duration-300">
                    <Link href="/about-us">About Us</Link>
                </li>
                <li className="hover:-translate-y-1 hover:text-orange-500 transition-transform duration-300">
                    <Link href="/farms">Farms</Link>
                </li>
                <li className="hover:-translate-y-1 hover:text-orange-500 transition-transform duration-300">
                    <Link href="/rooms">Rooms</Link>
                </li>
                <li className="hover:-translate-y-1 hover:text-orange-500 transition-transform duration-300">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
