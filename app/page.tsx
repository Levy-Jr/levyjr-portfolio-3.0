import { Navbar } from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-[url('/portfolio/home/background-image-mobile.png')] md:bg-[url('/portfolio/home/background-home.webp')]
    bg-no-repeat bg-center bg-cover min-h-screen">
      <Navbar />
      <main className="">
        <div className="flex">
          <div className="md:flex-1">
            <h1 className="text-6xl font-bold">Não é só um site, é uma <span className="bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">experiência!</span></h1>
            <p className="text-light-gray">Se você deseja aproveitar ao máximo as vantagens que a presença online pode oferecer, estou aqui para ajudar a transformar essa visão em realidade.</p>
            <div className="flex gap-3">
              <Link
                className="border-2 flex items-center gap-x-2 font-medium tracking-wide border-purple px-4 py-2 rounded-full"
                href="/projects">
                Projetos
                <Image className="inline" src="/portfolio/home/arrow.svg" alt="seta" width={18} height={18} />
              </Link>
              <Link
                className="border-2 flex items-center gap-x-2 font-medium tracking-wide border-green px-4 py-2 rounded-full"
                href="">
                Contato
                <Image className="inline" src="/portfolio/home/whatsapp.svg" alt="seta" width={20} height={20} />
              </Link>
            </div>
          </div>
          <div className="none md:flex-1"></div>
        </div>
        <div className="inline-flex items-center gap-2">
          <div className="relative inline aspect-square w-7">
            <Image
              src="/portfolio/home/octagon-icon.png"
              className="absolute animate-spin-slow"
              alt="Octógono"
              fill
            />
            <Image
              src="/portfolio/home/verify-icon.svg"
              className="absolute w-1/2 h-1/2 translate-x-[50%] translate-y-[50%] right-1/2 bottom-1/2 z-10"
              alt="Ícone de verificado"
              width={0}
              height={0}
            />
          </div>
          <p>
            +40 projetos já feitos
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home