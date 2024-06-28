import Heading from "./Heading"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Card, CardContent } from "./ui/card"
import { CardStack } from "./ui/card-stack"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel"

const CARDS_PEOPLE= [
    {
        id: 0,
        name: "David Cheng",
        designation: "Volunteer",
        content: "David is dedicated to improving community health by volunteering in various Air Sehat projects.",
        image: "/users/user-1.png",
        background: "cardstack1.png"
    },
    {
        id: 1,
        name: "Alvin Hartono",
        designation: "Water Quality Analyst",
        content: "Alvin specializes in analyzing water samples to ensure safety and compliance with health standards.",
        image: "/users/user-2.png",
        background: "cardstack2.png"
    },
    {
        id: 2,
        name: "Maria Garcia",
        designation: "Environmental Scientist",
        content: "Maria has been researching water quality and its impacts on local communities for over a decade.",
        image: "/users/user-3.png",
        background: "cardstack3.png"
    }
] 

const CARDS_ENVIRONMENT_CLEAN = [
    {
        id: 0,
        name: "Dirty Water Awareness",
        designation: "Environmental Campaign",
        content: "A campaign to raise awareness about the impacts of dirty water on health and the environment.",
        background: "illustration.jpg"
    },
    {
        id: 1,
        name: "Clean Rivers Initiative",
        designation: "Non-Profit Organization",
        content: "The Clean Rivers Initiative focuses on reducing pollution in rivers through community clean-up events and education.",
        background: "environment/env1.jpg"
    },
    {
        id: 2,
        name: "Freshwater Watch",
        designation: "Citizen Science Project",
        content: "Freshwater Watch empowers citizens to monitor and protect local water resources by providing training and tools for water quality testing.",
        background: "environment/env2.jpg"
    },
    {
        id: 3,
        name: "Blue Planet Fund",
        designation: "Environmental Fund",
        content: "The Blue Planet Fund supports projects aimed at restoring and preserving aquatic ecosystems worldwide.",
        background: "environment/env3.jpg"
    }
] 



const About = () => {
    return (
        <>
            <section id="brief" className="background-image2 ">
                <MaxWidthWrapper className="pt-24 mb-24">
                    <div className="flex flex-col lg:flex-row h-full lg:items-center justify-evenly">
                        {/* Left Section */}
                        <div className="w-full ">
                            <h2 className="text-4xl sm:text-6xl text-white font-semibold">
                            Air Sehat
                            </h2>
                            <p className="text-sm sm:text-2xl text-white text-justify mt-4 font-extralight">
                            AirSehat hadir untuk membantu Anda menemukan dan menjaga akses terhadap air bersih. Kami percaya bahwa air bersih adalah hak setiap orang, dan bersama kita dapat membuat perubahan. 
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
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img
                                                src={`/brief/${index + 1}.jpg`}
                                                alt={`Image ${index + 1}`}
                                                className="h-full object-cover w-full rounded-sm"
                                            />
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
            <section className="pt-24 mb-24" id="tentangkami">
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
                            <CardStack items={CARDS_PEOPLE} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between mt-24 lg:p-8">
                    <div className="text-justify mb-12 lg:mb-0">
                        <div className="max-w-xl">
                            <h2 className="text-sm sm:text-2xl font-bold mb-4">Sejarah dan Latar Belakang</h2>
                            <p className="text-sm sm:text-2xl font-light">AirSehat didirikan dengan tujuan untuk memberikan solusi dan informasi mengenai akses air bersih bagi semua orang. Kami berkomitmen untuk mengedukasi dan memberdayakan masyarakat dalam upaya menjaga keberlanjutan sumber air bersih.</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-auto flex justify-center ">
                        <div className="max-w-xl max-h-72 ">
                            <CardStack items={CARDS_ENVIRONMENT_CLEAN}/>
                        </div>
                    </div>
                </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}

export default About;