import Heading from "./Heading"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Card, CardContent } from "./ui/card"
import { CardStack } from "./ui/card-stack"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel"

const CARDS = [
    {
        id: 0,
        name: "dirtywater",
        designation: "lorem ipsum",
        content: (
            <img src="keadaan air" alt="" />
        )
    },
    {
        id: 1,
        name: "dirtywat",
        designation: "lorem ipsum",
        content: (
            <img src="keadaan air" alt="" />
        )
    },
]

const About = () => {
    return (
        <>
            <section id="tentangkami" className="background-image2 ">
                <MaxWidthWrapper className="pt-24 mb-24">
                    <div className="flex flex-col lg:flex-row h-full lg:items-center justify-evenly">
                        {/* Left Section */}
                        <div className="w-full ">
                            <h2 className="text-4xl sm:text-6xl text-white font-semibold">
                            Clean Water
                            </h2>
                            <p className="text-sm sm:text-2xl text-white text-justify mt-4 font-extralight">
                            CleanWater hadir untuk membantu Anda menemukan dan menjaga akses terhadap air bersih. Kami percaya bahwa air bersih adalah hak setiap orang, dan bersama kita dapat membuat perubahan. 
                            </p>
                            <p className="text-sm sm:text-2xl text-white text-justify mt-4 font-extralight">
                            Dengan memanfaatkan teknologi AI, anda dapat memastikan bahwa air yang anda gunakan aman dan bersih. 
                            </p>
                            
                        </div>

                        {/* Right Section Pictures */}
                        <div className="w-full flex justify-center lg:justify-end mt-8 ">
                            <div className="mt-4 md:mt-0  w-4/5 sm:w-full max-w-sm xl:max-w-lg ">
                            <Carousel className="w-full ">
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
                                <CarouselPrevious className="bg-transparent "/>
                                <CarouselNext className="bg-transparent"/>
                            </Carousel>
                            </div>
                        </div>
                    </div>
                
                
                </MaxWidthWrapper>
            </section>
            <section className="pt-24 mb-24">
                <MaxWidthWrapper className="pt-24 mb-24">

                <div className="mb-24">
                    <Heading title="Tentang Kami" />
                </div>

                <div className="flex flex-col lg:flex-row justify-between lg:p-8">
                    <div className=" text-justify mb-12 lg:mb-0">
                        <div className="max-w-xl">
                            <p className="text-sm sm:text-2xl font-light mb-4"><span className="font-bold">Visi: {" "}</span>Mewujudkan akses air bersih untuk setiap masyarakat. </p>
                            <p className="text-sm sm:text-2xl font-light "><span className="font-bold">Misi: {" "}</span>Misi: Menyediakan informasi yang akurat dan membantu masyarakat dalam menjaga dan meningkatkan kualitas air bersih </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-auto flex justify-center ">
                        <div className="max-w-xl max-h-72 ">
                            <CardStack items={CARDS}/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between mt-24 lg:p-8">
                    <div className="text-justify mb-12 lg:mb-0">
                        <div className="max-w-xl">
                            <h2 className="text-sm sm:text-2xl font-bold mb-4">Sejarah dan Latar Belakang</h2>
                            <p className="text-sm sm:text-2xl font-light">CleanWater didirikan dengan tujuan untuk memberikan solusi dan informasi mengenai akses air bersih bagi semua orang. Kami berkomitmen untuk mengedukasi dan memberdayakan masyarakat dalam upaya menjaga keberlanjutan sumber air bersih.</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-auto flex justify-center ">
                        <div className="max-w-xl max-h-72 ">
                            <CardStack items={CARDS}/>
                        </div>
                    </div>
                </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}

export default About;