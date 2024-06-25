import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { LINKS } from "@/lib/data";

const Header = () => {
    return(
        <nav className="fixed mt-12 z-[100] h-14 instet-x-0 top-0 w-full transition-all">
            <MaxWidthWrapper>
               <div className="flex h-14 items-center justify-between  border-sky-950">

                {/* Logo */}
                <Link href="/" className="flex z-40 font-semiBold">
                    <img src="logo.png"/>
                </Link>

                {/* Menu items */}
                <div className="h-full flex items-center space-x-4">
                    <ul className="space-x-7 flex text-2xl text-white font-bold p-6">
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