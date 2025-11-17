export default function Program() {
  return (
    <section id="programm" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Das Programm: Klar. Strukturiert. Wirksam.</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="font-semibold text-lg">1. Fundament</h3>
            <p className="text-gray-700 mt-2">Ehrliche Standortbestimmung, Identität als Mann, klare Ziele. Wir zerlegen Ausreden – und bauen Fokus auf.</p>
          </div>
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="font-semibold text-lg">2. Energie & Disziplin</h3>
            <p className="text-gray-700 mt-2">Körper, Schlaf, Routine. Du lernst, deine Energie zu führen – nicht andersherum.</p>
          </div>
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="font-semibold text-lg">3. Wirkung & Durchsetzung</h3>
            <p className="text-gray-700 mt-2">Kommunikation, Grenzen setzen, Präsenz. Respekt entsteht durch Klarheit und Handeln.</p>
          </div>
        </div>
        <div className="mt-6 text-gray-700">Plus: Wöchentliche 1:1 Sessions, Aufgaben mit Feedback, klare Messbarkeit, Support zwischen den Terminen.</div>
      </div>
    </section>
  );
}
