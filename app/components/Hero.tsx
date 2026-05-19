"use client"

import { useState } from "react"

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 scale-105 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba"
          className="w-full h-full object-cover"
        />
        
        {/* LUXURY OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white z-50">

  <button
  onTouchStart={() => setOpen(!open)}
  onClick={() => setOpen(!open)}
  className="text-3xl relative z-[9999] p-4 touch-manipulation"
>
  ☰
</button>

  <span className="tracking-[0.3em] text-sm uppercase">
    Connubio
  </span>

</div>

      {/* MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 text-white text-2xl z-[9999] touch-auto">
          <button onClick={() => setOpen(false)}>Home</button>
          <button onClick={() => setOpen(false)}>Menu</button>
          <button onClick={() => setOpen(false)}>Vini</button>
          <button onClick={() => setOpen(false)}>Esperienza</button>
          <button onClick={() => setOpen(false)}>Contatti</button>
        </div>
      )}

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">

        <p className="tracking-[0.4em] text-xs text-gray-300 uppercase mb-4">
          Pinerolo · Fine Dining
        </p>

        <h1 className="text-4xl md:text-7xl font-light leading-tight">
          Connubio<br />
          <span className="font-bold">Vino e Cucina</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-md text-sm md:text-base leading-relaxed">
          Un’esperienza gastronomica tra vino selezionato e cucina contemporanea,
          nel cuore di Pinerolo.
        </p>

        <a
          href="https://wa.me/39NUMERO?text=Ciao%20vorrei%20prenotare%20un%20tavolo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prenota un tavolo
        </a>

      </div>

    </section>
  )
}