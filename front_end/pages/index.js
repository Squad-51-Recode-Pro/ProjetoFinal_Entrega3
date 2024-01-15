import Head from "next/head";
import Carousel from "@/components/layout/home/Carousel";
import CardBenefits from "@/components/layout/home/CardBenefits";
import SectionVacancies from "@/components/layout/home/SectionVacancies";
import SectionAreas from "@/components/layout/home/SectionAreas";

export default function Home() {

  return (
    <>
      <Head>
        <title>JobTeens</title>
        <meta name="description" content="Projeto Recode Pro 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Carousel />
        <CardBenefits />
        <SectionVacancies />
        <SectionAreas />
      </div>
    </>
  );
}
