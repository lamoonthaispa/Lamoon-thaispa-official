"use client"
import { useRouter } from "next/navigation"
import messages from "@/content/messages.json"
import { ChevronDown } from "lucide-react"
import Logo from "../images/Logo"
import BookButton from "./BookButton"
import { Menu } from "lucide-react"

export default function Navbar() {
  const navbar = messages.navbar
  const router = useRouter()
  return (
    <nav className="w-full flex justify-between items-center bg-white
      py-[10px] px-5 md:px-[65px] lg:px-[85px]
    ">  

      <div className="flex gap-[31px]">
        <button onClick={() => router.push('/')}>
          <Logo />
        </button>
        
        <div className="hidden md:flex gap-[30px]">
          <button className="text-navbar-text flex items-center gap-1">
            {navbar.services}
            <ChevronDown className="text-navbar-text" size={20}/>
          </button>

          <button className="text-navbar-text">
            {navbar.pricing}
          </button>
        </div>
      </div>

      <div className="inline-flex items-center gap-3">
        <BookButton />
        <Menu size={30} className="text-navbar-hamburger md:hidden"/>
      </div>
    </nav>
  )
}