import { CarouselSlide } from "@/components/carousel-slide"
import { Navbar } from "@/components/navbar"
import { WhatsappButton } from "@/components/whatsapp-btn"
import Maleta from "/public/portfolio/projetos/work-icon.svg"
import Image from "next/image"

const ProjectsPage = () => {

  return (
    <div className="bg-projects bg-no-repeat bg-[position:right_top,bottom_left,top_left] bg-auto pb-28 md:pb-8">
      <Navbar />
      <main className="relative">
        <div className="container px-4 md:px-0 mx-auto">
          <h1 className="text-4xl md:text-6xl my-16 font-bold">Projetos
            <Image
              className="inline w-[2.5rem] ml-6"
              src={Maleta}
              alt="maleta"
              width={0}
              height={0}
            /></h1>
        </div>
        <CarouselSlide />
        <WhatsappButton />
      </main>
    </div>
  )
}

export default ProjectsPage