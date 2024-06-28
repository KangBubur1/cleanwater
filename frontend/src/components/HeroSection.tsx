"use client"

import { easeIn, motion } from "framer-motion";
import { CircleArrowDown } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
    return (
    <section className="background-image h-screen flex flex-col">
        
      <MaxWidthWrapper className="pt-80">
        <motion.div className="flex flex-col justify-center items-center h-full "
          initial={{y: 100, opacity:0}}
          animate={{y: 0, opacity:1}}
          transition={{ease:"easeIn", duration:2}}
          
        >

          <div className="w-[360px] sm:w-full text-center">
            <h1 className="text-5xl sm:text-8xl lg:text-9xl text-white font-semibold">Air Sehat</h1>
            <p className="text-xs sm:text-2xl lg:text-3xl mt-4 text-white font-medium">Pengecekan air dengan teknologi AI</p>
          </div>

          <div className="pt-24 ">
            <Link href="/cekair">
              <Button variant={"outline"} className="rounded-full w-64 h-16 text-2xl font-semibold">
                Cek Air
              </Button>
            </Link>

          </div>

          <div className="flex justify-center mt-auto  mb-8">
            <Link href="#brief">
              <Button variant="link" size="icon">
                <CircleArrowDown className="h-8 w-8 text-white" />
              </Button>
            </Link>
          </div>
        
        </motion.div>


      </MaxWidthWrapper>
    </section>
    )
}

export default HeroSection;