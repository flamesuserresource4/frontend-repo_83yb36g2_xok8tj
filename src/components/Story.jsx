export default function Story() {
  return (
    <section id="story" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/5] rounded-2xl bg-[url('https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meine Geschichte</h2>
          <p className="mt-4 text-gray-700">Früher war ich schüchtern, unsicher, kraftlos – gefangen im 9–5. Ich wusste, da ist mehr in mir, aber ich kam nicht ins Handeln. Heute bin ich selbstbewusst, souverän, respektiert. Erfolgreich selbständig. Glücklich verheiratet. Und ich helfe Männern, denselben Weg zu gehen.</p>
          <p className="mt-4 text-gray-700">Kein Hokuspokus. Kein Gelaber. Klarer Plan, knallharte Ehrlichkeit, Umsetzen – jeden Tag. Genau das bekommst du bei mir.</p>
        </div>
      </div>
    </section>
  );
}
