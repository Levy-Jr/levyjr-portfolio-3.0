"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Logo from "/public/portfolio/logo.svg"
import Menu from "/public/portfolio/menu.svg"
import { Link, usePathname } from "@/navigation"
import { useEffect, useState } from "react"
import { useMessages } from "next-intl"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const messages = useMessages() as any
  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const routes = [
    {
      href: "/",
      label: messages.Nav.home,
      active: pathname === '/'
    },
    {
      href: "/about",
      label: messages.Nav.about,
      active: pathname === '/about'
    },
    {
      href: "/stack",
      label: messages.Nav.stack,
      active: pathname === '/stack'
    },
    {
      href: "/projects",
      label: messages.Nav.projects,
      active: pathname === '/projects'
    },
  ]

  return (
    <nav className="flex justify-between md:justify-normal items-center container mx-auto px-4 md:px-0 pt-4">
      <div className="relative aspect-square w-20">
        <Image
          src={Logo}
          alt="home"
          fill
        />
      </div>
      <button
        onClick={toggleMenu}
        className={cn("md:hidden", isOpen ? "relative z-50" : "")}
      >
        <Image
          src={Menu}
          alt=""
          width={40}
          height={40}
        />
      </button>
      <ul className={cn("md:flex flex-1 justify-center gap-x-10", isOpen ? "fixed z-40 backdrop-blur-lg inset-0 flex flex-col items-center gap-4" : "hidden")}>
        {routes.map(route => (
          <li
            key={route.href}>
            <Link
              className={cn(
                "text-lg font-medium",
                route.active ? "text-pink" : "text-white hover:text-zinc-300"
              )}
              href={route.href}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}