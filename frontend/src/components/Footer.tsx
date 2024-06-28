import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { LINKS } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-100/50">
      <MaxWidthWrapper className="py-8 lg:py-12">
        <div className="flex flex-col lg:justify-between">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between w-full lg:mb-8">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-sm font-semibold">Air Sehat</h2>
              <p className="text-sm text-justify mt-4 font-light">
                AirSehat hadir untuk membantu Anda menemukan dan menjaga akses terhadap air bersih. Kami percaya bahwa air bersih adalah hak setiap orang, dan bersama kita dapat membuat perubahan.
              </p>
            </div>

            <div className="flex w-full lg:w-1/3 lg:justify-center justify-start mb-8 lg:mb-0">
              <ul className="flex flex-col space-y-2 font-extralight">
                {LINKS.map((link) => (
                  <li key={link.hash} className="relative">
                    <Link href={link.hash}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full lg:w-1/3 lg:justify-center justify-start">
              <Link href="/" className="flex font-semiBold">
                <img src="logo.png" className="object-contain h-10" alt="Logo" />
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between w-full pt-8 border-t border-gray-200">
            <div className="opacity-70 font-extralight mb-4 lg:mb-0">
              Dibuat oleh Senyumin Dulu Corp
            </div>

            <div className="flex space-x-4 mb-4 lg:mb-0">
                <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                    Syarat dan Ketentuan
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                    Kebijakan Privasi
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                    Kebijakan Cookie
                </Link>
            </div>

            <div className="text-center">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Hak cipta dilindungi
                </p>
            </div>
            </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
