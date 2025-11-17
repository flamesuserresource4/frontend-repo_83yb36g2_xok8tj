export default function Process() {
  return (
    <section id="prozess" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">So läuft es ab</h2>
        <ol className="mt-8 grid md:grid-cols-4 gap-6">
          <li className="p-6 rounded-xl border bg-white">
            <div className="text-3xl font-extrabold text-gray-900">1</div>
            <div className="mt-2 font-semibold">Erstgespräch</div>
            <p className="text-gray-700">Wir klären deine Situation, Ziele und ob es passt. Ehrlich und direkt.</p>
          </li>
          <li className="p-6 rounded-xl border bg-white">
            <div className="text-3xl font-extrabold text-gray-900">2</div>
            <div className="mt-2 font-semibold">Plan</div>
            <p className="text-gray-700">Du bekommst einen klaren Fahrplan – ohne Floskeln, mit klaren Aufgaben.</p>
          </li>
          <li className="p-6 rounded-xl border bg-white">
            <div className="text-3xl font-extrabold text-gray-900">3</div>
            <div className="mt-2 font-semibold">Umsetzung</div>
            <p className="text-gray-700">Wöchentlich 1:1, Fokus auf Umsetzung. Wir messen Fortschritt, passen an.</p>
          </li>
          <li className="p-6 rounded-xl border bg-white">
            <div className="text-3xl font-extrabold text-gray-900">4</div>
            <div className="mt-2 font-semibold">Ergebnisse</div>
            <p className="text-gray-700">Mehr Selbstvertrauen, Energie, Respekt. Sichtbare Wirkung im Alltag.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
