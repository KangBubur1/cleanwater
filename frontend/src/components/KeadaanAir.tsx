"use client"

import { DATA_KEADAAN_AIR } from "@/lib/data";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { GlareCard } from "./ui/glare-card";
import Heading from "./Heading";

const KeadaanAir = () => {
    return(
      <section>
        <MaxWidthWrapper>
          <div>
            <div className="pt-24 mb-24">
              <Heading title="Keadaan Air" description="Keadaan air yang dihadapi" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 place-items-center">
              {DATA_KEADAAN_AIR.map((index) => (
                <GlareCard key={index.value} className="flex flex-col justify-center p-4 text-justify text-white" src={index.image}>
                  <h1 className="text-3xl font-semibold">
                    <span className="text-8xl">{index.number} {" "}</span>{index.jumlah}
                  </h1>
                  <p className="text-lg font-light">{index.description}</p>
                </GlareCard>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    )
}

export default KeadaanAir;