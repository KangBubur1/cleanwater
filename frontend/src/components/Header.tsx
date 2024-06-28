"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { LINKS } from "@/lib/data";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
    const [scrollY, setScrollY] = useState<number>(0);
    const router = useRouter();
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = (hash: string) => {
        if (hash.startsWith("#")) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push(hash);
        }
    };

    return (
        <nav className={`fixed z-[9999] top-0 w-full transition-all backdrop-blur-lg ${scrollY > 0 ? 'bg-gray-200/70 shadow-md' : ''}`}>
            <MaxWidthWrapper>
                <div className="flex h-28 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex z-40 font-semiBold">
                        <img src="logo.png" alt="Logo" className="h-full object-contain" />
                    </Link>

                    {/* Menu items */}
                    <div className="flex h-full items-center space-x-4">
                        <ul className="hidden lg:flex space-x-7 text-2xl text-[#202F7C] font-bold">
                            {LINKS.map((link) => (
                                <li key={link.hash} className="relative">
                                    <Link href={link.hash} onClick={() => handleLinkClick(link.hash)}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Header;
