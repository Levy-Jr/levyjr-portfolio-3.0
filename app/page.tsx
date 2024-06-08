import { Navbar } from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import Whatsapp from "/public/portfolio/home/whatsapp.svg"
import Arrow from "/public/portfolio/home/arrow.svg"
import Octagon from "/public/portfolio/home/octagon-icon.png"
import VerifyIcon from "/public/portfolio/home/verify-icon.svg"

const Home = () => {
  return (
    <div className="bg-mobile-home md:bg-home
    bg-no-repeat bg-[position:center,left] bg-[size:cover,auto] min-h-screen">
      <Navbar />
      <main className="container px-4 md:px-0 md:py-0 mx-auto mt-8 md:mt-20">
        <div className="flex">
          <div className="md:w-[60%]">
            <h1 className="text-4xl md:text-[4rem] leading-none font-bold">Não é só um site, é uma <span className="bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">experiência!</span></h1>
            <p className="text-[#C1C1C1] md:text-2xl my-6">Se você deseja aproveitar ao máximo as vantagens que a presença online pode oferecer, estou aqui para ajudar a transformar essa visão em realidade.</p>
            <div className="flex justify-center md:justify-normal gap-3 text-xl">
              <Link
                className="border-2 flex items-center gap-x-2 font-medium tracking-wide transition-all border-purple shadow-button hover:shadow-purple hover:bg-[#1F1E34] px-8 md:px-11 py-3 rounded-full focus:bg-[#1F1E34]"
                href="/projects">
                Projetos
                <Image className="inline" src={Arrow} alt="seta" width={18} height={18} />
              </Link>
              <Link
                className="border-2 flex items-center gap-x-2 font-medium tracking-wide transition-all border-green shadow-button hover:shadow-green hover:bg-[#111E17] px-8 md:px-11 py-3 rounded-full focus:bg-[#111E17]"
                href="https://wa.me/5592986001909">
                Contato
                <Image className="inline" src={Whatsapp} alt="seta" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center absolute translate-x-[50%] right-1/2 bottom-8 mt-28 gap-2">
          <div className="relative inline aspect-square w-7">
            <Image
              src={Octagon}
              className="absolute animate-spin-slow"
              alt="Octógono"
              fill
            />
            <Image
              src={VerifyIcon}
              className="absolute w-1/2 h-1/2 translate-x-[50%] translate-y-[50%] right-1/2 bottom-1/2 z-10"
              alt="Ícone de verificado"
              width={0}
              height={0}
            />
          </div>
          <p className="text-sm md:text-2xl">
            +40 projetos já feitos
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home