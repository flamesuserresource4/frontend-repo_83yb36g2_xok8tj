export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="relative pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-medium mb-4">
            Mann-zu-Mann Coaching • Schweiz
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Werde die stärkste Version deiner selbst.
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Du bist kein "Problemfall" – dir fehlt Klarheit, Fokus und ein ehrlicher Sparringpartner. Schluss mit Ausreden. Schluss mit kleinmachen. Zeit, dich zu respektieren.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li className="flex items-start gap-2"><span className="text-green-600">•</span> Praxisnah, direkt, ohne Esoterik.</li>
            <li className="flex items-start gap-2"><span className="text-green-600">•</span> Klare Struktur, messbare Schritte.</li>
            <li className="flex items-start gap-2"><span className="text-green-600">•</span> Coach, der denselben Weg gegangen ist.</li>
            <li className="flex items-start gap-2"><span className="text-green-600">•</span> Fokus auf Respekt, Energie, Wirkung.</li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onPrimary} className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-black transition">Kostenloses Erstgespräch sichern</button>
            <button onClick={onSecondary} className="px-6 py-3 rounded-md font-semibold border border-gray-300 hover:bg-gray-100 transition">Mehr über das Programm</button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-2xl"></div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-lg p-4 w-60">
            <div className="text-sm font-semibold">Vom unsicheren Mann zum souveränen Gewinner</div>
            <div className="text-xs text-gray-600">100+ Männer begleitet</div>
          </div>
        </div>
      </div>
    </section>
  );
}
