import { Navbar } from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto relative px-12 md:px-0 mb-4 md:mt-20">
        <div className="absolute left-0 h-3/4 md:h-full w-3/4 md:w-full translate-y-[50%] bottom-1/2 md:bottom-auto md:translate-x-0 md:translate-y-0 ">
          <Image
            className="absolute w-full h-full left-5 md:left-0 translate-x-[-50%] md:translate-y-[50%] md:bottom-1/2"
            src="portfolio/sobre/work-icon.svg"
            alt="efeito"
            width={0}
            height={0}
          />
        </div>
        <h1 className="inline-block md:hidden text-3xl relative z-10 font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">Levy Jr</h1>
        <div className="md:flex items-center gap-x-4 md:flex-row-reverse relative">
          <div className="w-full">
            <div className="w-[min(35rem,100%)] mx-auto md:mx-0 md:w-full my-6 md:my-0 relative aspect-square">
              <Image
                className="hidden md:block absolute -top-[6.5%] -left-[2.5%] z-10"
                src="/portfolio/sobre/squares-1.svg"
                alt="quadrados"
                width={80}
                height={80}
              />
              <Image
                src="/portfolio/sobre/foto-de-perfil.jpeg"
                alt="Levy Jr"
                fill
              />
              <Image
                className="hidden md:block absolute -bottom-[6.5%] -right-[2.5%] z-10"
                src="/portfolio/sobre/squares-2.svg"
                alt="quadrados"
                width={80}
                height={80}
              />
            </div>
            <ul className="hidden md:flex mt-6 justify-center gap-x-6">
              <li>
                <Link href="">
                  <Image
                    src="/portfolio/sobre/instagram-icon.svg"
                    alt="Instagram"
                    width={50}
                    height={50}
                  />
                </Link>
              </li>
              <li className="bg-white rounded-md">
                <Link href="https://github.com/Levy-Jr">
                  <Image
                    src="/portfolio/sobre/github-icon.svg"
                    alt="Github"
                    width={50}
                    height={50}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className=" w-full relative md:ml-8">
            <h1 className="hidden md:inline-block font-bold text-6xl bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent pb-6">Levy Jr</h1>
            <p className="md:text-2xl md:max-w-[34ch] text-[#C1C1C1]">Desde 2021 venho estudando programação constantemente. Sempre tive interesse em TI e em mexer em computadores, então quando conheci o desenvolvimento web já fiquei encantado logo de cara. Para mim, programar é como se fosse um super poder, acho incrível a capacidade de podermos criar projetos do 0 até o final, por isso amo meu trabalho e gosto bastante de estudar sobre isso. Não me imagino fazendo outra coisa além de programação.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutPage