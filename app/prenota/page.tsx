export default function PrenotaPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <form
        className="w-full max-w-lg space-y-4 bg-[#111] p-8 rounded-2xl shadow-lg"
        onSubmit={(e) => {
          e.preventDefault()
          alert("Prenotazione inviata!")
        }}
      >

        <h1 className="text-3xl font-light mb-6">
          Prenota un tavolo
        </h1>

        <input
          type="text"
          placeholder="Nome"
          className="w-full p-3 rounded bg-black border border-gray-700"
        />

        <input
          type="tel"
          placeholder="Telefono"
          className="w-full p-3 rounded bg-black border border-gray-700"
        />

        <input
          type="date"
          className="w-full p-3 rounded bg-black border border-gray-700"
        />

        <input
          type="number"
          placeholder="Numero persone"
          className="w-full p-3 rounded bg-black border border-gray-700"
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Invia prenotazione
        </button>

      </form>

    </main>
  )
}