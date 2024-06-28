import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";


import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import { DATA_KEADAAN_AIR, DATA_LOKASI_AIR } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, ThumbsDownIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GlareCard } from "@/components/ui/glare-card";
import KeadaanAir from "@/components/KeadaanAir";

export default function Home() {
  return (
    <div>

      {/* Hero section */}
      <HeroSection/>

      {/* Border */}
      <div className=" w-full absolute bg-black blur-sm "/>

      {/* About Section */}
      <About/>

      {/* Keadaan air */}
      <KeadaanAir/>

      {/* Lokasi */}
      <section id="lokasi" className="pt-24 mb-24">
        <MaxWidthWrapper>

          <div className="pt-24 mb-24">
            <Heading title="Lokasi" description="lokasi sumber air bersih"/>
          </div>

          <div className="mt-12 flex flex-col lg:flex-row  justify-around items-center">

            {/* Left For maps */}
            <div className="mb-12 lg:mb-0">
              {/* Mapbox */}
              <img src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s+555555(-71.115799,42.351133)/-71.1156,42.3511,15,0/320x150?access_token=pk.eyJ1Ijoia2FuZ2J1YnVyMSIsImEiOiJjbHh2YTNnM2UwanFvMmpvb2w4NjA4NmFiIn0.8jOxG4t6Ajd-Is7BaOp1-g" />
            </div>

            {/* List lokasi */}
            <div className="max-w-md w-full p-4 border border-black rounded-xl">
              <div className="flex w-full  max-w-md items-center space-x-2 mb-8">
                <Input type="search" placeholder="Cari Lokasi..." className="border-black focus:border-none"/>
                <Button type="submit"><SearchIcon/></Button>
              </div>
              <ScrollArea className="h-72 ">
                <div className="p-4">
                  {DATA_LOKASI_AIR.map((tag) => (
                    <>

                <div key={tag.koordinat} className="border border-black rounded-2xl mb-2 px-4 py-2 flex justify-between items-center">
                <div>
                  <h1>{tag.nama}</h1>
                  <p>{tag.koordinat}</p>
                </div>
                <div>
                  <ThumbsDownIcon fill="red"/>
                </div>
                </div>
                    </>
                  ))}
                </div>
                </ScrollArea>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>



    </div>
  )
}


