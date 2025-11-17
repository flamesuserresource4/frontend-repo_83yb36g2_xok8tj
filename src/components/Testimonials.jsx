export default function Testimonials() {
  return (
    <section id="stimmen" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Erfolge von Männern, die den Schritt gegangen sind</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[{
            name: "Lukas, 29",
            text: "Ich war ständig im Kopf und habe gezögert. Nach 8 Wochen bin ich klar, direkter – und wurde im Job befördert.",
          },{
            name: "Marco, 37",
            text: "Zum ersten Mal setze ich Grenzen ohne Drama. Meine Beziehung ist entspannter – und ich respektiere mich selbst.",
          },{
            name: "David, 24",
            text: "Weniger Social Media, mehr Handeln. Ich stehe früher auf, trainiere, ziehe Dinge durch. Energie zurück!",
          }].map((t, i) => (
            <div key={i} className="p-6 rounded-xl border bg-white shadow-sm">
              <p className="text-gray-800">“{t.text}”</p>
              <div className="mt-4 text-sm text-gray-600">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
