import { CarouselSlide } from "@/components/carousel-slide"
import { WhatsappButton } from "@/components/whatsapp-btn"
import Maleta from "/public/portfolio/projetos/work-icon.svg"
import Image from "next/image"
import { TranslationProvider } from "@/context/TranslationContext"
import { useTranslations } from "next-intl"
import { NavbarProvider } from "@/context/NavbarContext"

const ProjectsPage = () => {
  const t = useTranslations("Projects")

  return (
    <div className="bg-projects bg-no-repeat bg-[position:right_top,bottom_left,top_left] bg-auto pb-28 md:pb-8">
      <NavbarProvider />
      <main className="relative">
        <div className="container px-4 md:px-0 mx-auto">
          <h1 className="text-4xl md:text-6xl my-16 font-bold">{t("title")}
            <Image
              className="inline w-[2.5rem] ml-6"
              src={Maleta}
              alt="maleta"
              width={0}
              height={0}
            /></h1>
        </div>
        <TranslationProvider>
          <CarouselSlide />
        </TranslationProvider>
        <WhatsappButton />
      </main>
    </div>
  )
}

export default ProjectsPage