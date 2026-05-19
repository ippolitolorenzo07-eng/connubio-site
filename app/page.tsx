import Hero from "./components/Hero"
import Experience from "./components/Experience"

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <a
        href="https://wa.me/39NUMERO?text=Ciao%20vorrei%20prenotare%20un%20tavolo%20da%20Connubio"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg transition"
      >
        Prenota un tavolo
      </a>
    </main>
  )
}