"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur" role="banner">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" aria-label="Home" className="inline-flex items-center gap-2 text-white no-underline">
          <span
            aria-hidden
            className="inline-block h-3 w-3 rounded-full"
            style={{
              backgroundColor: "#b6ff00", // neon lime accent
              boxShadow: "0 0 24px rgba(182,255,0,0.35)",
            }}
          />
          <span className="font-semibold tracking-wide">NeonEdge</span>
        </Link>

        <button
          aria-controls="primary-nav"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-1 rounded-md border border-white/15 px-2 py-1 text-white md:hidden"
        >
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={cn(
            "absolute right-4 top-16 w-56 rounded-lg border border-white/15 bg-black/90 p-2 md:static md:w-auto md:border-0 md:bg-transparent md:p-0",
            open ? "block" : "hidden md:block",
          )}
          onClick={() => setOpen(false)}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
            <li>
              <a href="#solutions" className="block rounded-md px-3 py-2 text-white hover:bg-white/5">
                Solutions
              </a>
            </li>
            <li>
              <a href="#product" className="block rounded-md px-3 py-2 text-white hover:bg-white/5">
                Product
              </a>
            </li>
            <li>
              <a href="#about" className="block rounded-md px-3 py-2 text-white hover:bg-white/5">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="block rounded-md px-3 py-2 text-white hover:bg-white/5">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
