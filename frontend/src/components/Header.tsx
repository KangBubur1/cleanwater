import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { LINKS } from "@/lib/data";

const Header = () => {

    return(
        <nav className="fixed  z-[9999] mt-12 h-24  w-full transition-all">
            <MaxWidthWrapper className="">
               <div className="flex h-14 items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex z-40 font-semiBold">
                    <img src="logo.png"/>
                </Link>

                {/* Menu items */}
                <div className="h-full flex items-center space-x-4">
                    <ul className="hidden lg:flex space-x-7 text-2xl text-white font-bold p-6">
                        {
                            LINKS.map((link) => (
                                <li key={link.hash} className="relative">
                                    <Link
                                        href={link.hash}
                                    >
                                    {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
               </div>


            </MaxWidthWrapper>
        </nav>
    )
}

export default Header;