import MaxWidthWrapper from "@/components/MaxWidthWrapper"; 
import Form from "./components/Form";
import Heading from "@/components/Heading";

const Page = () => {
    return(
        <section>
            <MaxWidthWrapper className="pt-48">
                <div className="mb-12 ">
                    <Heading title="Cek kualitas air" className="text-left"/>
                </div>
                <Form/>
            </MaxWidthWrapper>
        </section>
    )
}

export default Page;