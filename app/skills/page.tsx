import { Navbar } from "@/components/navbar"
import { WhatsappButton } from "@/components/whatsapp-btn"
import Image from "next/image"
import AbilityIcon from "/public/portfolio/habilidades/ability-icon.svg"
import VSCode from "/public/portfolio/habilidades/vscode.svg"
import CSS from "/public/portfolio/habilidades/css.svg"
import Figma from "/public/portfolio/habilidades/figma.svg"
import Flaticon from "/public/portfolio/habilidades/flaticon.svg"
import Freepik from "/public/portfolio/habilidades/freepik.svg"
import Github from "/public/portfolio/habilidades/github.svg"
import HTML from "/public/portfolio/habilidades/html.svg"
import Javascript from "/public/portfolio/habilidades/javascript.svg"
import NextJS from "/public/portfolio/habilidades/nextjs.svg"
import Photoshop from "/public/portfolio/habilidades/photoshop.svg"
import Tailwind from "/public/portfolio/habilidades/tailwind.svg"
import Unsplash from "/public/portfolio/habilidades/unsplash.svg"

const SkillsPage = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto">
        <h1 className="text-4xl md:text-6xl my-16 px-4 md:px-0 font-bold">Habilidades <Image
          className="inline ml-2"
          src={AbilityIcon}
          alt="Ícone de habilidade"
        /></h1>
        <div className="relative w-[min(64rem,90%)] mx-auto">
          <div className="absolute w-[17.5rem] lg:w-[25rem] aspect-square border left-2 md:left-auto rounded-full border-[#C663FF]">
            <div className="absolute bg-[#141416] w-[20%] aspect-square rounded-full border-2 border-[#F96512] left-8 top-2">
              <Image
                className="w-3/5 absolute translate-x-[50%] p-1 translate-y-[50%] right-1/2 bottom-1/2"
                src={HTML}
                alt="HTML"
              />
            </div>
            <div className="absolute bg-[#141416] w-[20%] aspect-square rounded-full border-2 border-[#FFF] right-8 top-2">
              <Image
                className="w-3/5 absolute translate-x-[50%] p-1 translate-y-[50%] right-1/2 bottom-1/2"
                src={Github}
                alt="Github"
              />
            </div>
            <div className="absolute bg-[#141416] w-[20%] aspect-square rounded-full border-2 border-[#32B1C1] -left-[8.75%] translate-y-[50%] bottom-1/2">
              <Image
                className="w-3/4 absolute translate-x-[50%] p-1 translate-y-[50%] right-1/2 bottom-1/2"
                src={Tailwind}
                alt="Tailwind"
              />
            </div>
            <div className="absolute bg-[#141416] shadow-[#3BA8F2] shadow-skill w-2/6 aspect-square rounded-full border border-[#3BA8F2] translate-x-[50%] translate-y-[50%] right-1/2 bottom-1/2">
              <Image
                className="w-3/5 absolute translate-x-[50%] translate-y-[50%] right-1/2 bottom-1/2"
                src={VSCode}
                alt="visual estudio code"
              />
            </div>
            <div className="absolute bg-[#141416] w-[20%] aspect-square rounded-full border-2 border-[#FFF] -right-[8.75%] translate-y-[50%] bottom-1/2">
              <Image
                className="w-[90%] absolute translate-x-[50%] p-1 translate-y-[50%] right-1/2 bottom-1/2"
                src={NextJS}
                alt="NextJS"
              />
            </div>
            <div className="absolute bg-[#141416] w-[20%] aspect-square rounded-full border-2 border-[#0978FA] left-8 bottom-2">
              <Image
                className="w-3/5 absolute translate-x-[50%] p-1 translate-y-[50%] right-1/2 bottom-1/2"
                src={CSS}
                alt="CSS"
              />
            </div>
            <div className="absolute bg-[#141416] w-[20%] aspect-square rounded-full border-2 border-[#D4A107] right-8 bottom-2">
              <Image
                className="w-3/5 absolute translate-x-[50%] p-1 translate-y-[50%] right-1/2 bottom-1/2"
                src={Javascript}
                alt="Javascript"
              />
            </div>
          </div>
          <div className="absolute w-[12.5rem] lg:w-[17.5rem] rounded-full aspect-square border border-[#01CC67] right-3 md:right-0 translate-y-[150%] md:translate-y-0">
            <div className="absolute bg-[#141416] w-[25%] aspect-square rounded-full border-2 border-[#FFF] translate-x-[50%] right-1/2 -top-[12.5%]">
              <Image
                className="w-2/4 absolute translate-x-[50%] p-1 translate-y-[50%] right-1/2 bottom-1/2"
                src={Unsplash}
                alt="Unsplash"
              />
            </div>
            <div className="absolute bg-[#141416] w-[25%] aspect-square rounded-full border-2 border-[#336AE9] -left-[12%] translate-y-[50%] bottom-1/2">
              <Image
                className="w-2/4 absolute translate-x-[50%] p-1 translate-y-[50%] right-1/2 bottom-1/2"
                src={Freepik}
                alt="Freepik"
              />
            </div>
            <div className="absolute bg-[#141416] shadow-[#5C5C5C] shadow-skill w-2/6 aspect-square rounded-full border border-[#5C5C5C] translate-x-[50%] translate-y-[50%] right-1/2 bottom-1/2">
              <Image
                className="w-2/5 absolute translate-x-[50%] translate-y-[50%] right-1/2 bottom-1/2"
                src={Figma}
                alt="Figma"
              />
            </div>
            <div className="absolute bg-[#141416] w-[25%] aspect-square rounded-full border-2 border-[#00D393] -right-[12%] translate-y-[50%] bottom-1/2">
              <Image
                className="w-2/3 absolute translate-x-[50%] p-1 translate-y-[50%] right-1/2 bottom-1/2"
                src={Flaticon}
                alt="Flaticon"
              />
            </div>
            <div className="absolute bg-[#141416] w-[25%] aspect-square rounded-full border-2 border-[#336AE9] translate-x-[50%] right-1/2 -bottom-[12.5%]">
              <Image
                className="w-2/3 absolute translate-x-[50%] p-1 translate-y-[50%] right-1/2 bottom-1/2"
                src={Photoshop}
                alt="Photoshop"
              />
            </div>
          </div>
        </div>
        <WhatsappButton />
      </main>
    </div>
  )
}

export default SkillsPage