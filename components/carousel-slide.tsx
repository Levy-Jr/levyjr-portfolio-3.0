"use client"

import UseEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useRef } from "react"
import AutoHeight from "embla-carousel-auto-height"
import { EmblaCarouselType, EmblaEventType } from "embla-carousel"
import { DotButton, useDotButton } from "./EmblaCarouselDotButton"
import Image, { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import MaxAssistencia from "/public/portfolio/projetos/max-assistencia.webp"
import GuiaSecreto from "/public/portfolio/projetos/guia-secreto.webp"
import RealidadeVirtual from "/public/portfolio/projetos/realidade-virtual.webp"
import MarcaPaginas from "/public/portfolio/projetos/marca-paginas.webp"
import Arrow from "/public/portfolio/projetos/arrow.svg"
import Link from "next/link"

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type SlideData = {
  url: StaticImageData;
  title: string;
  desc: string;
  link: string;
}

const slidesData: SlideData[] = [
  {
    url: GuiaSecreto,
    title: 'Guia Secreto - Landing Page',
    desc: 'Landing page sobre o Guia Secreto de como ganhar dinheiro pelo OnlyFans.',
    link: 'https://www.guiasecreto.com/'
  },
  {
    url: RealidadeVirtual,
    title: 'Realidade Virtual - Landing Page',
    desc: 'Landing Page para um estúdio produtor de óculos de realidade virtual. Projeto desenvolvido para fins de estudo.',
    link: 'https://levy-jr.github.io/loopstudios-vr-landing-page/'
  },
  {
    url: MaxAssistencia,
    title: 'Max assistência - Landing Page',
    desc: 'Projeto feito para divulgação de um curso para reparos em placas de vídeo.',
    link: 'https://levy-jr.github.io/MaxAssistencia-LP/'
  },
  {
    url: MarcaPaginas,
    title: 'Marca Páginas - Landing Page',
    desc: 'Landing page para uma extensão marcadora de páginas, com manipulação de painel de guia, accordion e validação de formulário. Projeto desenvolvido para fins de estudos.',
    link: 'https://levy-jr.github.io/Book-Mark-Landing-Page/'
  }
]

export const CarouselSlide = () => {
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const [emblaRef, emblaApi] = UseEmblaCarousel({ loop: true }, [AutoHeight()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1.35 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  return (
    <div className="embla">
      <div className="embla__viewport mx-4" ref={emblaRef}>
        <div className="embla__container">
          {slidesData.map((info, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <div className="bg-gradient-to-t relative group from-pink to-purple p-[1px]
                before:hover:content-[''] before:hover:absolute before:hover:inset-[1px] before:hover:bg-gradient-to-b before:hover:from-transparent before:hover:to-black
                ">
                  <span className="hidden text-xl font-bold group-hover:block absolute left-[5%] bottom-[10%]">
                    {info.title}
                  </span>
                  <Link
                    className="hidden text-xl font-bold group-hover:block absolute right-[5%] bottom-[10%]"
                    href={info.link}
                  >
                    <Image
                      src={Arrow}
                      alt="Seta"
                    />
                  </Link>
                  <Image
                    src={info.url}
                    alt={info.title}
                  />
                </div>
              </div>
              <Link href={info.link}>
                <h2 className="text-3xl font-medium my-4">{info.title}</h2>
                <p className="text-[#c1c1c1]">{info.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn("embla__dot", index === selectedIndex ? "embla__dot--selected embla__dot--selected:after" : "")}
            />
          ))}
        </div>
      </div>
    </div>
  )
}