export default function Experience() {
  return (
    <section className="bg-[#111111] text-white py-24 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
            className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* TEXT */}
        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
            La nostra filosofia
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Un connubio tra
            <span className="font-semibold"> vino </span>
            e cucina contemporanea
          </h2>

          <p className="text-gray-400 mt-8 leading-relaxed">
            Ogni piatto nasce dall’incontro tra ingredienti selezionati,
            ricerca gastronomica e una carta vini pensata per accompagnare
            ogni esperienza sensoriale.
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Nel cuore di Pinerolo, Connubio offre un ambiente elegante,
            intimo e contemporaneo dove il gusto diventa esperienza.
          </p>

          <button className="mt-10 border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            Scopri il menu
          </button>

        </div>

      </div>

    </section>
  )
}