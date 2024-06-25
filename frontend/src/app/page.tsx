import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>

      {/* Hero section */}
      <section className="background-image">
        <MaxWidthWrapper className="pt-80">
          <div className=" flex justify-between items-center">
            {/* Left section */}
            <div>
              <h1 className="text-9xl text-white font-semibold">Clean Water</h1>
              <p className="text-2xl mt-4 text-white font-medium">Air Bersih untuk Semua, Masa Depan untuk Semua.</p>
            </div>

            {/* Right Section */}
            <div>
              <img src="illustration.jpg" className="w-[360px] h-[480px]"/>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Border */}
      <div className="border w-full absolute bg-black blur-sm "/>

      {/* Second Section */}
      <section className="background-image2">
        <MaxWidthWrapper className="flex h-full items-center border justify-between">
          {/* Left Section */}
          <div className="w-[565px]">
            <h2 className="text-6xl text-white font-semibold">
              Clean Water
            </h2>
            <p className="text-2xl text-white text-justify mt-4 font-light">
             CleanWater hadir untuk membantu Anda menemukan dan menjaga akses terhadap air bersih. Kami percaya bahwa air bersih adalah hak setiap orang, dan bersama kita dapat membuat perubahan.
            </p>
          </div>

          {/* Rigt Section Pictures */}
          <div>
            <Carousel className="w-full max-w-sm">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
