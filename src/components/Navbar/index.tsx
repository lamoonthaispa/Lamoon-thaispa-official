"use client"
import Link from "next/link"
import messages from "@/content/messages.json"
import { ChevronDown } from "lucide-react"
import Logo from "../images/Logo"
import BookButton from "./BookButton"
import { Menu } from "lucide-react"

export default function Navbar() {
  const navbar = messages.navbar
  return (
    <nav className="w-full flex justify-between items-center bg-white
      py-[10px] px-5 md:px-[65px] lg:px-[85px]
    ">  

      <div className="flex gap-[31px]">
        <Link href="/" className="inline-flex items-center" aria-label="Retour à l'accueil">
          <Logo />
        </Link>
        
        <div className="hidden md:flex gap-[30px] items-center">
          <button
            type="button"
            className="text-navbar-text flex items-center gap-1"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {navbar.services}
            <ChevronDown className="text-navbar-text" size={20}/>
          </button>

          <Link href="/info" className="text-navbar-text">
            {navbar.pricing}
          </Link>
        </div>
      </div>

      <div className="inline-flex items-center gap-3">
        <BookButton />
        <button type="button" aria-label="Ouvrir la navigation" className="md:hidden">
          <Menu size={30} className="text-navbar-hamburger"/>
        </button>
      </div>
    </nav>
  )
}