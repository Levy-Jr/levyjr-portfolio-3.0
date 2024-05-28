"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === '/'
    },
    {
      href: "/about",
      label: "Sobre",
      active: pathname === '/about'
    },
    {
      href: "/skills",
      label: "Habilidades",
      active: pathname === '/skills'
    },
    {
      href: "/projects",
      label: "Projetos",
      active: pathname === '/projects'
    },
  ]

  return (
    <nav className="flex items-center">
      <div className="relative aspect-square w-20">
        <Image
          src="portfolio/logo.svg"
          alt="home"
          fill
        />
      </div>
      <div className="flex flex-1 justify-center gap-x-10">
        {routes.map(route => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-lg font-medium",
              route.active ? "text-pink" : "text-white"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}