"use client"

import { useState } from "react"

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center gap-8">

      <button
        onClick={() => {
          console.log("CLICK")
          setOpen(!open)
        }}
        className="bg-white text-black px-6 py-4 rounded-xl text-2xl"
      >
        APRI MENU
      </button>

      {open && (
        <div className="text-4xl">
          MENU APERTO
        </div>
      )}

    </div>
  )
}