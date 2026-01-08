"use client"
import React, { useState } from "react"
import Link from "next/link"
import messages from "@/content/messages.json"
import { ChevronDown, Menu, X } from "lucide-react"
import Logo from "../images/Logo"
import BookButton from "./BookButton"

export default function Navbar() {
  const navbar = messages.navbar
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const landingServices = messages.landing?.services ?? {}
  const serviceKeys = Object.keys(landingServices).filter(k => /^\d+$/.test(k)).sort((a,b) => Number(a) - Number(b))
  return (
    <nav className="relative w-full flex justify-between items-center bg-white
      py-[10px] px-5 md:px-[65px] lg:px-[85px]
    ">  

      <div className="flex gap-[31px]">
        <Link href="/" className="inline-flex items-center" aria-label="Retour à l'accueil">
          <Logo />
        </Link>
        
        <div className="hidden md:flex gap-[30px] items-center">
          <div className="relative">
            <button
              type="button"
              className="text-navbar-text flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              {navbar.services}
              <ChevronDown className="text-navbar-text" size={20}/>
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2 z-40">
                {serviceKeys.map((k) => {
                  const s = (landingServices as any)[k]
                  const title = s?.title ?? s
                  const slug = s?.slug
                  const href = slug
                    ? (slug.startsWith('/services') ? slug : `/services${slug.startsWith('/') ? '' : '/'}${slug}`)
                    : (landingServices.href ?? '/services')
                  return (
                    <Link
                      key={k}
                      href={href}
                      className="block px-2 py-1 text-sm text-navbar-text hover:bg-gray-100"
                      onClick={() => setServicesOpen(false)}
                    >
                      {title}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          <Link href="/info" className="text-navbar-text">
            {navbar.pricing}
          </Link>
        </div>
      </div>

      {/* Right controls: Book button (desktop) and hamburger (mobile) */}
      <div className="flex items-center gap-4">

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-navbar-text"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="absolute left-0 right-0 top-full bg-white shadow-md p-4 md:hidden z-50">
          <div className="flex flex-col gap-3">
            <div>
              <button
                type="button"
                className="text-navbar-text text-left flex items-center gap-2 w-full"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                {navbar.services}
                <ChevronDown className="text-navbar-text" size={18} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-1">
                  {serviceKeys.map((k) => {
                    const s = (landingServices as any)[k]
                    const title = s?.title ?? s
                       const slug = s?.slug
                    const href = slug
                    ? (slug.startsWith('/services') ? slug : `/services${slug.startsWith('/') ? '' : '/'}${slug}`)
                    : (landingServices.href ?? '/services')
                    return (
                      <Link key={k} href={href} className="text-navbar-text text-sm" onClick={() => { setOpen(false); setMobileServicesOpen(false); }}>
                        {title}
                      </Link>
                    )
                  })}
                </div>
              )}

              <Link href="/info" className="text-navbar-text mt-3 block" onClick={() => { setOpen(false); setMobileServicesOpen(false); }}>
                {navbar.pricing}
              </Link>

             
            </div>
          </div>
        </div>
      )}

    </nav>
  )
}