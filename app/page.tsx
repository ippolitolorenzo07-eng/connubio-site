import Hero from "./components/Hero"
import Experience from "./components/Experience"

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <a
        href="https://wa.me/39NUMERO"
        className="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg"
      >
       Prenota
    </a>
    </main>
  )
}