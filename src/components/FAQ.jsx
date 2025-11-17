export default function FAQ() {
  const faqs = [
    {
      q: "Ist das Coaching online oder vor Ort?",
      a: "Beides ist möglich. Die meisten 1:1 Sessions finden online statt – effizient und flexibel.",
    },
    {
      q: "Für wen ist das Coaching nicht geeignet?",
      a: "Für Männer, die Ausreden suchen, Verantwortung abgeben oder passiv bleiben wollen.",
    },
    {
      q: "Wie schnell sehe ich Ergebnisse?",
      a: "Wenn du umsetzt: in den ersten Wochen. Energie, Klarheit und Wirkung steigen spürbar.",
    },
    {
      q: "Was kostet es?",
      a: "Das klären wir im Erstgespräch – abhängig von Intensität und Dauer.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Häufige Fragen</h2>
        <div className="mt-8 divide-y divide-gray-200 border rounded-xl bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6 open:bg-gray-50">
              <summary className="cursor-pointer list-none font-semibold text-gray-900 flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-gray-500 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
