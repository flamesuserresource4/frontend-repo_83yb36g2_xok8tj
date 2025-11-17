export default function CTA({ onPrimary }) {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Genug vom Kleinmachen?</h2>
        <p className="mt-3 text-gray-200">Hol dir jetzt dein kostenloses Erstgespräch. Ehrlich. Direkt. Ohne Bullshit.</p>
        <button onClick={onPrimary} className="mt-6 bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">Kostenloses Erstgespräch sichern</button>
      </div>
    </section>
  );
}
